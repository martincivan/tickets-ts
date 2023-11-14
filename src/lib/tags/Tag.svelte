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
        display: inline-block;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        border-radius: 25px;
        padding: 3px 10px;
        margin: 5px;
        line-height: 24px;
    }
</style>