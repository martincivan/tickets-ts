<script>
    import {getContext} from "svelte";

    let tagsMap = getContext("tagsMap")
    console.log(tagsMap);
    export let tags;
    // <span style="background: #{$tagsMap[tag].color};">{$tagsMap[tag].name}</span>
    let t = $tagsMap;
    console.log(t);
</script>

<span>
    {#each tags as tag}
        <span style="color: #{t[tag].color}; background: #{t[tag].backgroundcolor}">{t[tag].name}</span>
    {/each}
</span>