<template>
    <div v-if="result" class="container text-center">
        <h3 class="my-4">{{ result }}</h3>
        <button class="btn btn-success" @click="restart">Start again</button>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'Results',
        computed: {
            result: {
                get() {
                    return this.$store.state.result;
                }
            }
        },
        methods: mapActions(['restart']),
    }
</script>