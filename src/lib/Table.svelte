<script>
    import {onMount} from 'svelte';
    import THead from "./THead.svelte";
    import TBody from "./TBody.svelte";
    import LoadMore from "./LoadMore.svelte";

    export let data;
    export let columns;
    export let contextMenu;
    export let loadMore;
    export let middleclickhandler;
    export let selectedAll;

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
    <THead {columns} contextMenu={contextMenu} {data} {selectedAll}/>
    <TBody columns={$columns} {data} {middleclickhandler} {selectedAll}>
    </TBody>
    <div bind:this={loadRow} class="load" on:click={loadMore}>
        <LoadMore/>
    </div>

</div>

<style>
    .load {
        width: 100%;
    }

    table {
        max-height: 100%;
        width: 100%;
        border-spacing: 4px 5px;
        border: none;
        table-layout: fixed;
    }

    .container {
        display: grid;
        grid-template-columns: 25px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        width: 100%;
        flex-grow: 1;
        flex-basis: 0;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    @media screen and (max-width: 768px) {
        table {
            display: block;
        }

        .load {
            display: block;
        }
    }

</style>/