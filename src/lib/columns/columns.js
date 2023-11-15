class Column {
    renderer;
    name;
    sortable;
    constructor(name, renderer, sortable = null) {
        this.name = name;
        this.sortable = sortable;
        this.renderer = renderer;
    }
}

export {Column};

