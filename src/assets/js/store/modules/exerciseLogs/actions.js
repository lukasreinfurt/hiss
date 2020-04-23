export default {
	handler() {},

	addExerciseLog(context, payload) {
		payload.id = this.generateId();
		payload.duration = 0;
		if (payload.type === "exercise") {
			payload.exerciseType = "1";
			payload.repetitions = 1;
			payload.weight = 0;
		}
		context.commit("addExerciseLog", payload);
		return payload.id;
	},

	removeExerciseLog(context, payload) {
		context.commit("removeExerciseLog", payload);
	}
};
