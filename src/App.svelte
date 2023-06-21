<script>
    import Table from "./lib/Table.svelte";
    import {writable} from "svelte/store";
    import {Column, DateColumnDefinition, SimpleColumnDefinition} from "./lib/columns/columns.js";
    import UserColumn from "./lib/columns/UserColumn.svelte";
    import ComplexColumn from "./lib/columns/ComplexColumn.svelte";
    import {TagsLoader} from "./lib/tags/tags.js";
    import {setContext} from "svelte";
    import ColumnEditor from "./lib/columns/ColumnEditor.svelte";
    import {
        Configuration,
        GetAgentsGridListSortDirEnum,
        GetTicketsGridListSortFieldEnum,
        GridApi
    } from "@qualityunit/liveagent-api";


    let columns = writable([
        new Column("User", UserColumn, false, true),
        new Column("Ticket", ComplexColumn, false, true),
        new DateColumnDefinition("Date changed", GetTicketsGridListSortFieldEnum.Datechanged, true),
        new DateColumnDefinition("Date created", GetTicketsGridListSortFieldEnum.Datecreated),
        new DateColumnDefinition("Date resolved", GetTicketsGridListSortFieldEnum.Dateresolved),
        new DateColumnDefinition("Status changed", GetTicketsGridListSortFieldEnum.Statuschanged),
        new DateColumnDefinition("Last activity", GetTicketsGridListSortFieldEnum.LastActivity, true),
        new DateColumnDefinition("Date reopen", GetTicketsGridListSortFieldEnum.Datereopen),
        new DateColumnDefinition("Date due", GetTicketsGridListSortFieldEnum.Datedue, true),
        new SimpleColumnDefinition("Ticket ID", "code"),
        new SimpleColumnDefinition("Source", "channelType"),
        new SimpleColumnDefinition("Status", "status")

    ]);
    let tagsLoader = new TagsLoader();
    tagsLoader.load();
    setContext("tagsMap", tagsLoader.tags);


    const config = new Configuration(
        {
            apiKey: "x1s93tw5wv87gtlfjz779ffeioea8wgi",
            basePath: "https://hosted.la.localhost/LiveAgent/server/api/v3",
        }
    );
    const api = new GridApi(config);

    const data = writable([])
    const sort = writable(GetTicketsGridListSortFieldEnum.Rorder)
    const direction = writable(true)
    const loading = writable(false)
    const cursor = writable(null)
    let loaded = false


    let createOptions = () => {
        return {
            "perPage": 20,
            "sortDir": $direction ? GetAgentsGridListSortDirEnum.Asc : GetAgentsGridListSortDirEnum.Desc,
            // "filters": "[[\"rstatus\",\"IN\",\"A\"],[\"channel_type\",\"IN\",\"B,M,E,F,A,I,Q,S,C,W,T,V\"]]",
            "filters": "[[\"rstatus\",\"IN\",\"A,P,T,N,C,R,W\"],[\"channel_type\",\"IN\",\"B,M,E,F,A,I,Q,S,C,W,T,V\"]]",
            "sortField": $sort,
            "cursor": $cursor ? $cursor : ""
        }
    }


    let loadMore = async (expired = false) => {
        if ($loading) return // already loading

        if (!$cursor && loaded) return // no more data
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
</script>

<main>
    <h1>Table</h1>
    Loading: {$loading}
    Loaded: {$data.length}
    Next: {$cursor}
    <ColumnEditor {columns} bind:this={columnEditor}/>
    <Table {data} {columns} {loadMore} {contextMenu} />
</main>

<style>

</style>