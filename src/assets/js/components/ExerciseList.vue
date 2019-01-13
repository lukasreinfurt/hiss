<template>
	<div id="contentWrapper" class="flex-container">
		<header>
			<NavBar :title="title" hamburger>
				<template slot="right">
					<button @click="addNewExercise()">＋</button>
				</template>
			</NavBar>
		</header>
		<div id="mainWrapper" class="flex-container">
			<main class="flex-container">
				<div
					v-for="(exercises, equipment) in exercisesByEquipment"
					:key="equipment"
					class="flex-container"
				>
					<span v-if="equipment">{{ equipment }}</span>
					<span v-else>Uncategorized</span>
					<ExerciseListItem
						v-for="exercise in exercises"
						:key="exercise.id"
						:exercise="exercise"
					></ExerciseListItem>
				</div>
				<div
					v-if="Object.keys(exercisesByEquipment).length === 0"
					class="emptyState"
				>
					<img
						class="illustration"
						src="/assets/images/illustrations/exercises.png"
					/>
					<p>
						Seems like you haven't added any exercises yet. <br />Go on, add
						your first exercise now!
					</p>
					<button class="primary" @click="addNewExercise()">
						Add Exercise
					</button>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
import NavBar from "./NavBar";
import ExerciseListItem from "./ExerciseListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("exercises");

export default {
	name: "ExerciseList",
	components: {
		ExerciseListItem,
		NavBar
	},
	data: function() {
		return {
			title: "Exercises"
		};
	},
	computed: {
		...mapState({ defaultExercises: "exercises" }),
		exercisesByEquipment() {
			let result = {};
			Object.entries(this.defaultExercises).forEach(function([id, exercise]) {
				if (!result[exercise.equipment]) {
					result[exercise.equipment] = [];
				}
				result[exercise.equipment].push(exercise);
			});
			return result;
		}
	},
	methods: {
		...mapActions(["addExercise"]),
		addNewExercise: function() {
			var router = this.$router;
			this.addExercise().then(function(id) {
				router.push({ path: "/exercises/" + id });
			});
		}
	}
};
</script>
