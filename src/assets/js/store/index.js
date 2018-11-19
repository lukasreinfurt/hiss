import Vue  from 'vue'
import Vuex from 'vuex'

import exercises    from './modules/exercises/'
import exerciseLogs from './modules/exerciseLogs/'
import workouts     from './modules/workouts/'
import workoutLogs  from './modules/workoutLogs/'
import state        from './state'
import getters      from './getters'
import mutations    from './mutations'
import actions      from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        exercises,
        exerciseLogs,
        workouts,
        workoutLogs,
    },
    state,
    getters,
    mutations,
    actions,
    strict: process.env.NODE_ENV !== 'production',
});

export default store