export default {
  handler() {},

  addExercise(context, payload) {
    context.commit("addExercise", payload);
  },

  removeExercise(context, payload) {
    context.commit("removeExercise", payload);
  }
};
