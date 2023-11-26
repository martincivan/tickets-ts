<script>
    import {getContext} from "svelte";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import TiArrowSortedUp from "svelte-icons-pack/ti/TiArrowSortedUp.js";
    import TiArrowUnsorted from "svelte-icons-pack/ti/TiArrowUnsorted.js";
    import TiArrowSortedDown from "svelte-icons-pack/ti/TiArrowSortedDown.js";

    export let columns;
    export let selectedAll;
    export let data;

    function toggleAll() {
        $data = $data.map(row => {
            row.__selected = !$selectedAll
            return row
        })
    }

    const sort = getContext("sort")
    const direction = getContext("direction")

    const toggleSort = (column) => {
        if (column.sortable) {
            if ($sort === column.sortable) {
                if ($direction) {
                    direction.set(false)
                } else {
                    direction.set(true)
                }
            } else {
                sort.set(column.sortable)
                direction.set(true)
            }
        }
    }

</script>

<div class="Head">
    <div class="headCheckbox">
        <input bind:checked={$selectedAll} on:click={toggleAll} type="checkbox">
    </div>
    {#each $columns as column (column)}
        <button
            class:sortable={column.sortable}
            class:sorted={$sort === column.sortable}
            class:reversed={$sort === column.sortable && !$direction}
            on:click={() => toggleSort(column)}
        >
            <div class="content">
                {#if column.sortable}
                    {#if $sort === column.sortable}
                        {#if $direction}
                            <Icon  src="{TiArrowSortedUp}"></Icon>
                        {:else}
                            <Icon  src="{TiArrowSortedDown}"></Icon>
                        {/if}
                    {:else}
                        <Icon  src="{TiArrowUnsorted}"></Icon>
                    {/if}
                {/if}
                {column.name}
            </div>
        </button>
    {/each}
</div>

<style>
    .Head {
        display: none;
    }

    .headCheckbox {
        width: 20px;
    }

    .content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
    }

    button {
        border: none;
        background: none;
        font-size: 13px;
        font-weight: 400;
        color: var(--department-bg-color);
    }

    @media screen and (min-width: 768px) {
        .Head {
            display: grid;
            grid-template-columns: 60px 1fr 3fr 1fr;
            position: sticky;
            top: 0;
            color: #606060;
            font-size: 14px;
            font-family: 'Roboto', sans-serif;
        }
    }

    @media (min-width: 1300px) {
        .Head {
            grid-template-columns: 60px 260px auto 230px;
        }
    }

    .sortable {
        cursor: pointer;
    }

</style>