import Vue from "vue";

export default {
  addExercise(state, payload) {
    Vue.set(state.exercises, payload.id, payload);
    state.exerciseList.push(payload.id);
  },

  removeExercise(state, payload) {
    Vue.delete(state.exercises, payload.id);
    var index = state.exerciseList.indexOf(payload.id);
    if (index > -1) {
      state.exerciseList.splice(index, 1);
    }
  }
};
