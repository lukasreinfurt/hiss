import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        evenOrOdd (state) {
            return state.count % 2 === 0 ? 'even' : 'odd'
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    action: {
        increment (context) {
            context.commit('increment')
        }
    }
});

export default store