<script>
    import Tags from "./Tags.svelte";

    export let row;
</script>

<div>
    <div class="preview">{row["preview"]}</div>
    <div class="additional">
        <span class="department">
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

    .department {
        font-size: 12px;
        color: #606060;
        background-color: #d6d6d6;
        border-radius: 25px;
        padding-top: 3px;
        padding-right: 10px;
        padding-bottom: 3px;
        padding-left: 10px;
    }
</style>