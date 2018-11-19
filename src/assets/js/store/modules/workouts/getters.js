export default {

    count (state) {
        return state.workouts.length
    },
    
    getWorkoutById: (state) => (id) => {
        return state.workouts.find(workout => workout.id === id)
    }
}