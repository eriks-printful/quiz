<template>
    <div class="container">
        <div v-if="!activeQuestion && !result">
            <TextInput v-model="name" label="Your name" />
            <SelectDropdown v-model="activeQuizId" label="Pick your quiz" v-bind:options="getQuizzes()" />
            <div>
                <button @click="onStart">Start</button>
            </div>
        </div>
        <div v-else-if="activeQuestion">
            <div>Hello, {{name}}!</div>
            <QuestionItem />
        </div>
        <Results v-bind:content="result" v-bind:on-restart="restart" />

        <!--
            <Intro />
            <MainFlow />
            <Results />
        -->
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import Quiz from '../models/model.quiz.js';
    import QuestionItem from "./QuestionItem";
    import TextInput from './forms/input.text';
    import SelectDropdown from "./forms/select.dropdown";
    import Results from '../../wip/Results';

    export default {
        name: 'Quiz',
        components: {SelectDropdown, TextInput, QuestionItem, Results},
        computed: {
            name: {
                get() {
                    return this.$store.state.name;
                },
                set(newName) {
                    this.setName(newName);
                }
            },
            activeQuizId: {
                get() {
                    return this.$store.state.activeQuizId;
                },
                set(newValue) {
                    this.setActiveQuizId(newValue);
                }
            },
            allQuizzes: {
                get() {
                    return this.$store.state.allQuizzes
                }
            },
            activeQuestion: {
                get() {
                    return this.$store.state.activeQuestion;
                }
            },
            result: {
                get() {
                    return this.$store.state.result;
                }
            }
        },
        methods: Object.assign({}, mapActions([
            'setAllQuizzes',
            'setActiveQuizId',
            'setName',
            'start',
            'answer',
            'restart',
        ]), {
            onStart() {
                if (!this.name) {
                    alert('Give me your name');
                    return;
                }

                if (!this.activeQuizId) {
                    alert('Pick a quiz!');
                    return;
                }

                this.start();
            },
            getQuizzes() {
                return [].concat([{id: '', name: '---'}], this.allQuizzes.map(quiz => quiz.toArray()));
            }
        }),
        created() {
            this.setAllQuizzes();
        }
    }
</script>