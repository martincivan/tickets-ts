import DateColumn from "./DateColumn.svelte";
import SimpleColumn from "./SimpleColumn.svelte";
import {writable} from "svelte/store";
import UserColumn from "./UserColumn.svelte";
import ComplexColumn from "./ComplexColumn.svelte";
import {GetTicketsGridListSortFieldEnum} from "@qualityunit/liveagent-api";

class Column {
    renderer;
    name;
    sortable;
    mandatory;
    visible;
    constructor(name, renderer, sortable = null, mandatory = false, visible = true) {
        this.name = name;
        this.sortable = sortable;
        this.mandatory = mandatory;
        this.renderer = renderer;
        this.visible = visible || mandatory;
    }
}

class DateColumnDefinition extends Column {
    field;
    relative;
    constructor(name, field, relative = false) {
        super(name, DateColumn, field, false);
        this.field = field;
        this.relative = relative;
    }
}

class SimpleColumnDefinition extends Column {
    field;
    constructor(name, field) {
        super(name, SimpleColumn, null, false);
        this.field = field;
    }
}

let columns = writable([
    new Column("User", UserColumn, false, true),
    new Column("Ticket", ComplexColumn, false, true),
    new DateColumnDefinition("Date changed", GetTicketsGridListSortFieldEnum.Datechanged, true),
    new DateColumnDefinition("Date created", GetTicketsGridListSortFieldEnum.Datecreated),
    new DateColumnDefinition("Date resolved", GetTicketsGridListSortFieldEnum.Dateresolved),
    new DateColumnDefinition("Status changed", GetTicketsGridListSortFieldEnum.Statuschanged),
    new DateColumnDefinition("Last activity", GetTicketsGridListSortFieldEnum.LastActivity, true),
    new DateColumnDefinition("Date reopen", GetTicketsGridListSortFieldEnum.Datereopen),
    new DateColumnDefinition("Date due", GetTicketsGridListSortFieldEnum.Datedue, true),
    new SimpleColumnDefinition("Ticket ID", "code"),
    new SimpleColumnDefinition("Source", "channelType"),
    new SimpleColumnDefinition("Status", "status")

]);
export {DateColumnDefinition, SimpleColumnDefinition, Column, columns};

