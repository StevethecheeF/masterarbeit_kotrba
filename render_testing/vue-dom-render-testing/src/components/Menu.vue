<script>
export default {
    name: 'HelloWorld',
    props: {
        createRows:Function,
        addRows: Function,
        removeRows: Function
    },
}
</script>

<template>
    <div class="menu">
        <div class="framework">
            <h1>Framework: Vue3</h1>
        </div>
        <div class="button-container">
            <button class="btn" v-on:click="createRows(1000)">
                create 1000
            </button>
            <button class="btn" v-on:click="addRows(1000)">
                add 1000
            </button>
            <button class="btn" v-on:click="createRows(10000)">
                create 10000
            </button>
            <button class="btn" v-on:click="createRows(10000)">
                add 10000
            </button>
            <button class="btn" v-on:click="removeRows()">
                remove all
            </button>
        </div>
    </div>
</template>

<style scoped>
</style>
