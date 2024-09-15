<script>
    export let numberOfRows = 0;
	export let createRows;
	export let addRows;
	export let removeRows;
</script>
<div>
    <div>
        <h1>Framework: Svelte</h1>
    </div>
    <div>
        <p>total number of rows: {numberOfRows} </p>
    </div>
    <div>
        <button id="create-1000" on:click={createRows(1000)}>
            create 1000
        </button>
        <button id="add-1000" on:click={addRows(1000)}>
            add 1000
        </button>
        <button id="create-10000" on:click={createRows(10000)}>
            create 10000
        </button>
        <button id="add-10000" on:click={addRows(10000)}>
            add 10000
        </button>
        <button id="remove" on:click={removeRows}>
            remove all
        </button>
    </div>
</div>