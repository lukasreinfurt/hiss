export default {

    count (state) {
        return state.exerciseLogs.length
    },

    getExerciseLogsByWorkoutId: (state) => (workoutId) => {
        return state.exerciseLogs.filter(exerciseLog => exerciseLog.workout === workoutId)
    }
    
}