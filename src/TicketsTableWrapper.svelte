<script>
    import TicketsTable from "./TicketsTable.svelte";

    export let apikey;
    export let filters = "[[\"rstatus\",\"IN\",\"A,P,T,N,C,R,W\"],[\"channel_type\",\"IN\",\"B,M,E,F,A,I,Q,S,C,W,T,V\"]]"
</script>

<svelte:options tag="tickets-table" />

{#if apikey}
<TicketsTable apikey={apikey} filters={filters}>
    <slot>
    </slot>
</TicketsTable>
{/if}