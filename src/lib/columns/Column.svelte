<script>
    export let className = "";
</script>

<div class="column {className}">
    <slot/>
</div>

<style>
    .column {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>