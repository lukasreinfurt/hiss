<template>
	<div id="contentWrapper" class="flex-container">
		<header><NavBar :title="title"></NavBar></header>
		<div id="mainWrapper" class="flex-container">
			<main class="flex-container">
				<input v-model="name" placeholder="Workout Name" />
				<WorkoutExerciseList
					:exercises="exercises"
					:id="id"
				></WorkoutExerciseList>
			</main>
		</div>
	</div>
</template>

<script>
import NavBar from "./NavBar";
import WorkoutExerciseList from "./WorkoutExerciseList";

export default {
	name: "Workout",
	components: {
		WorkoutExerciseList,
		NavBar
	},
	props: {
		id: {
			type: String,
			default: function() {
				return "";
			}
		}
	},
	data: function() {
		return {
			title: "Workout"
		};
	},
	computed: {
		workout() {
			return this.$store.state.workouts.workouts[this.id];
		},
		name: {
			get() {
				return this.$store.state.workouts.workouts[this.id].name;
			},
			set(value) {
				this.$store.commit("workouts/updateName", {
					id: this.id,
					value: value
				});
			}
		},
		exercises() {
			var results = [];
			this.workout.exercises.forEach(function(exercise) {
				results.push(this.$store.state.exercises.exercises[exercise]);
			}, this);
			return results;
		}
	}
};
</script>
