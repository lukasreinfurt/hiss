export default {

    count (state) {
        return state.events.length
    },

    getEventsByWorkoutId: (state) => (workoutId) => {
        return state.events.filter(event => event.workout === workoutId)
    }
    
}