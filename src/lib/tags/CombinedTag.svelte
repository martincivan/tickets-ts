<script>
    import IconTag from "./IconTag.svelte";
    import Tag from "./Tag.svelte";
    export let iconText;
    export let agentName;
    export let icon;
    export let className;

    let classNames = `CombinedTag ${className}`;

    let iconTagStyles = `color: white; background-color: #646C75; margin-top: 0;`;
    let tagStyles = `color: white; background-color: black; border-radius: 4px; margin: 0`;
</script>

<div class={classNames}>
    <IconTag style={iconTagStyles} text={iconText} {icon} className="Combined"/>
    <Tag style={tagStyles} text={agentName} />
</div>

<style>
    .CombinedTag {
        display: flex;
        flex-direction: row;
        border-radius: 4px;
        margin-top: 2px;
        margin-right: 6px;
        padding-right: 0;
        background-color: #646C75;
    }
</style>
