<script>

import {getContext} from "svelte";

export let tagId;
let tagsMap = getContext("tagsMap")

$: color = $tagsMap[tagId]?.color ?? 0;
$: backgroundcolor = $tagsMap[tagId]?.backgroundcolor ?? 0;
$: name = $tagsMap[tagId]?.name ?? "";

</script>

<span style="color: #{color}; background: #{backgroundcolor}">{name}</span>

<style>
    span {
        font-size: 12px;
        border-radius: 25px;
        padding: 3px 10px;
    }
</style>