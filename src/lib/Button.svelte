<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    export let onAction = () => {};
    export let text = "";
    export let icon = null;

    function handleClick() {
        onAction();
    }
</script>

<button on:click={handleClick}>
    {#if icon}
        <Icon src={icon} />
    {/if}
    {text}
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