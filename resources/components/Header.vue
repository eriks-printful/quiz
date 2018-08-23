<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div class="container">
            <div class="navbar-brand clearfix">
                <span class="float-right">{{ name }}</span>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
        computed: {
            name: {
                get() {
                    if (this.$store.state.activeQuestion || this.$store.state.result) {
                        return 'Hello, ' + this.$store.state.name;
                    }

                    return 'Welcome!';
                }
            }
        },
    }
</script>