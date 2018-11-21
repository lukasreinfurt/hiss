export default {

    addWorkout (state, payload) {
        state.workouts.push(payload)
    },

    removeWorkout (state, payload) {
        var index = state.workouts.indexOf(payload)
        if (index > -1) {
            state.workouts.splice(index, 1)
        }
    }

}