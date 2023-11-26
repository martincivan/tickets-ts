<script>
    import {t} from 'svelte-intl-precompile'
    import IconTag from "./IconTag.svelte";
    import getStatusColor from "../common/getStatusColor.js";

    export let status;
    const texts = {
        "A": {"text": $t("Answered"), "icon": "var(--ticket-answered-icon)"},
        "T": {"text": $t("Chatting"), "icon": "var(--chatting-icon)"},
        "P": {"text": $t("Calling"), "icon": "var(--call-icon)"},
        "X": {"text": $t("Deleted"), "icon": "var(--ticket-deleted-icon)"},
        "B": {"text": $t("Spam"), "icon": "var(--spam-icon)"},
        "I": {"text": $t("Init"), "icon": "var()"},
        "R": {"text": $t("Resolved"), "icon": "var(--ticket-resolved-icon)"},
        "N": {"text": $t("New"), "icon": "var(--ticket-new-icon)"},
        "C": {"text": $t("Open"), "icon": "var(--ticket-open-icon)"},
        "W": {"text": $t("Postponed"), "icon": "var(--ticket-postponed-icon)"}
    }

    export let style = `background-color: ${texts[status] ? getStatusColor(status) : 'defaultColor'}; color: white;`;


</script>

<IconTag className={status["text"]} {style} text={texts[status].text} iconVariable={texts[status].icon} />