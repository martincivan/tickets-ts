<script>
    export let columns;
    export let data;
    export let middleclickhandler;

</script>

<tbody>
{#each $data as row, i}
    <colgroup>
        <col style="width: 10%">
        <col style="width: 20%">
        <col style="width: 50%">
        <col style="width: 20%">
    </colgroup>
    <tr class={$data[i].__selected ? "Row Selected" : "Row"} on:click={() => location.assign("#Conversation;id=" + row.conversationid)} on:mousedown={(event) => {
        if (event.button === 1 && middleclickhandler) {
            middleclickhandler(row.conversationid);
            event.preventDefault();
            event.stopPropagation();
        }
    }}>
        <td>
            <div class="Checkbox">
                <input type="checkbox" value={row.conversationid} bind:checked={$data[i].__selected}
                       on:click|stopPropagation={() => {}}>
            </div>
        </td>
        {#each columns as column}
            <td>
                <svelte:component this={column.renderer} {column} {row}></svelte:component>
            </td>
        {/each}
    </tr>
{/each}
<slot/>
</tbody>

<style>
    .Checkbox {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        width: 30px;
        position: relative;
        margin-left: 20px;
    }

    .Checkbox::before {
        content: "";
        position: absolute;
        top: 40px;
        left: 0;
        transform: translate(-50%, -50%);
        width: 5px;
        height: 80%;
        border-radius: 69px;
        border: 1px solid pink;
        background: pink;
    }

    tr {
        height: 80px;
        border-radius: 12px;
        box-shadow: 0 0 5px 2px rgb(0 0 0 / 0.2);
    }

    tr:hover {
        background-color: rgba(127, 144, 164, 0.15);
    }

    td {
        padding-bottom: 5px;
        padding-top: 5px;
    }

    .Selected {
        background-color: #DCF3FE !important;
    }

    @media screen and (max-width: 768px) {
        tr {
            display: block;
            height: initial;
        }

        td {
            display: none;
        }

        td:nth-child(-n+4) {
            display: block;
            margin-bottom: 10px;
        }
    }
</style>