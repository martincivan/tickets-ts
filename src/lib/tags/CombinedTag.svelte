<script>
    import IconTag from "./IconTag.svelte";
    import Tag from "./Tag.svelte";
    import Icon from "../common/Icon.svelte";
    export let iconText = "";
    export let tagText;
    export let iconVariable;
    export let className;

    let iconTagStyles = '';
    let tagStyles = '';
    if (className === "Department") {
        iconTagStyles = `color: white; background-color: var(--department-bg-color); margin-top: 0;`;
        tagStyles = `color: white; background-color: black; border-radius: 4px; margin: 0`;
    } else if (className.includes("SLATag")) {
        iconTagStyles = `color: white`;
        className.includes("Pending") ?
            tagStyles = `color: var(--ok-color); background-color: #D9FAE0; border-radius: 4px; border: 1px solid var(--ok-color); margin: 0` :
            tagStyles = `color: var(--notif-error-color); background-color: #FEEAE8; border-radius: 4px; border: 1px solid var(--notif-error-color); margin: 0`;
    }
    let classNames = `CombinedTag ${className}`;


</script>

<div class={classNames}>
    {#if iconText !== ""}
        <IconTag style={iconTagStyles} text={iconText} {iconVariable} className="Combined" />
    {:else}
        <div class="IconWrapper">
            <Icon {iconVariable} />
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
        background-color: var(--department-bg-color);
    }

    .Pending {
        background-color: var(--ok-color);
    }

    .Overdue {
        background-color: var(--notif-error-color);
    }
</style>
