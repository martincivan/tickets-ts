<script>
    import { onMount } from 'svelte';
    import THead from "./THead.svelte";
    import TBody from "./TBody.svelte";

    export let data;
    export let columns;

    export let loadMore;

    let loadRow;
    let table;

    onMount(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        }, {
            root: table,
            threshold: 0.5
        });

        observer.observe(loadRow);
        return () => observer.unobserve(loadRow);
    });


</script>


<table bind:this={table}>
    <THead columns={columns}/>
    <TBody {data} columns={$columns}/>
    <div bind:this={loadRow} on:click={loadMore}>Loading...</div>
</table>

<style>
    table {
        overflow-y: scroll;
        overflow-x: hidden;
        height: 500px;
        display: block;
    }
</style>