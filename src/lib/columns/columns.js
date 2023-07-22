import DateColumn from "./DateColumn.svelte";
import SimpleColumn from "./SimpleColumn.svelte";

class Column {
    renderer;
    name;
    sortable;
    size;
    mandatory;
    visible;

    constructor(name, renderer, size, sortable = null, mandatory = false, visible = true) {
        this.name = name;
        this.sortable = sortable;
        this.size = size;
        this.mandatory = mandatory;
        this.renderer = renderer;
        this.visible = visible || mandatory;
    }
}

class DateColumnDefinition extends Column {
    field;
    relative;
    constructor(name, field, relative = false) {
        super(name, DateColumn, "100px", field, false);
        this.field = field;
        this.relative = relative;
    }
}

class SimpleColumnDefinition extends Column {
    field;

    constructor(name, field, visible = false) {
        super(name, SimpleColumn, "125px", null, false, visible);
        this.field = field;
    }
}

export {DateColumnDefinition, SimpleColumnDefinition, Column};

