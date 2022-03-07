import { createStore } from 'vuex'

export default createStore({
    state: {
        counter: 25
    },
    mutations: {
        setCounter(state, value) {
            state.counter = value
        }
    },
    actions: {},
    modules: {}
})
