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

<div bind:this={container} class="container"
     style="grid-template-columns: 25px {$columns.filter(c=>c.visible).map(c => c.size).join(' ')};">
    <THead {columns} contextMenu={contextMenu} {data} {selectedAll}/>
    <TBody columns={$columns} {data} {middleclickhandler} {selectedAll}>
    </TBody>
    <div bind:this={loadRow} class="load" on:click={loadMore}>
        <LoadMore/>
    </div>

</div>

<style>
    .load {
        grid-column: 1/-1;
    }

    .container {
        display: grid;
        row-gap: 5px;
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 100%;
    }

    @media screen and (max-width: 768px) {
        .container {
            display: block;
        }

        .load {
            display: block;
        }
    }

</style>