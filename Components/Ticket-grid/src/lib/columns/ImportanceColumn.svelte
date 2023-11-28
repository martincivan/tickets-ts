<script>
    import Column from "./Column.svelte";
    import DateDisplay from "../common/DateDisplay.svelte";
    import {t} from 'svelte-intl-precompile'
    import Tag from "../tags/Tag.svelte";
    import SLATag from "../tags/SLATag.svelte";
    import Icon from "../common/Icon.svelte";

    export let className = "importanceColumn";
    export let row;
    export let format = "YYYY-MM-DD HH:mm:ss";

    const CREATED = $t("Created");
</script>

<Column {className}>
    <span class="TicketId">{row["code"]}</span>
    <div class="Communication incomingMessages">
        <Icon iconVariable="la-incoming" />
        <span>{row["messagegroupsIn"]}</span>
    </div>
    <div class="Communication outgoingMessages">
        <Icon iconVariable="la-outgoing"/>
        <span>{row["messagegroupsOut"]}</span>
    </div>
    <div class="Created">
        <span>{CREATED}: </span>
        <DateDisplay data={row["datecreated"]} {format} />
    </div>
    {#if row.datedue instanceof Date && !isNaN(row.datedue)}
        <SLATag tagText="First answer" due={row.datedue} />
    {:else}
        <Tag text="No SLA" className="SLA"/>
    {/if}
</Column>

<style>
    .TicketId {
        font-weight: bold;
        font-size: 13px;
        line-height: 20px;
        margin-right: 14px;
    }

    .Created {
        font-size: 13px;
        line-height: 20px;
    }

    .Communication {
        font-size: 13px;
        line-height: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 6px;
    }
</style>