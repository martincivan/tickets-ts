<script>
    import Tag from "./TicketTag.svelte";

    export let tags;
</script>

<span>
    {#each tags as tag}
        <Tag tagId={tag}></Tag>
    {/each}
</span>

