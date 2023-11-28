class Column {
    renderer;
    name;
    sortable;
    constructor(name, renderer, sortable) {
        this.name = name;
        this.renderer = renderer;
        this.sortable = sortable;
    }
}

export {Column};

