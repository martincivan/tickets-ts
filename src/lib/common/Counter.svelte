<script>
    import {getContext} from "svelte";

    export let data;
    export let cursor;
    export let filter;

    let count = null;
    let loading = false;

    $: filter && reset();

    function reset() {
        count = null;
    }

    async function load() {
        if (loading) return;
        let api = getContext("api");
        let c = await api.getTicketsGridListCount({
            filters: filter,
            timezoneOffset: new Date().getTimezoneOffset()
        })
        count = c.count
    }

</script>

<span on:click={load}>
    Showing {$data.length}
    {#if $cursor}
        of {count ?? "many"}
    {/if}
    results
    {#if loading}
        <p>loading...</p>
    {/if}
</span>

<style>
    span {
        margin-right: 10px;
    }
</style>