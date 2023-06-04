<script>
    import Table from "./lib/Table.svelte";
    // import data from "./data.json";
    import {writable} from "svelte/store";
    import {Loader} from "./lib/loader.js";
    import {Column, DateColumnDefinition, SimpleColumnDefinition} from "./lib/columns.js";
    import UserColumn from "./lib/UserColumn.svelte";
    import ComplexColumn from "./lib/ComplexColumn.svelte";
    import {TagsLoader} from "./lib/tags.js";
    import {setContext} from "svelte";


    let columns = writable([
        new DateColumnDefinition("Date changed", "datechanged", true),
        new DateColumnDefinition("Date created", "datecreated"),
        new DateColumnDefinition("Date resolved", "dateresolved"),
        new DateColumnDefinition("Status changed", "statuschanged"),
        new DateColumnDefinition("Last activity", "last_activity", true),
        new DateColumnDefinition("Date reopen", "datereopen"),
        new DateColumnDefinition("Date due", "datedue", true),
        new SimpleColumnDefinition("Ticket ID", "code"),
        new SimpleColumnDefinition("Source", "channelType"),
        new SimpleColumnDefinition("Status", "status"),
        new Column("User", UserColumn, false, true),
        new Column("Ticket", ComplexColumn, false, true),

    ]);
    let tagsLoader = new TagsLoader();
    tagsLoader.load();
    setContext("tagsMap", tagsLoader.tags);
    let data = writable([]);
    let next = "";
    let loading = writable(false)
    let l = $loading;

    let loader = new Loader();
    let loadMore = () => {
        if (l) {
            return;
        }
        loading.set(true);
        loader.load(next).then((newData) => {
            console.log(newData.data)
            next = newData.cursor;
            loading.set(false);
            data.update((existing) => {
                return existing.concat(newData.data);
            });
        });
    };
</script>

<main>
    <h1>Table</h1>
    Loading: {$loading}
    Next: {next}
    <Table data={data} columns={columns} {loadMore}/>
</main>

<style>

</style>