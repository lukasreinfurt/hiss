export default {
  handler() {},

  addWorkoutLog(context, payload) {
    context.commit("addWorkoutLog", payload);
  },

  removeWorkoutLog(context, payload) {
    context.commit("removeWorkoutLog", payload);
  }
};
