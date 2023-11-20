<script>
    import {t} from 'svelte-intl-precompile'
    import TiArrowBack from "svelte-icons-pack/ti/TiArrowBack.js";
    import TiTick from "svelte-icons-pack/ti/TiTick.js";
    import FaSolidEnvelopeOpenText from "svelte-icons-pack/fa/FaSolidEnvelopeOpenText.js";
    import BsChatLeft from "svelte-icons-pack/bs/BsChatLeft.js";
    import IoTrash from "svelte-icons-pack/io/IoTrash.js";
    import CgAlarm from "svelte-icons-pack/cg/CgAlarm.js";
    import IoSunnySharp from "svelte-icons-pack/io/IoSunnySharp.js";
    import AiFillFire from "svelte-icons-pack/ai/AiFillFire.js";
    import IconTag from "./IconTag.svelte";

    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            ,(m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16)).join(", ")

    export let status;
    const texts = {
        "A": {"text": $t("Answered"), "icon": TiArrowBack, "color": "#CFD6DD"},
        "T": {"text": $t("Chatting"), "icon": BsChatLeft, "color": "#2CA34D"},
        "P": {"text": $t("Calling"), "icon": TiArrowBack, "color": "#999"},
        "X": {"text": $t("Deleted"), "icon": IoTrash, "color": "#646C75"},
        "B": {"text": $t("Spam"), "icon": AiFillFire, "color": "#646C75"},
        "I": {"text": $t("Init"), "icon": TiArrowBack, "color": "#424242"},
        "R": {"text": $t("Resolved"), "icon": TiTick, "color": "#CFD6DD"},
        "N": {"text": $t("New"), "icon": IoSunnySharp, "color": "#FF7A24"},
        "C": {"text": $t("Open"), "icon": FaSolidEnvelopeOpenText, "color": "#FFA700"},
        "W": {"text": $t("Postponed"), "icon": CgAlarm, "color": "#814FDE"},
    }

    export let style = `background-color: ${texts[status] ? texts[status].color : 'defaultColor'}; color: white;`;


</script>

<IconTag className={status["text"]} {style} text={texts[status].text} icon={texts[status] ? texts[status].icon : null} />