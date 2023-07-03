<script>

    export let columns;
    export let data;
    export let middleclickhandler;

</script>

<tbody>
{#each $data as row, i}
    <tr on:click={() => location.assign("#Conversation;id=" + row.conversationid)} on:mousedown={(event) => {
        if (event.button == 1 && middleclickhandler) {
            middleclickhandler(row.conversationid);
            event.preventDefault();
            event.stopPropagation();

        }
    }}>
        <td>
            <input type="checkbox" value={row.conversationid} bind:checked={$data[i].__selected}
                   on:click|stopPropagation={() => {}}>
        </td>
        {#each columns as column}
            {#if column.visible}
                <td>
                    <div class="content">
                        <svelte:component this={column.renderer} {column} {row}></svelte:component>
                    </div>
                </td>
            {/if}
        {/each}
    </tr>
{/each}
</tbody>

<style>
    tr {
        border-radius: 12px;
        box-shadow: 0 0 5px 2px rgb(0 0 0 / 0.2);
    }

    tr:hover {
        background-color: #f1f1f1;
    }

    td {
        padding-bottom: 5px;
        padding-top: 5px;
    }

    .content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media screen and (max-width: 768px) {
        tr {
            display: block;
        }

        td {
            display: none;
        }

        td:nth-child(-n+4) {
            display: block;
            margin-bottom: 10px;
        }

    }
</style>