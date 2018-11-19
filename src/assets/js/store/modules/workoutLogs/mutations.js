export default {

    addWorkoutLog (state, payload) {
        state.workoutLogs.push(payload)
    },

    removeWorkoutLog (state, payload) {
        var index = state.workoutLogs.indexOf(payload)
        if (index > -1) {
            state.workoutLogs.splice(index, 1)
        }
    }

}