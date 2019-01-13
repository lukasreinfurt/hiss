export default {
	handler() {},

	addWorkoutLog(context, payload) {
		let newWorkoutLog = payload || {
			id: this.generateId(),
			workoutType: "1",
			date: new Date().toISOString()
		};
		context.commit("addWorkoutLog", newWorkoutLog);
		return newWorkoutLog.id;
	},

	removeWorkoutLog(context, payload) {
		context.commit("removeWorkoutLog", payload);
	}
};
