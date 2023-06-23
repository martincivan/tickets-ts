<script>
    import Table from "./lib/Table.svelte";
    import {writable} from "svelte/store";
    import {columns} from "./lib/columns/columns.js";
    import {TagsLoader} from "./lib/tags/tags.js";
    import {setContext} from "svelte";
    import ColumnEditor from "./lib/columns/ColumnEditor.svelte";
    import {
        Configuration,
        GetAgentsGridListSortDirEnum,
        GetTicketsGridListSortFieldEnum,
        GridApi
    } from "@qualityunit/liveagent-api";

    export let apikey;
    export let filters = "[[\"rstatus\",\"IN\",\"A,P,T,N,C,R,W\"],[\"channel_type\",\"IN\",\"B,M,E,F,A,I,Q,S,C,W,T,V\"]]"
    export let middleclickhandler;


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
        //console.log("apikey")
        //console.log(apikey)
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

    $: filters && loadMore(true)
</script>

<main>
    <slot></slot>
    Loading: {$loading}
    Loaded: {$data.length}
    <button on:click={() => loadMore(true)}>Reload</button>
    <ColumnEditor {columns} bind:this={columnEditor}/>
    <Table {columns} {contextMenu} {data} {loadMore} {middleclickhandler}/>
</main>

<style>

</style>