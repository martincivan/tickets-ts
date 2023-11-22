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
    .Checkbox {
        position: relative;
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

    .Row {
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        box-shadow: 0 0 5px 2px rgb(0 0 0 / 0.2);
    }

    .Row:hover {
        background-color: rgba(127, 144, 164, 0.15);
    }

    .Row.Selected {
        background-color: #DCF3FE !important;
    }

    @media (min-width: 826px) and (max-width: 1649px) {
        .Row {
            grid-template-columns: 60px 175px auto 190px;
        }
    }

    @media screen and (min-width: 768px) {
        .Row {
            display: grid;
            grid-template-columns: 60px 260px auto 230px;
            height: 80px;
        }
    }
</style>