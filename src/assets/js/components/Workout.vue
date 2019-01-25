<template>
	<BaseLayout class="workout">
		<template slot="header">
			<NavBar :title="title"></NavBar>
		</template>
		<template slot="main">
			<div class="workout__contentWrapper contentWrapper">
				<div class="workout__contentContainer contentContainer">
					<input v-model="name" placeholder="Workout Name" />
					<WorkoutExerciseList
						:exercises="exercises"
						:id="id"
					></WorkoutExerciseList>
				</div>
			</div>
		</template>
	</BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";
import WorkoutExerciseList from "./WorkoutExerciseList";

export default {
	name: "Workout",
	components: {
		BaseLayout,
		NavBar,
		WorkoutExerciseList
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
