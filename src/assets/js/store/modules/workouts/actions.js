export default {
  handler() {},

  addWorkout(context, payload) {
    let newWorkout = payload || {
      id: "test",
      name: "New Workout",
      exercises: []
    };
    context.commit("addWorkout", newWorkout);
    return newWorkout.id;
  },

  removeWorkout(context, payload) {
    context.commit("removeWorkout", payload);
  }
};
