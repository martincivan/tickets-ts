<script>

    import {getContext} from "svelte";

    let dialog;
    export let columns;

    export function openDialog() {
        dialog.showModal();
    }

    let hovering = false;
    const sort = getContext("sort")
    const direction = getContext("direction")

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

</script>
<button on:click={openDialog}>Edit</button>
<dialog bind:this={dialog} open>
    <h2>Manage grid</h2>
    <div class="checkboxes">
    {#each $columns as column, index (column)}
        <label
                draggable={!column.mandatory}
                on:dragstart={event => dragstart(event, index)}
                on:drop|preventDefault={event => drop(event, index)}
                ondragover="return false"
                on:dragenter={() => hovering = index}
                class:is-active={hovering === index && !column.mandatory}
                class:sortable={column.sortable}
                class:sorted={$sort === column.sortable}
                class:reversed={$sort === column.sortable && !$direction}
        >
            {column.name}
            <input type="checkbox" bind:checked={column.visible} disabled={column.mandatory}/>
        </label>
    {/each}
    </div>
    <div class="buttons">
        <button on:click={() => dialog.close()}>Done</button>
    </div>

</dialog>

<style>
    dialog {
        z-index: 1;
        width: 400px
    }
    h2, label, .buttons {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    dialog {
         padding: 0;
    }

    label {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        padding-bottom: 10px;
        border-top: #ccc 1px solid;
    }

    .is-active {
        background-color: #3273dc;
        color: #fff;
    }

    label:hover {
        background-color: #d6d6d6;
    }

    .checkboxes {
        border-bottom: 1px solid #ccc;
    }

    .buttons {
        width: fit-content;
        margin-left: auto;
        padding: 1rem;
    }
</style>