<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import {t} from 'svelte-intl-precompile'
    import TiArrowBack from "svelte-icons-pack/ti/TiArrowBack.js";
    import TiTick from "svelte-icons-pack/ti/TiTick.js";
    import FaSolidEnvelopeOpenText from "svelte-icons-pack/fa/FaSolidEnvelopeOpenText.js";
    import BsChatLeft from "svelte-icons-pack/bs/BsChatLeft.js";
    import IoTrash from "svelte-icons-pack/io/IoTrash.js";
    import CgAlarm from "svelte-icons-pack/cg/CgAlarm.js";
    import IoSunnySharp from "svelte-icons-pack/io/IoSunnySharp.js";
    import AiFillFire from "svelte-icons-pack/ai/AiFillFire.js";

    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            ,(m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16)).join(", ")

    export let row;
    const texts = {
        "A": {"text": $t("Answered"), "icon": TiArrowBack, "color": "#708090"},
        "T": {"text": $t("Chatting"), "icon": BsChatLeft, "color": "#2196f3"},
        "P": {"text": $t("Calling"), "icon": TiArrowBack, "color": "#999"},
        "X": {"text": $t("Deleted"), "icon": IoTrash, "color": "#aac"},
        "B": {"text": $t("Spam"), "icon": AiFillFire, "color": "#caa"},
        "I": {"text": $t("Init"), "icon": TiArrowBack, "color": "#424242"},
        "R": {"text": $t("Resolved"), "icon": TiTick, "color": "#aca"},
        "N": {"text": $t("New"), "icon": IoSunnySharp, "color": "#ff6c00"},
        "C": {"text": $t("Open"), "icon": FaSolidEnvelopeOpenText, "color": "#ffa700"},
        "W": {"text": $t("Postponed"), "icon": CgAlarm, "color": "#673ab7"},
    }

</script>

<div class={row.status} style="color: {texts[row.status].color}; background-color: rgba({hexToRgb(texts[row.status].color)}, .2);">
    <Icon color="{texts[row.status].color}" src={texts[row.status].icon}></Icon>
    {texts[row.status].text}
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