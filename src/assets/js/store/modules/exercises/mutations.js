export default {

    addExercise (state, payload) {
        state.exercises.push(payload)
    },

    removeExercise (state, payload) {
        var index = state.exercise.indexOf(payload)
        if (index > -1) {
            state.exercises.splice(index, 1)
        }
    }

}