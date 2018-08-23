<template>
    <div class="form-group">
        <label>{{label}}</label>
        <input class="form-control" type="text" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" />
    </div>
</template>
<script>
    export default {
        name: 'TextInput',
        props: {
            value: String,
            label: String
        }
    }
</script>