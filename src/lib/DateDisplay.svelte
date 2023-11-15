<script>
    import Time from "svelte-time";

    export let data;
    export let format;
    export let styles;

</script>

<div class={styles}>
    {#if data instanceof Date && !isNaN(data.getTime())}
        <Time timestamp={data} format={format}/>
    {:else}
        <span class="invalid">Invalid data</span>
    {/if}
</div>


<style>
    .invalid {
        color: #999;
    }

    div {
        display: inline-block;
    }
</style>