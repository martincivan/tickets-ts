<script>
    import {t} from 'svelte-intl-precompile'
    import IconTag from "./IconTag.svelte";
    import getStatusColor from "../common/getStatusColor.js";

    export let status;
    const texts = {
        "A": {"text": $t("Answered"), "icon": "la-ticket-answered"},
        "T": {"text": $t("Chatting"), "icon": "la-chatting"},
        "P": {"text": $t("Calling"), "icon": "la-call"},
        "X": {"text": $t("Deleted"), "icon": "la-ticket-deleted"},
        "B": {"text": $t("Spam"), "icon": "la-spam"},
        "I": {"text": $t("Init"), "icon": ""},
        "R": {"text": $t("Resolved"), "icon": "la-ticket-resolved"},
        "N": {"text": $t("New"), "icon": "la-ticket-new"},
        "C": {"text": $t("Open"), "icon": "la-ticket-open"},
        "W": {"text": $t("Postponed"), "icon": "la-ticket-postponed"}
    }

    export let style = `background-color: ${texts[status] ? getStatusColor(status) : 'defaultColor'}; color: white;`;


</script>

<IconTag className={texts[status].text} {style} text={texts[status].text} iconVariable={texts[status].icon} />