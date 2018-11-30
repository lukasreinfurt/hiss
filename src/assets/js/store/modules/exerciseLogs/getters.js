export default {
  count(state) {
    return state.exerciseLogList.length;
  },

  getExerciseLogsByWorkoutLogId: state => workoutLogId => {
    return Object.values(state.exerciseLogs).filter(
      exerciseLog => exerciseLog.workoutLog === workoutLogId
    );
  }
};
