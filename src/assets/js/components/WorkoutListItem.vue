<template>
	<div class="card">
		<router-link :to="'/workouts/' + workout.id">{{
			workout.name
		}}</router-link>
		<button @click="removeWorkout(workout)">✕</button>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "WorkoutListItem",
	props: {
		workout: {
			type: Object,
			default: function() {
				return {};
			}
		}
	},
	methods: {
		...mapActions("workouts", ["removeWorkout"])
	}
};
</script>
