export default {

    handler () {},

    addWorkout (context, payload) {
        context.commit('addWorkout', payload)
    },

    removeWorkout(context, payload) {
        context.commit('removeWorkout', payload)
    }
    
}
