<script>
    import TicketsTable from "./TicketsTable.svelte";

    import {init, waitLocale} from 'svelte-intl-precompile';
    import {registerAll} from '$locales';

    registerAll();

    export let lang = 'sk';

    init({
        initialLocale: lang,
        fallbackLocale: 'en'
    });
    waitLocale();

    export let apikey;
    export let filters = "[[\"rstatus\",\"IN\",\"A,P,T,N,C,R,W\"],[\"channel_type\",\"IN\",\"B,M,E,F,A,I,Q,S,C,W,T,V\"]]"
    export let middleclickhandler;
    export let selectionhandler;
    export let selectionMap = {};
    export let selectedAll = false;

    function handleSelection(selection, sAll) {
        console.log("selection", selection)
        selectionMap = selection;
        selectedAll = sAll;
        if (selectionhandler) {
            selectionhandler(selection, sAll);
        }
    }

</script>

<svelte:options tag="tickets-table" />

{#if apikey}
    <TicketsTable apikey={apikey} filters={filters} {middleclickhandler} selectionHandler={handleSelection}>
        <slot>
        </slot>
    </TicketsTable>
{/if}