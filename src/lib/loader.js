import {GridApi} from "./dist/esm/index.js";
import {Configuration} from "./dist/esm/runtime.js";
import {writable} from "svelte/store";

class Loader {
    constructor() {
        const config = new Configuration(
            {
                apiKey: "",
                basePath: "https://hosted.la.localhost/LiveAgent/server/api/v3",
            }
        );
        this.opts = writable();
        this.api = new GridApi(config);


        this._opts = {};
        this.opts.subscribe(value => this._opts = value);
    }

    async load(cursor = "") {
        const data = await this.api.getTicketsGridListRaw({...this._opts, cursor});
        return await data.value();
    }
}

export {Loader};