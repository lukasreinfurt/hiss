export default {
  handler() {},

  addExercise(context, payload) {
    let newExercise = payload || {
      id: this.generateId(),
      name: "New Exercise",
      equipment: ""
    };
    context.commit("addExercise", newExercise);
    return newExercise.id;
  },

  removeExercise(context, payload) {
    context.commit("removeExercise", payload);
  }
};
