export default {

    handler () {},

    addExerciseLog (context, payload) {
        context.commit('addExerciseLog', payload)
    },

    removeExerciseLog(context, payload) {
        context.commit('removeExerciseLog', payload)
    }
    
}
