export default {
  count(state) {
    return state.workoutList.length;
  },

  getWorkoutById: state => id => {
    return state.workouts[id];
  }
};
