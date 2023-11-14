<script>
    import Tags from "../tags/Tags.svelte";
    import AiFillFolder from "svelte-icons-pack/ai/AiFillFolder.js";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import StatusLabel from "../StatusLabel.svelte";

    export let row;
</script>

<div>
    <div class="preview">{row["preview"]}</div>
    <div class="additional">
        <StatusLabel status={row["status"]} />
        <span class="department">
            <Icon src={AiFillFolder}></Icon>
            {row["departmentname"]}
        </span>
        {#if row["agentname"]}
            <span class="agent">
                {row["agentname"]}
            </span>
        {/if}
        <Tags tags={row["tags"]} />
    </div>
</div>

<style>
    .preview {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 5px;
        font-size: 13px;
    }

    .additional {
        display: flex;
    }

    .department {
        display: inline-block;
        padding: 2px 10px;
        margin: 5px;
        text-align: center;
        color: White;
        background-color: #646C75;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        line-height: 20px;
    }
</style>