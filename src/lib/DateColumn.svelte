<script>
    import Time from "svelte-time";

    export let row;
    export let column;

</script>
<div>
    {#if row[column.field] instanceof Date && !isNaN(row[column.field])}
        <Time timestamp={row[column.field]} relative={column.relative} format="h:MM MMM DD, YYYY"/>
    {:else}
        <span class="text-muted">-</span>
    {/if}
</div>
