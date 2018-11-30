export default {
  count(state) {
    return state.workoutLogList.length;
  },

  getWorkoutLogById: state => id => {
    return state.workoutLogs[id];
  }
};
