<script>
    import StatusLabel from "../StatusLabel.svelte";
    import Time from "svelte-time";
    import {GetTicketsGridListSortFieldEnum} from "@qualityunit/liveagent-api";

    export let row;
</script>

<div>
    <StatusLabel status={row.status}/>
    <div class="hidden">
        From:
        <Time format="h:MM MMM DD, YYYY" relative={true}
              timestamp={row[GetTicketsGridListSortFieldEnum.Statuschanged]}/>
    </div>
    {#if !isNaN(row.datereopen) }
        <div class="hidden">
            Reopen:
            <Time timestamp={row.datereopen} relative={true} format="h:MM MMM DD, YYYY"/>
        </div>
    {/if}
    {#if !isNaN(row.dateresolved)}
        <div class="hidden">
            Resolved:
            <Time timestamp={row.dateresolved} relative={true} format="h:MM MMM DD, YYYY"/>
        </div>
    {/if}
</div>

<style>
    .hidden {
        display: none;
    }

    :global(.rowGlobal):hover .hidden {
        display: block;
    }
</style>
