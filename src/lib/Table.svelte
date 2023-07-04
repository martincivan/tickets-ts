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
    <table>
        <THead {columns} contextMenu={contextMenu} {data} {selectedAll}/>
        <TBody columns={$columns} {data} {middleclickhandler} {selectedAll}>
        <td class="load" colspan="{$columns.reduce((p, c ) => p + c.visible, 1)}">
            <div bind:this={loadRow} class="load" on:click={loadMore}>

                <LoadMore/>
            </div>

        </td>
        </TBody>
    </table>
</div>

<style>
    .load {
        width: 100%;
    }

    table {
        height: 100%;
        width: 100%;
        border-spacing: 4px 5px;
        border: none;
        table-layout: fixed;
    }

    .container {
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