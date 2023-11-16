<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import Tag from "./Tag.svelte";

    export let text;
    export let className = "";
    let classes = `IconTag ${className}`;
    export let style = "";
    export let icon;
</script>

<Tag {text} className={classes} {style}>
    {#if icon !== undefined}
        <Icon className="icon" src={icon}></Icon>
    {/if}
</Tag>

<style>
    :global(div.Tag.IconTag) {
        border-radius: 4px;
    }
</style>