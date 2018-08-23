<template>
    <div>
        <Header />
        <Intro />
        <MainFlow />
        <Results />
    </div>
</template>

<script>
    import Intro from "./Intro";
    import MainFlow from "./MainFlow";
    import Results from './Results';
    import Header from "./Header";

    export default {
        name: 'Quiz',
        components: {Header, MainFlow, Intro, Results}
    }
</script>