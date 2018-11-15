export default {

    count (state) {
        return state.exercises.length
    },
    
    getExerciseById: (state) => (id) => {
        return state.exercises.find(exercise => exercise.id === id)
    }
}