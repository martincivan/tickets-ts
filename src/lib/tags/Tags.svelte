<script>
    import {getContext} from "svelte";

    let tagsMap = getContext("tagsMap")
    export let tags;
    // <span style="background: #{$tagsMap[tag].color};">{$tagsMap[tag].name}</span>
    let t = $tagsMap;
</script>

<span>
    {#each tags as tag}
        <span class="tag" style="color: #{t[tag].color}; background: #{t[tag].backgroundcolor}">{t[tag].name}</span>
    {/each}
</span>

<style>
    .tag {
        font-size: 12px;
        border-radius: 25px;
        padding: 3px 10px;
    }
</style>

