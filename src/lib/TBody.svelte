<script>
    import Time from "svelte-time";

    export let columns;
    export let data;

</script>

<tbody>
{#each $data as row}
    <tr>
        {#each columns as column}
            <td>
                <svelte:component this={column.renderer} {column} {row}></svelte:component>
            </td>
        {/each}
    </tr>
{/each}
</tbody>