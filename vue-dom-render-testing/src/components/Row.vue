<script>
export default {
    name: 'Row',
    props: {
        id:Number,
        label: String,
    },
    methods: {

  },
}
</script>

<template>
    <tr>
        <td class="small-col" > {{$props.id}} </td>
        <td class="big-col"> {{$props.label}} </td>
    </tr>
</template>

<style scoped>

</style>
