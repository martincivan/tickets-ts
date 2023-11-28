<script>
    import Tag from "./Tag.svelte";
    import Icon from "../common/Icon.svelte";

    export let text;
    export let className = "";
    export let style = "";
    export let iconVariable;

    let classes = `IconTag ${className}`;
</script>

<Tag {text} className={classes} {style}>
    <Icon {iconVariable}/>
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
        background-color:  var(--department-bg-color);
        color: white;
    }
</style>