export default {

    count (state) {
        return state.workoutLogs.length
    },

    getWorkoutLogById: (state) => (id) => {
        return state.workoutLogs.find(workoutLog => workoutLog.id === id)
    }
    
}