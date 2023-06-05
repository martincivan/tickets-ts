<script>

    export let columns;
    export let data;

</script>

<tbody>
{#each $data as row}
    <tr>
        {#each columns as column}
            <td>
                <div class="content">
                    <svelte:component this={column.renderer} {column} {row}></svelte:component>
                </div>
            </td>
        {/each}
    </tr>
{/each}
</tbody>

<style>
    tr {
        border-radius: 12px;
        box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 0.2);
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
</style>