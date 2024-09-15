<template>
    <div class="app">
        <Menu
            v-bind="{createRows, addRows, removeRows}"
              :number-of-rows="numberOfRows"
        />
        <table class="table">
            <tbody>
                <Row
                    v-for="item in data"
                    :id="item.id"
                    :label="item.label"
                    :key="item.id"
                />
            </tbody>
      </table>
    </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Row from './components/Row.vue'

export default {
    name: 'App',
    components: {
        Menu,
        Row,
    },
    data() {
        return {
            numberOfRows: 0,
            data: [],
        };
    },
    methods: {
        createRows(amount){
            this.numberOfRows = amount;
            this.data =this.buildRows(amount,0);
        },
        addRows(amount){
            this.numberOfRows += amount;
            let tmp_data = this.data;
            this.data = tmp_data.concat(this.buildRows(amount,this.data.length));
        },
        removeRows(){
            this.numberOfRows = 0;
            this.data = [];
        },
        buildRows(amount,currentLength){
            let returnArray= [];
            for(let i = 0; i<amount; i++){
                returnArray.push({id: i+currentLength, label:'label '+(i+currentLength)});
            }
            return returnArray;
        }
    }
}
</script>

<style>

</style>
