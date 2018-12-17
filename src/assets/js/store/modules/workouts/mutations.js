import Vue from "vue";

export default {
  addWorkout(state, payload) {
    Vue.set(state.workouts, payload.id, payload);
    state.workoutList.push(payload.id);
  },

  removeWorkout(state, payload) {
    Vue.delete(state.workouts, payload.id);
    var index = state.workoutList.indexOf(payload.id);
    if (index > -1) {
      state.workoutList.splice(index, 1);
    }
  },

  addExercise(state, payload) {
    state.workouts[payload.id].exercises.push(payload.exercise);
  }
};
