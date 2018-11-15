import Vue  from 'vue'
import Vuex from 'vuex'

import exercises from './modules/exercises/'
import events    from './modules/events/'
import workouts  from './modules/workouts/'
import state     from './state'
import getters   from './getters'
import mutations from './mutations'
import actions   from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        exercises,
        events,
        workouts,
    },
    state,
    getters,
    mutations,
    actions,
    strict: process.env.NODE_ENV !== 'production',
});

export default store