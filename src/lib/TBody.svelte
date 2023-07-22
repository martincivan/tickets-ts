<script>

    export let columns;
    export let data;
    export let middleclickhandler;

</script>

{#each $data as row, i}

    <div class="row rowGlobal" on:click={() => location.assign("#Conversation;id=" + row.conversationid)} on:mousedown={(event) => {
        if (event.button == 1 && middleclickhandler) {
            middleclickhandler(row.conversationid);
            event.preventDefault();
            event.stopPropagation();

        }
    }}>
        <div class="cell select">
            <input type="checkbox" value={row.conversationid} bind:checked={$data[i].__selected}
                   on:click|stopPropagation={() => {}}>
        </div>
        {#each columns as column}
            {#if column.visible}
                <div class="cell">
                    <div class="content">
                        <svelte:component this={column.renderer} {column} {row}></svelte:component>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
{/each}
<slot></slot>

<style>
    .content {
        width: 100%;
        height: fit-content;
    }

    .cell {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    :global(.rowGlobal) {
    }

    .row {
        display: contents;
    }

    .row > :first-child {
        border-start-start-radius: 10px;
        border-end-start-radius: 10px;
        border-inline-start: 1px solid black;
    }

    .row > :last-child {
        border-start-end-radius: 10px;
        border-end-end-radius: 10px;
        border-inline-end: 1px solid black;

    }

    .row > div {
        border-top: solid 1px black;
        border-bottom: solid 1px black;
    }

    .row:hover > div {
        background-color: rgba(var(--inverted), 0.1);
    }

    @media screen and (max-width: 768px) {
        .row {
            display: block;
            flex-direction: column;
            border-radius: 10px;
            border: 1px solid black;
            margin-top: 5px;
        }

        .row > :first-child {
            border: none;
        }

        .row > div {
            border: none;
            display: none;
        }

        .row div:nth-child(n+2):nth-child(-n+5) {
            display: block;
        }
    }

</style>