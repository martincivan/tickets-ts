<script>
    export let className = "";
</script>

<div class="Column {className}">
    <slot/>
</div>

<style>
    .Column {
        padding-bottom: 5px;
        padding-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>