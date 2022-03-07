<template>

    <body>
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col col-lg-6">
                    <div class="card mt-5 ">
                        <div class="card-body font-timer">
                            <h2>Increment Max 50 | Decrement Min 0</h2>
                            {{counter}}
                            <div class="col d-flex justify-content-center flex-fill bd-highlight">
                                <button class="btn btn-primary margin" @click="inc">Increment</button>
                                <button class="btn btn-secondary margin" @click="dec">Decrement</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>
<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter
            },
        },
        methods: {
            inc() {
                if (this.$store.state.counter >= 50) {
                    return this.$store.commit('setCounter', 50)
                } else {
                    return this.$store.commit('setCounter', this.counter + 1)
                }
            },
            dec() {
                if (this.$store.state.counter <= 0) {
                    return this.$store.commit('setCounter', 0)
                } else {
                    return this.$store.commit('setCounter', this.counter - 1)
                }
            }
        },
    }
</script>