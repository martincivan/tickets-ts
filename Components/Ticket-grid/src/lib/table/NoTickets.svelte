<script>
    import {t} from "svelte-intl-precompile";
    import Button from "../common/Button.svelte";
    import Icon from "../common/Icon.svelte";
</script>

<div class="NoTickets">
    <img alt="No results placeholder" src="https://support.qualityunit.com/themes/agent/obsidian/img/no-result.svg">
    <h1>{$t("No tickets found")}</h1>
    <p>{$t("There is no tickets to be displayed. Change filter or place chat widget on your website to reach customers.")}</p>
    <div class="Buttons">
        <Button className="Filter">
            <Icon className="FilterIcon" iconVariable="la-tune"/>
            {$t("Change filter")}
        </Button>
        <Button className="Configure">
            <Icon className="ConfigureIcon" iconVariable="la-configuration"/>
            {$t("Configure chat button")}
        </Button>
    </div>
</div>

<style>
    .NoTickets {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        max-width: 450px;
        font-size: 13px;
        font-weight: 400;
        text-align: center;
    }

    h1 {
        font-size: 20px;
        font-weight: 600;
        margin: 50px auto 0 auto;
    }

    img {
        max-width: 300px;
    }
</style>