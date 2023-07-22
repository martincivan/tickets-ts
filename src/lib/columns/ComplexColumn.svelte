<script>
    import Tags from "../tags/Tags.svelte";
    import Icon from "../Icon.svelte";

    export let row;
</script>

<div class="cell">
    <div class="preview">{row["preview"]}</div>
    <div class="additional">
        <span class="department">
            <Icon i="la-department"></Icon>
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
    .cell {
        overflow: hidden;
    }

    .preview {
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 5px;
        font-size: 13px;
        min-width: 50px;
    }

    .department {
        font-size: 12px;
        /*color: #bcbcbc;*/
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 25px;
        padding: 3px 10px;
    }
</style>