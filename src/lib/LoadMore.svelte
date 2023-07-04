<script>
    import {getContext} from "svelte";
    import {t} from 'svelte-intl-precompile'

    let showImage = false;

    let text;
    let loading = getContext("loading")
    let cursor = getContext("cursor")
    let data = getContext("data")

    function getText(loading, cursor, data) {
        showImage = false;
        if (loading) {
            return "Loading...";
        }
        if (cursor == null) {
            if (data.length === 0) {
                showImage = true;
                return $t("No results match your filter. Try broadening the search criteria.");
            }
            return "All data loaded";
        }
        return "Load more data"
    }

    $: text = getText($loading, $cursor, $data);
</script>

<div>
    {#if showImage}
        <img alt="No results placeholder" src="https://support.qualityunit.com/themes/agent/obsidian/img/no-result.svg">
    {/if}
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