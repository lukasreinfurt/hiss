import Vue from "vue";

export default {
	addExerciseLog(state, payload) {
		Vue.set(state.exerciseLogs, payload.id, payload);
		state.exerciseLogList.push(payload.id);
	},

	removeExerciseLog(state, payload) {
		Vue.delete(state.exerciseLogs, payload.id);
		var index = state.exerciseLogList.indexOf(payload.id);
		if (index > -1) {
			state.exerciseLogList.splice(index, 1);
		}
	},

	updateType(state, payload) {
		state.exerciseLogs[payload.id].exerciseType = payload.value;
	},

	updateRepetitions(state, payload) {
		state.exerciseLogs[payload.id].repetitions = payload.value;
	},

	updateWeight(state, payload) {
		state.exerciseLogs[payload.id].weight = payload.value;
	},

	updateDuration(state, payload) {
		state.exerciseLogs[payload.id].duration = payload.value;
	}
};
