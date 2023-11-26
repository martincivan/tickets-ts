<script>
    import Tags from "../tags/Tags.svelte";
    import StatusTag from "../tags/StatusTag.svelte";
    import Column from "./Column.svelte";
    import CombinedTag from "../tags/CombinedTag.svelte";
    import IconTag from "../tags/IconTag.svelte";

    export let row;
    export let className = "statusColumn"
    console.log(row.agentname);
</script>

<Column {className}>
    <h1 class="subject">{row["subject"]}</h1>
    <p class="preview">{row["preview"]}</p>
    <div class="additional">
        <StatusTag status={row["status"]} />
        {#if row.agentname.trim() !== ""}
            <CombinedTag className="Department" tagText={row.agentname} iconVariable="var(--department-icon)" iconText={row.departmentname} />
        {:else}
            <IconTag className="Department" text={row.departmentname} iconVariable="var(--department-icon)"/>
        {/if}
        <Tags tags={row["tags"]} />
    </div>
</Column>

<style>
    .subject {
        font-size: 13px;
        font-weight: bold;
        line-height: 20px;
        margin: 0;
    }
    .preview {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 5px;
        margin: 0;
        line-height: 20px;
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
        background-color: var(--department-bg-color);
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        line-height: 20px;
    }
</style>