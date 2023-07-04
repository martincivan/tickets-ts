<script>
    import Table from "./lib/Table.svelte";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import {writable} from "svelte/store";
    import {Column, DateColumnDefinition, SimpleColumnDefinition} from "./lib/columns/columns.js";
    import {TagsLoader} from "./lib/tags/tags.js";
    import {setContext} from "svelte";
    import ColumnEditor from "./lib/columns/ColumnEditor.svelte";
    import {
        Configuration,
        GetAgentsGridListSortDirEnum,
        GetTicketsGridListSortFieldEnum,
        GridApi
    } from "@qualityunit/liveagent-api";
    import Counter from "./lib/Counter.svelte";
    import {t} from 'svelte-intl-precompile'
    import UserColumn from "./lib/columns/UserColumn.svelte";
    import ComplexColumn from "./lib/columns/ComplexColumn.svelte";
    import TiArrowSync from "svelte-icons-pack/ti/TiArrowSync.js";
    import StatusLabel from "./lib/StatusLabel.svelte";

    let columns = writable([])

    $: columns = writable([
        new Column($t("User"), UserColumn, false, true),
        new Column($t("Ticket"), ComplexColumn, false, true),
        new DateColumnDefinition($t("Date changed"), GetTicketsGridListSortFieldEnum.Datechanged, true),
        new DateColumnDefinition("Date created", GetTicketsGridListSortFieldEnum.Datecreated),
        new DateColumnDefinition("Date resolved", GetTicketsGridListSortFieldEnum.Dateresolved),
        new DateColumnDefinition("Status changed", GetTicketsGridListSortFieldEnum.Statuschanged),
        new DateColumnDefinition("Last activity", GetTicketsGridListSortFieldEnum.LastActivity, true),
        new DateColumnDefinition("Date reopen", GetTicketsGridListSortFieldEnum.Datereopen),
        new DateColumnDefinition("Date due", GetTicketsGridListSortFieldEnum.Datedue, true),
        new SimpleColumnDefinition("Ticket ID", "code"),
        new SimpleColumnDefinition("Source", "channelType"),
        new Column($t("Status"), StatusLabel, false, false, true),

    ]);

    export let apikey;
    export let filters = "[[\"rstatus\",\"IN\",\"A,P,T,N,C,R,W\"],[\"channel_type\",\"IN\",\"B,M,E,F,A,I,Q,S,C,W,T,V\"]]"
    export let middleclickhandler;

    export let selectionHandler;

    let selection = writable({})
    let selectedAll = writable(false)

    $: selectionHandler($selection, $selectedAll);

    let tagsLoader = new TagsLoader(apikey);
    tagsLoader.load();
    setContext("tagsMap", tagsLoader.tags);


    const config = new Configuration(
        {
            apiKey: apikey,
            basePath: "https://hosted.la.localhost/LiveAgent/server/api/v3",
        }
    );
    const api = new GridApi(config);

    setContext("api", api);

    const data = writable([])
    setContext("data", data)
    const sort = writable(GetTicketsGridListSortFieldEnum.Rorder)
    const direction = writable(true)
    const loading = writable(false)
    setContext("loading", loading)
    const cursor = writable(null)
    setContext("cursor", cursor)
    let loaded = false


    let createOptions = () => {
        return {
            "perPage": 20,
            "sortDir": $direction ? GetAgentsGridListSortDirEnum.Asc : GetAgentsGridListSortDirEnum.Desc,
            // "filters": "[[\"rstatus\",\"IN\",\"A\"],[\"channel_type\",\"IN\",\"B,M,E,F,A,I,Q,S,C,W,T,V\"]]",
            filters,
            "sortField": $sort,
            "cursor": $cursor ? $cursor : ""
        }
    }


    let loadMore = async (expired = false) => {
        if ($loading) return // already loading

        if (!$cursor && loaded && !expired) return // no more data
        $loading = true

        if (expired === true) {
            $cursor = null
            loaded = false
        }

        const response = await api.getTicketsGridDatasetRaw(createOptions());
        const value = await response.value();
        if (expired === true) {
            $data = []
        }
        $data = $data.concat(value.data)
        $cursor = value.cursor

        $loading = false
        loaded = true

    }

    direction.subscribe(async () => {
        await loadMore(true)
    })
    sort.subscribe(async () => {
        await loadMore(true)
    })
    setContext("direction", direction)
    setContext("sort", sort)

    let columnEditor;

    let contextMenu = (e) => {
        columnEditor.openDialog();
    }

    data.subscribe(d => {
        selection.set(d.filter((e) => (e.__selected ?? false)).map((e) => e.conversationid))
    });

    $: filters && loadMore(true)
</script>

<main>
    <div class="tools">
        <slot></slot>
        <Counter {cursor} {data} filter={filters}/>
        <button class:loading={$loading} on:click={() => loadMore(true)} title={$t("Reload")}>
            <Icon size="20px" src={TiArrowSync}/>
        </button>
        <ColumnEditor bind:this={columnEditor} {columns}/>
    </div>
    <Table {columns} {contextMenu} {data} {loadMore} {middleclickhandler} {selectedAll}/>
</main>

<style>

    .tools {
        display: flex;
        align-items: center;
        justify-content: right;
        padding: 0 30px;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        height: 20px;
        width: 20px;
    }

    .loading {
        animation-name: rotate;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

</style>