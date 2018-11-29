export default {

    count (state) {
        return state.exerciseList.length
    },
    
    getExerciseById: (state) => (id) => {
        return state.exercises[id]
    },

    getExercisesByEquipment: (state) => (equipment) => {
        return Object.values(state.exercises).find(exercise => exercise.equipment === equipment)
    },
}