import SimpleColumn from "./SimpleColumn.svelte";

class Column {
    renderer;
    name;
    sortable;
    mandatory;
    visible;
    constructor(name, renderer, sortable = null, mandatory = false, visible = false) {
        this.name = name;
        this.sortable = sortable;
        this.mandatory = mandatory;
        this.renderer = renderer;
        this.visible = visible || mandatory;
    }
}

class SimpleColumnDefinition extends Column {
    field;
    constructor(name, field) {
        super(name, SimpleColumn, null, false);
        this.field = field;
    }
}

export {SimpleColumnDefinition, Column};

