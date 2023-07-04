<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import {t} from 'svelte-intl-precompile'
    import TiArrowBack from "svelte-icons-pack/ti/TiArrowBack.js";
    import TiTick from "svelte-icons-pack/ti/TiTick.js";
    import BiSolidSun from "svelte-icons-pack/bi/BiSolidSun.js";
    import FaSolidEnvelopeOpenText from "svelte-icons-pack/fa/FaSolidEnvelopeOpenText.js";

    export let row;
    const texts = {
        "R": {"text": $t("Resolved"), "icon": TiTick, "color": "#7c97b2"},
        "A": {"text": $t("Answered"), "icon": TiArrowBack, "color": "#999"},
        "N": {"text": $t("New"), "icon": BiSolidSun},
        "O": {"text": $t("Open"), "icon": FaSolidEnvelopeOpenText},
    }

</script>

<span class={row.status} style="color: {texts[row.status].color}">
    <Icon color="{texts[row.status].color}" src={texts[row.status].icon}></Icon>
    {texts[row.status].text}
</span>

<style>

    .A {
        background-color: #7c97b242;
        border-color: #42505d;
    }

    .R {
        background-color: #222;
        border-color: rgba(255, 255, 255, .2);

    }

    span {
        padding: 1px 10px;
        border-radius: 20px;
        font-weight: 700;
        text-transform: uppercase;
        border: solid 1px;
    }
</style>