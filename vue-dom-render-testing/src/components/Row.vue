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
        <td> {{$props.id}} </td>
        <td> {{$props.label}} </td>
    </tr>
</template>

<style scoped>

</style>
