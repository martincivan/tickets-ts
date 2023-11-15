<script>
    import Column from "./Column.svelte";
    import DateDisplay from "../DateDisplay.svelte";
    import {t} from 'svelte-intl-precompile'

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
    <div>
        <span class="TicketId">{row["code"]}</span>
        <span class="placeholder">placeholder for answers</span>
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
    .placeholder {
        color: #999;
    }
</style>