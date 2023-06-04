import {GetAgentsGridListSortDirEnum, GetTicketsGridListSortFieldEnum, GridApi} from "./dist/esm/index.js";
import {Configuration} from "./dist/esm/runtime.js";

class Loader {
    constructor() {
        const config = new Configuration(
            {
                apiKey: "",
                basePath: "https://hosted.la.localhost/LiveAgent/server/api/v3",
            }
        );
        this.opts = {
            "perPage": 20,
            "sortDir": GetAgentsGridListSortDirEnum.Asc,
            "filters": "[[\"rstatus\",\"IN\",\"A\"],[\"channel_type\",\"IN\",\"B,M,E,F,A,I,Q,S,C,W,T,V\"]]",
            // "filters": "[[\"rstatus\",\"IN\",\"A,P,T,N,C,R,W\"],[\"channel_type\",\"IN\",\"B,M,E,F,A,I,Q,S,C,W,T,V\"]]",
            "sortField": GetTicketsGridListSortFieldEnum.Rorder
        };
        this.api = new GridApi(config);
    }

    async load(cursor = "") {
        const data = await this.api.getTicketsGridListRaw({...this.opts, cursor});
        return await data.value();
    }
}

export {Loader};