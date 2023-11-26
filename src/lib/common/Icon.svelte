<script>
    export let className = "";
    export let iconVariable;
</script>

<span class={`Icon ${className}`} style="--icon-content: {iconVariable};"></span>

<style>
    .Icon {
        font-family: 'la-icon-font';
        display: inline-block;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        font-size: 1em;
    }

    .Icon::before {
        content: var(--icon-content);
    }
</style>