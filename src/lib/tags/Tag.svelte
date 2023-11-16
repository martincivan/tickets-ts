<script>
    export let text;
    export let className;
    export let style;
</script>

<div class="Tag {className}" style={style}>
    <slot/>
    <span class="text">{text}</span>
</div>

<style>
    .Tag {
        display: inline-block;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
        line-height: 20px;
        padding: 2px 6px;
        border-radius: 4px;
    }
</style>