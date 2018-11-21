export default {

    count (state) {
        return state.exerciseLogs.length
    },

    getExerciseLogsByWorkoutLogId: (state) => (workoutLogId) => {
        return state.exerciseLogs.filter(exerciseLog => exerciseLog.workoutLog === workoutLogId)
    }
    
}