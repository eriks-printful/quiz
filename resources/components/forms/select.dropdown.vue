<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <select class="form-control" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
            <option v-for="option in options" :value="option.id">{{ option.name }}</option>
        </select>
    </div>
</template>
<script>
    export default {
        name: 'SelectDropdown',
        props: {
            label: {
                type: String,
                required: true,
            },
            value: {
                type: String,
            },
            options: {
                type: Array,
                required: true,
            }
        }
    }
</script>