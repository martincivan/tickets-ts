import {writable} from "svelte/store";
import {Configuration, GridApi} from "@qualityunit/liveagent-api";

class TagsLoader {
    constructor() {
        const config = new Configuration(
            {
                apiKey: "",
                basePath: "https://hosted.la.localhost/LiveAgent/server/api/v3",
            }
        );
        this.api = new GridApi(config)
        this.tags = writable({})
    }

    async load() {
        let newTags = await this.api.getTagsGridList();
        newTags = newTags.reduce((acc,curr)=> (acc[curr.tagid]=curr,acc),{});
        this.tags.set(newTags);
    }

}

export {TagsLoader};