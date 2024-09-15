<script>
export default {
    name: 'HelloWorld',
    props: {
        createRows:Function,
        addRows: Function,
        removeRows: Function,
		updateRows: Function,
        numberOfRows: Number,
    },
}
</script>

<template>
    <div>
        <div>
            <h1>Framework: Vue</h1>
        </div>
        <div>
            <p>total number of rows: {{numberOfRows}}</p>
        </div>
        <div >
            <button id="create-1000" v-on:click="createRows(1000)">
                create 1000
            </button>
            <button id="add-1000" v-on:click="addRows(1000)">
                add 1000
            </button>
            <button id="create-10000" v-on:click="createRows(10000)">
                create 10000
            </button>
            <button id="add-10000" v-on:click="addRows(10000)">
                add 10000
            </button>
            <button id="update" v-on:click="updateRows()">
                update all
            </button>
            <button id="remove" v-on:click="removeRows()">
                remove all
            </button>
        </div>
    </div>
</template>

<style scoped>
</style>
