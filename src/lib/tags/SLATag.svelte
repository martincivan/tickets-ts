<script>
    import CombinedTag from "./CombinedTag.svelte";
    import FaAlarmClock from 'svelte-icons-pack/fa/FaClock.js';
    import FaExclamation from 'svelte-icons-pack/bi/BiAlarmExclamation.js';
    import DateDisplay from "../common/DateDisplay.svelte";

    export let tagText;
    export let due;

    let className;

    const getStyle = (due) => {
        if (due > new Date()) {
            className = "SLATag Pending";
            return FaAlarmClock;
        } else {
            className = "SLATag Overdue";
            return FaExclamation;
        }
    };

    $: icon = getStyle(due);

</script>

<CombinedTag {icon} {tagText} {className}>
    <DateDisplay style="color: white; font-size: 12px; font-weight: bold; margin-right: 5px" data={due} relative={true} />
</CombinedTag>