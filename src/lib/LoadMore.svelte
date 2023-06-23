<script>
    import {getContext} from "svelte";

    let text = ""
    let loading = getContext("loading")
    let cursor = getContext("cursor")
    let data = getContext("data")

    function getText (loading, cursor, data) {
        if (loading) {
            return "Loading...";
        }
        if (cursor == null) {
            if (data.length === 0) {
                return "No data";
            }
            return "All data loaded";
        }
        return "Load more data"
    }
    $: text = getText($loading, $cursor, $data);
</script>

<div>
    {text}
</div>