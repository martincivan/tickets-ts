<script>
import {getContext} from "svelte";
import Tag from "./Tag.svelte";

export let tagId;
let tagsMap = getContext("tagsMap")

$: color = $tagsMap[tagId]?.color ?? 0;
$: backgroundcolor = $tagsMap[tagId]?.backgroundcolor ?? 0;
$: name = $tagsMap[tagId]?.name ?? "";

</script>

<Tag style="color: #{color}; background: #{backgroundcolor}" text={name} className="TicketTag"/>

<style>
    :global(.Tag.TicketTag) {
        font-size: 12px;
        font-weight: bold;
        padding: 2px 10px;
    }
</style>