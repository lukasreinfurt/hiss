export default {

    addExerciseLog (state, payload) {
        state.exerciseLogs.push(payload)
    },

    removeExerciseLog (state, payload) {
        var index = state.exerciseLogs.indexOf(payload)
        if (index > -1) {
            state.exerciseLogs.splice(index, 1)
        }
    }

}