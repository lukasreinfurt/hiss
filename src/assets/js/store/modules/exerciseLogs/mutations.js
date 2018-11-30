import Vue from "vue";

export default {
  addExerciseLog(state, payload) {
    Vue.set(state.exercises, payload.id, payload);
    state.exerciseLogList.push(payload.id);
  },

  removeExerciseLog(state, payload) {
    Vue.delete(state.exercises, payload.id);
    var index = state.exerciseLogList.indexOf(payload.id);
    if (index > -1) {
      state.exerciseLogList.splice(index, 1);
    }
  }
};
