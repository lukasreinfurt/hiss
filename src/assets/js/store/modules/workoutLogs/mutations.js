import Vue from "vue";

export default {
	addWorkoutLog(state, payload) {
		Vue.set(state.workoutLogs, payload.id, payload);
		state.workoutLogList.push(payload.id);
	},

	removeWorkoutLog(state, payload) {
		Vue.delete(state.workoutLogs, payload.id);
		var index = state.workoutLogList.indexOf(payload.id);
		if (index > -1) {
			state.workoutLogList.splice(index, 1);
		}
	},

	updateWorkoutType(state, payload) {
		state.workoutLogs[payload.id].workoutType = payload.value;
	}
};
