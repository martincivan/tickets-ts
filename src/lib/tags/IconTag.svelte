<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import Tag from "./Tag.svelte";

    export let text;
    export let className = "";
    export let style = "";
    export let icon;

    let color = "white";
    let classes = `IconTag ${className}`;

    if (className === "CompanyTag" || className === "NoCompanyTag") {
        color = "#646C75";
    }
</script>

<Tag {text} className={classes} {style}>
    {#if icon !== undefined}
        <Icon className="icon" color={color} src={icon} size="16px"></Icon>
    {/if}
</Tag>

<style>
    :global(div.Tag.IconTag) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        border-radius: 4px;
    }

    :global(div.Tag.IconTag.Department) {
        background-color:  #646C75;
        color: white;
    }
</style>