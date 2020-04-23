<template>
	<div class="card">
		{{ exercise.name }}
		<button @click="removeExercise({ workoutId: workoutId, index: index })">
			✕
		</button>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "WorkoutExerciseListItem",
	props: {
		index: {
			type: Number,
			default: function() {
				return 0;
			}
		},
		exercise: {
			type: Object,
			default: function() {
				return {};
			}
		},
		workoutId: {
			type: String,
			default: function() {
				return "";
			}
		}
	},
	methods: {
		...mapActions("workouts", ["removeExercise"])
	}
};
</script>
