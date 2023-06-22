<script>
    import Tag from "./Tag.svelte";

    export let tags;
</script>

<span>
    {#each tags as tag}
        <Tag tagId={tag}></Tag>
    {/each}
</span>

