<script>
    export let text;
    export let className = "";
    export let style = "";
</script>

<div class="Tag {className}" style={style}>
    <slot/>
    <span class="text">{text}</span>
</div>

<style>
    .Tag {
        display: inline-block;
        color: var(--department-bg-color);
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        line-height: 20px;
        padding: 2px 6px;
        margin-right: 6px;
        margin-top: 2px;
        border-radius: 69px;
    }

    .Tag:before {
        font-family: "la-icon-font";
    }

    .SLA {
        border: 1px solid #CFD6DD;
        border-radius: 4px;
    }
</style>