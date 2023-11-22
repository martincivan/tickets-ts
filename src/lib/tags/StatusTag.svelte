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
    import getStatusColor from "../common/getStatusColor.js";

    export let status;
    const texts = {
        "A": {"text": $t("Answered"), "icon": TiArrowBack},
        "T": {"text": $t("Chatting"), "icon": BsChatLeft},
        "P": {"text": $t("Calling"), "icon": TiArrowBack},
        "X": {"text": $t("Deleted"), "icon": IoTrash},
        "B": {"text": $t("Spam"), "icon": AiFillFire},
        "I": {"text": $t("Init"), "icon": TiArrowBack},
        "R": {"text": $t("Resolved"), "icon": TiTick},
        "N": {"text": $t("New"), "icon": IoSunnySharp},
        "C": {"text": $t("Open"), "icon": FaSolidEnvelopeOpenText},
        "W": {"text": $t("Postponed"), "icon": CgAlarm}
    }

    export let style = `background-color: ${texts[status] ? getStatusColor(status) : 'defaultColor'}; color: white;`;


</script>

<IconTag className={status["text"]} {style} text={texts[status].text} icon={texts[status] ? texts[status].icon : null} />