<script>
    import CombinedTag from "./CombinedTag.svelte";
    import DateDisplay from "../common/DateDisplay.svelte";

    export let tagText;
    export let due;

    let className;

    //TODO - fix SLA icons
    const getStyle = (due) => {
        if (due > new Date()) {
            className = "SLATag Pending";
            return "la-sla";
        } else {
            className = "SLATag Overdue";
            return "la-sla-compliance";
        }
    };

    $: icon = getStyle(due);

</script>

<CombinedTag iconVariable={icon} {tagText} {className}>
    <DateDisplay style="color: white; font-size: 12px; font-weight: bold; margin-right: 5px" data={due} relative={true} />
</CombinedTag>