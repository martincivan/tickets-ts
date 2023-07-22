<script>
    import {t} from 'svelte-intl-precompile'
    import Icon from "./Icon.svelte";

    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            ,(m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16)).join(", ")

    export let status;
    const texts = {
        "A": {"text": $t("Answered"), "icon": "la-ticket-answered", "color": "#708090"},
        "T": {"text": $t("Chatting"), "icon": "la-chatting", "color": "#2196f3"},
        "P": {"text": $t("Calling"), "icon": "la-call-window", "color": "#999"},
        "X": {"text": $t("Deleted"), "icon": "la-ticket-deleted", "color": "#aac"},
        "B": {"text": $t("Spam"), "icon": "la-spam", "color": "#caa"},
        "I": {"text": $t("Init"), "icon": "la-signature", "color": "#424242"},
        "R": {"text": $t("Resolved"), "icon": "la-ticket-resolved", "color": "#aca"},
        "N": {"text": $t("New"), "icon": "la-ticket-new", "color": "#ff6c00"},
        "C": {"text": $t("Open"), "icon": "la-ticket-open", "color": "#ffa700"},
        "W": {"text": $t("Postponed"), "icon": "la-ticket-postponed", "color": "#673ab7"},
    }

</script>

<div class={status} style="color: {texts[status].color}; background-color: rgba({hexToRgb(texts[status].color)}, .2);">
    <Icon i={texts[status].icon}></Icon>
    {texts[status].text}
</div>

<style>
    div {
        padding: 1px 10px;
        border-radius: 20px;
        font-weight: 700;
        text-transform: uppercase;
        border: solid 1px;
        width: fit-content;
    }
</style>