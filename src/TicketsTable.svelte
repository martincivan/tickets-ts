<script>
    import Table from "./lib/Table.svelte";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import {writable} from "svelte/store";
    import {Column} from "./lib/columns/columns.js";
    import {TagsLoader} from "./lib/tags/tags.js";
    import {setContext} from "svelte";
    import {
        Configuration,
        GetAgentsGridListSortDirEnum,
        GetTicketsGridListSortFieldEnum,
        GridApi
    } from "@qualityunit/liveagent-api";
    import Counter from "./lib/Counter.svelte";
    import {t} from 'svelte-intl-precompile'
    import UserColumn from "./lib/columns/UserColumn.svelte";
    import StatusColumn from "./lib/columns/StatusColumn.svelte";
    import TiArrowSync from "svelte-icons-pack/ti/TiArrowSync.js";

    let columns;

    $: columns = writable([
        new Column($t("User"), UserColumn, false),
        new Column($t("Status"), StatusColumn, false)
    ]);

    export let apikey;
    export let filters;
    export let middleclickhandler;
    export let selectionHandler;

    let selection = writable({})
    let selectedAll = writable(false)

    $: selectionHandler($selection, $selectedAll);

    let tagsLoader = new TagsLoader(apikey);
    tagsLoader.load();
    setContext("tagsMap", tagsLoader.tags);

    let error = writable(null)
    setContext("error", error)


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

        try {
            const response = await api.getTicketsGridDatasetRaw(createOptions());
            const value = await response.value();
            if (expired === true) {
                $data = []
            }
            $data = $data.concat(value.rows)
            $cursor = value.cursor
            loaded = true
        } catch (e) {
            error.set(e.toString())
        }
        $loading = false
    }

    direction.subscribe(async () => {
        await loadMore(true)
    })
    sort.subscribe(async () => {
        await loadMore(true)
    })
    setContext("direction", direction)
    setContext("sort", sort)

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
    </div>
    <Table {columns} {data} {loadMore} {middleclickhandler} {selectedAll}/>
</main>

<style>

    main {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

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