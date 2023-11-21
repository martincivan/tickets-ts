<script>
    import Column from "./Column.svelte";
    import DateDisplay from "../common/DateDisplay.svelte";
    import {t} from 'svelte-intl-precompile'
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineArrowDown from 'svelte-icons-pack/ai/AiOutlineArrowDown.js';
    import AiOutlineArrowUp from 'svelte-icons-pack/ai/AiOutlineArrowUp.js';
    import Tag from "../tags/Tag.svelte";

    export let className = "importanceColumn";
    export let row;
    export let column;
    export let format = "YYYY-MM-DD HH:mm:ss";

    const CREATED = $t("Created");

    console.log("row: ");
    console.log(row);
    console.log("column: ");
    console.log(column);
</script>

<Column {className}>
    <span class="TicketId">{row["code"]}</span>
    <div class="Communication incomingMessages">
        <Icon src="{AiOutlineArrowDown}"/>
        <span>{row["messagegroupsIn"]}</span>
    </div>
    <div class="Communication outgoingMessages">
        <Icon src="{AiOutlineArrowUp}"/>
        <span>{row["messagegroupsOut"]}</span>
    </div>
    <div class="Created">
        <span>{CREATED}: </span>
        <DateDisplay data={row["datecreated"]} {format} styles=""/>
    </div>
    {#if row.datedue instanceof Date && !isNaN(row.datedue)}
        <DateDisplay data={row["datedue"]} relative={true} format="" styles=""/>
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