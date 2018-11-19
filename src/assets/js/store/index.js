import Vue  from 'vue'
import Vuex from 'vuex'

import exercises   from './modules/exercises/'
import templates   from './modules/templates/'
import events      from './modules/events/'
import workoutLogs from './modules/workoutLogs/'
import state       from './state'
import getters     from './getters'
import mutations   from './mutations'
import actions     from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        exercises,
        templates,
        events,
        workoutLogs,
    },
    state,
    getters,
    mutations,
    actions,
    strict: process.env.NODE_ENV !== 'production',
});

export default store