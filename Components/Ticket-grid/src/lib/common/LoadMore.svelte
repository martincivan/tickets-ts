<script>
    import {getContext} from "svelte";
    import {t} from 'svelte-intl-precompile'
    let text;
    let loading = getContext("loading")
    let cursor = getContext("cursor")
    let data = getContext("data")
    let error = getContext("error")

    function getText(loading, cursor, data) {
        if ($error) {
            return $t("Loading failed. Please try again later.")
        }
        if (loading) {
            return "Loading...";
        }
        if (cursor == null) {
            if (data.length === 0) {
                return $t("No results match your filter. Try broadening the search criteria.");
            }
            return "All data loaded";
        }
        return "Load more data"
    }

    $: text = getText($loading, $cursor, $data);
</script>

<div>
    <p>{text}</p>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: auto;
    }

    img {
        width: 350px;
        height: 350px;
    }
</style>