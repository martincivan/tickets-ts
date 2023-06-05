<script>
    export let columns;

    let hovering = false;

    const drop = (event, target) => {
        event.dataTransfer.dropEffect = 'move';
        const start = parseInt(event.dataTransfer.getData("text/plain"));
        const newTracklist = $columns

        if (start < target) {
            newTracklist.splice(target + 1, 0, newTracklist[start]);
            newTracklist.splice(start, 1);
        } else {
            newTracklist.splice(target, 0, newTracklist[start]);
            newTracklist.splice(start + 1, 1);
        }
        columns.set(newTracklist)
        hovering = null
    }

    const dragstart = (event, i) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        const start = i;
        event.dataTransfer.setData('text/plain', start);
    }



    // pos is cursor position when right click occur
    let pos = { x: 0, y: 0 }
    // menu is dimension (height and width) of context menu
    let menu = { h: 0, y: 0 }
    // browser/window dimension (height and width)
    let browser = { h: 0, y: 0 }
    // showMenu is state of context-menu visibility
    let showMenu = false;
    // to display some text
    let content;

    function rightClickContextMenu(e){
        showMenu = true
        browser = {
            w: window.innerWidth,
            h: window.innerHeight
        };
        pos = {
            x: e.clientX,
            y: e.clientY
        };
        // If bottom part of context menu will be displayed
        // after right-click, then change the position of the
        // context menu. This position is controlled by `top` and `left`
        // at inline style.
        // Instead of context menu is displayed from top left of cursor position
        // when right-click occur, it will be displayed from bottom left.
        if (browser.h -  pos.y < menu.h)
            pos.y = pos.y - menu.h
        if (browser.w -  pos.x < menu.w)
            pos.x = pos.x - menu.w
    }
    function onPageClick(e){
        // To make context menu disappear when
        // mouse is clicked outside context menu
        showMenu = false;
    }
    function getContextMenuDimension(node){
        // This function will get context menu dimension
        // when navigation is shown => showMenu = true
        let height = node.offsetHeight
        let width = node.offsetWidth
        menu = {
            h: height,
            w: width
        }
    }
    function addItem(){
        content.textContent = "Add and item..."
    }
    function print(){
        content.textContent = "Printed..."
    }
    function zoom(){
        content.textContent = "Zooom..."
    }
    function remove(){
        content.textContent = "Removed..."
    }
    function setting(){
        content.textContent = "Settings..."
    }
    let menuItems = [
        {
            'name': 'addItem',
            'onClick': addItem,
            'displayText': "Add Item",
            'class': 'fa-solid fa-plus'
        },
        {
            'name': 'emptyicons',
            'onClick': addItem,
            'displayText': "Empty Icon",
            'class': 'fa-solid fa-square'
        },
        {
            'name': 'zoom',
            'onClick': zoom,
            'displayText': "Zoom",
            'class': 'fa-solid fa-magnifying-glass'
        },
        {
            'name': 'printMenu',
            'onClick': print,
            'displayText': "Print",
            'class': 'fa-solid fa-print'
        },
        {
            'name': 'hr',
        },
        {
            'name': 'settings',
            'onClick': setting,
            'displayText': "Settings",
            'class': 'fa-solid fa-gear'
        },
        {
            'name': 'hr',
        },
        {
            'name': 'trash',
            'onClick': remove,
            'displayText': "Trash",
            'class': 'fa-solid fa-trash-can'
        },
    ]


</script>

<thead on:contextmenu|preventDefault={rightClickContextMenu} >
{#each $columns as column, index (column)}
    <th
            draggable="true"
            on:dragstart={event => dragstart(event, index)}
            on:drop|preventDefault={event => drop(event, index)}
            ondragover="return false"
            on:dragenter={() => hovering = index}
            class:is-active={hovering === index}
    >
        <div class="content">
            {column.name}
        </div>
    </th>
{/each}
</thead>

{#if showMenu}
    <nav use:getContextMenuDimension style="position: fixed; top:{pos.y}px; left:{pos.x}px">
        <div class="navbar" id="navbar">

        </div>
    </nav>
{/if}


<style>
    thead {
        position: sticky;
        top: 0;
        background: white;
        color: #606060;
        font-weight: 1;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }

    .is-active {
        background-color: #3273dc;
        color: #fff;
    }

    .content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
    }
</style>