export default {
  count(state) {
    return state.exerciseList.length;
  },

  getExercisesByEquipment: state => equipment => {
    return Object.values(state.exercises).find(
      exercise => exercise.equipment === equipment
    );
  }
};
