<template>
    <a href="#" @click.stop="onClick">{{ answer.answer }}</a>
</template>

<script>
    import Answer from '../models/model.answer.js';
    export default {
        name: 'AnswerItem',
        props: {
            answer: {
                type: Answer,
                required: true,
            },
            onAnswered: {
                type: Function,
                required: true,
            }
        },
        methods: {
            onClick() {
                this.onAnswered(this.answer.id);
            }
        }
    }
</script>