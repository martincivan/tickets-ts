import DateColumn from "./DateColumn.svelte";
import SimpleColumn from "./SimpleColumn.svelte";

class Column {
    renderer;
    name;
    sortable;
    mandatory;
    constructor(name, renderer, sortable = false, mandatory = false) {
        this.name = name;
        this.sortable = sortable;
        this.mandatory = mandatory;
        this.renderer = renderer;
    }
}

class DateColumnDefinition extends Column {
    field;
    relative;
    constructor(name, field, relative = false) {
        super(name, DateColumn, true, false);
        this.field = field;
        this.relative = relative;
    }
}

class SimpleColumnDefinition extends Column {
    field;
    constructor(name, field) {
        super(name, SimpleColumn, false, false);
        this.field = field;
    }
}

export {DateColumnDefinition, SimpleColumnDefinition, Column};

