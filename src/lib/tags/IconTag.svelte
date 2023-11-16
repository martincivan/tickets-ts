<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import Tag from "./Tag.svelte";

    export let text;
    export let className = "IconTag";
    export let style ="";
    export let icon;
</script>

<Tag {text} {className} {style}>
    {#if icon !== undefined && icon.src != null}
        <Icon className="icon" color={icon.color} src={icon.src}></Icon>
    {/if}
</Tag>

<style>
    :global(.icon) {

    }
</style>