<script>
    import IconTag from "./IconTag.svelte";
    import Tag from "./Tag.svelte";
    export let iconText;
    export let agentName;
    export let icon;
</script>

<div class="CombinedTag">
    <IconTag text={iconText} {icon} className="Combined"/>
    <Tag text={agentName}/>
</div>

<style>
    :global(div.Tag.IconTag.Combined) {
        margin-right: 0;
    }
</style>
