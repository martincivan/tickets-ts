<script>
    export let onAction = () => {};
    export let className = "";

    function handleClick() {
        onAction();
    }
</script>

<button on:click={handleClick} class={className}>
    <slot />
</button>

<style>
    button {
        padding: 10px;
        margin: 5px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;
    }
</style>