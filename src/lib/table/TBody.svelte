<script>
    import getStatusColor from "../common/getStatusColor.js";
    export let columns;
    export let data;
    export let middleclickhandler;
</script>

<div class="Body">
{#each $data as row, i}
    <div class="Row {$data[i].__selected ? 'Selected' : ''}" on:click={() => location.assign("#Conversation;id=" + row.conversationid)} on:mousedown={(event) => {
        if (event.button === 1 && middleclickhandler) {
            middleclickhandler(row.conversationid);
            event.preventDefault();
            event.stopPropagation();
        }
    }}>
        <div class="Checkbox" style="position: relative">
            <div class="StatusBar" style="background-color: {getStatusColor(row.status)}" ></div>
            <input type="checkbox" value={row.conversationid} bind:checked={$data[i].__selected}
                   on:click|stopPropagation={() => {}}>
        </div>
        {#each columns as column}
            <svelte:component this={column.renderer} {column} {row}></svelte:component>
        {/each}
    </div>
{/each}
<slot/>
</div>

<style>
    .Row {
        display: grid;
        grid-template-columns: 1fr;
        border-radius: 12px;
        box-shadow: 0 0 5px 2px rgb(0 0 0 / 0.2);
    }

    .Row:hover {
        background-color: var(--department-bg-color);
    }

    .Row.Selected {
        background-color: #DCF3FE !important;
    }

    .StatusBar {
        position: absolute;
        left: 0;
        top: 10%;
        content: "";
        width: 6px;
        height: 80%;
        margin-left: 8px;
        border-radius: 69px;
    }

    input {
        position: absolute;
        top: 40%;
        left: 40%;
    }

    @media screen and (min-width: 768px) {
        .Row {
            display: grid;
            grid-template-columns: 60px 1fr 3fr 1fr;
            height: 80px;
        }

        .Checkbox {
            position: relative;
        }
    }

    @media (min-width: 1300px) {
        .Row {
            grid-template-columns: 60px 260px auto 230px;
        }
    }
</style>