<script>
    import getStatusColor from "../common/getStatusColor.js";
    export let columns;
    export let data;
    export let middleclickhandler;
</script>

<tbody>
{#each $data as row, i}
    <tr class={$data[i].__selected ? "Row Selected" : "Row"} on:click={() => location.assign("#Conversation;id=" + row.conversationid)} on:mousedown={(event) => {
        if (event.button === 1 && middleclickhandler) {
            middleclickhandler(row.conversationid);
            event.preventDefault();
            event.stopPropagation();
        }
    }}>
        <td style="position: relative">
            <div class="Status" style="background-color: {getStatusColor(row.status)}" ></div>
            <input type="checkbox" value={row.conversationid} bind:checked={$data[i].__selected}
                   on:click|stopPropagation={() => {}}>
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
    .Status {
        position: absolute;
        left: 0;
        top: 10%;
        content: "";
        width: 6px;
        height: 80%;
        margin-left: 20px;
        border-radius: 69px;
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