<script>
    import Column from "./Column.svelte";
    import DateDisplay from "../DateDisplay.svelte";
    import {t} from 'svelte-intl-precompile'
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineArrowDown from 'svelte-icons-pack/ai/AiOutlineArrowDown.js';
    import AiOutlineArrowUp from 'svelte-icons-pack/ai/AiOutlineArrowUp.js';

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
    <div>
        <span>{CREATED}: </span>
        <DateDisplay data={row["datecreated"]} {format} styles=""/>
    </div>
    <div>
        <DateDisplay data={row["datedue"]} format="" styles=""/>
    </div>
</Column>

<style>
    .Communication {
        display: inline-block;
    }
</style>