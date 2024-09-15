<script>
	import Menu from "./Menu.svelte";
	import Row from "./Row.svelte";

	let data = [];
	let numberOfRows = 0;

	function buildRows(amount, currentLength) {
		let returnArray = [];
		for (let i = 0; i < amount; i++) {
			returnArray.push({id: i + currentLength, label: 'label ' + (i + currentLength)});
		}
		return returnArray;
	}

	function createRows(amount){
		numberOfRows = amount;
		data = buildRows(amount,0);
    }

	function addRows(amount){
		let newRows = buildRows(amount,numberOfRows)
		numberOfRows += amount;
		let tempData = data;
		data = tempData.concat(newRows)
    }

	function removeRows(){
		data = [];
		numberOfRows = 0;
    }
</script>

<section>
    <div>
        <Menu numberOfRows={numberOfRows}
              addRows={addRows}
              createRows={createRows}
              removeRows={removeRows}
        />
        <table id="table">
            <tbody>
            {#each data as entry}
                <Row key={entry.key} label={entry.label} />
            {/each}
            </tbody>
        </table>
    </div>
</section>

<style>
</style>
