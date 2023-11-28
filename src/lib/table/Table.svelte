<script>
    import {onMount} from 'svelte';
    import THead from "./THead.svelte";
    import TBody from "./TBody.svelte";
    import LoadMore from "../common/LoadMore.svelte";

    export let data;
    export let columns;
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
    <THead {columns} {data} {selectedAll}/>
    <TBody columns={$columns} {data} {middleclickhandler}>
    <div class="load">
        <div bind:this={loadRow} class="load" on:click={loadMore}>
            <LoadMore/>
        </div>
    </div>
    </TBody>
</div>

<style>
    .load {
        display: block;
    }

    .container {
        width: calc(100% - 16px);
        flex-grow: 1;
        flex-basis: 0;
        padding: 8px;
        overflow-y: scroll;
        overflow-x: hidden;
        border-spacing: 4px 5px;
        border: none;
    }

    @media screen and (min-width: 768px) {
        .load {
            width: 100%;
        }
    }
</style>