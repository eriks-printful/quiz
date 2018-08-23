<template>
    <a href="#" @click="onClick" :class="isActive ? baseClass + ' active' : baseClass">{{ answer.answer }}</a>
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
            },
            isActive: Boolean,
        },
        data() {
            return {
                baseClass: 'list-group-item list-group-item-action'
            }
        },
        methods: {
            onClick() {
                this.onAnswered(this.answer.id);
            }
        }
    }
</script>