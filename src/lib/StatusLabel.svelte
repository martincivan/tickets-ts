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

    export let status;
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

<div class={status} style="color: {texts[status] ? texts[status].color : 'defaultColor'}; background-color: rgba({texts[status] ? hexToRgb(texts[status].color) : 'defaultRgb'}, .2);">
    {#if texts[status]}
        <Icon color="{texts[status].color}" src={texts[status].icon}></Icon>
        {texts[status].text}
    {/if}
</div>

<style>
    div {
        margin: 5px;
        padding: 1px 10px;
        border-radius: 4px;
        font-weight: 700;
        text-transform: uppercase;
        border: solid 1px;
        width: fit-content;
        height: 24px;
    }
</style>