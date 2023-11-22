<script>
    import IconTag from "./IconTag.svelte";
    import Tag from "./Tag.svelte";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    export let iconText = "";
    export let tagText;
    export let icon;
    export let className;

    let iconTagStyles = '';
    let tagStyles = '';
    if (className === "Department") {
        iconTagStyles = `color: white; background-color: #646C75; margin-top: 0;`;
        tagStyles = `color: white; background-color: black; border-radius: 4px; margin: 0`;
    } else if (className.includes("SLATag")) {
        console.log("SLATag");
        iconTagStyles = `color: white`;
        className.includes("Pending") ?
            tagStyles = `color: #187E36; background-color: #D9FAE0; border-radius: 4px; border: 1px solid #187E36; margin: 0` :
            tagStyles = `color: #CE212D; background-color: #FEEAE8; border-radius: 4px; border: 1px solid #CE212D; margin: 0`;
    }
    let classNames = `CombinedTag ${className}`;


</script>

<div class={classNames}>
    {#if iconText !== ""}
        <IconTag style={iconTagStyles} text={iconText} {icon} className="Combined"/>
    {:else}
        <div class="IconWrapper">
            <Icon className="icon" color="white" src={icon} size="16px"></Icon>
        </div>
        <slot />
    {/if}
    <Tag style={tagStyles} text={tagText} />
</div>

<style>
    .IconWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4px 6px;
    }
    .CombinedTag {
        display: inline-flex;
        flex-direction: row;
        border-radius: 4px;
        margin-top: 2px;
        margin-right: 6px;
        padding-right: 0;
    }

    .Department {
        display: flex;
        background-color: #646C75;
    }

    .Pending {
        background-color: #187E36;
    }

    .Overdue {
        background-color: #CE212D;
    }
</style>
