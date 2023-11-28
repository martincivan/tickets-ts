<script>
    import Time from "svelte-time";

    export let data;
    export let format = "";
    export let style = "";
    export let relative = false;

</script>

<div class="Date">
    {#if data instanceof Date && !isNaN(data.getTime())}
        <Time {style} timestamp={data} {format} {relative}/>
    {:else}
        <span class="invalid">Invalid data</span>
    {/if}
</div>


<style>
    .invalid {
        color: var(--panel_text_color);
    }

    div {
        display: inline-block;
    }
</style>