export default {

    addWorkout (state, payload) {
        state.workoutss.push(payload)
    },

    removeWorkout (state, payload) {
        var index = state.workoutss.indexOf(payload)
        if (index > -1) {
            state.workoutss.splice(index, 1)
        }
    }

}