<script>
    import {getContext} from "svelte";

    export let columns;
    export let contextMenu;

    export let selectedAll;
    export let data;


    let hovering = false;

    function toggleAll() {
        $data = $data.map(row => {
            row.__selected = !$selectedAll
            return row
        })
    }

    const drop = (event, target) => {
        event.dataTransfer.dropEffect = 'move';
        const start = parseInt(event.dataTransfer.getData("text/plain"));
        const newTracklist = $columns
        if (newTracklist[start].mandatory || newTracklist[target].mandatory) return

        if (start < target) {
            newTracklist.splice(target + 1, 0, newTracklist[start]);
            newTracklist.splice(start, 1);
        } else {
            newTracklist.splice(target, 0, newTracklist[start]);
            newTracklist.splice(start + 1, 1);
        }
        columns.set(newTracklist)
        hovering = null
    }

    const dragstart = (event, start) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.setData('text/plain', start);
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

<thead>
<th class="headCheckbox">
    <input bind:checked={$selectedAll} on:click={toggleAll} type="checkbox">
</th>
{#each $columns as column, index (column)}
    {#if column.visible}
        <th
                on:contextmenu|preventDefault={contextMenu}
                draggable={!column.mandatory}
                on:dragstart={event => dragstart(event, index)}
                on:drop|preventDefault={event => drop(event, index)}
                ondragover="return false"
                on:dragenter={() => hovering = index}
                class:is-active={hovering === index && !column.mandatory}
                class:sortable={column.sortable}
                class:sorted={$sort === column.sortable}
                class:reversed={$sort === column.sortable && !$direction}
                on:click={() => toggleSort(column)}
        >
            <div class="content">
                {column.name}
            </div>
        </th>
    {/if}
{/each}
</thead>

<style>
    thead {
        position: sticky;
        top: 0;
        background: white;
        color: #606060;
        font-weight: 1;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }

    .headCheckbox {
        width: 20px;
    }

    .is-active {
        background-color: #3273dc;
        color: #fff;
    }

    .content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
    }

    .sortable {
        text-decoration: underline;
    }

    .sorted {
        color: blue;
    }

    .reversed {
        color: red;
    }

    @media screen and (max-width: 768px) {
        thead {
            display: none;
        }
    }
    [draggable=true] {
        cursor: grab;
    }

    .sortable {
        cursor: pointer;
    }

</style>