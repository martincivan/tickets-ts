<script>
    import {onMount} from 'svelte';
    import THead from "./THead.svelte";
    import TBody from "./TBody.svelte";

    export let data;
    export let columns;
    export let contextMenu;
    export let loadMore;

    let loadRow;
    let container

    onMount(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        }, {
            root: container,
            threshold: 0.5
        });

        observer.observe(loadRow);
        return () => observer.unobserve(loadRow);
    });


</script>

<div class="container" bind:this={container}>
    <table>
        <THead {columns} contextMenu={contextMenu} />
        <TBody columns={$columns} {data}/>
        <div bind:this={loadRow} on:click={loadMore}>Loading...</div>
    </table>
</div>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 4px 5px;
        border: none;
        table-layout: fixed;
    }

    .container {
        width: 100%;
        height: 500px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>