<template>
	<div id="contentWrapper" class="flex-container">
		<header>
			<NavBar :title="title" hamburger>
				<template slot="right">
					<button @click="addNewWorkout()">＋</button>
				</template>
			</NavBar>
		</header>
		<div id="mainWrapper" class="flex-container">
			<main class="flex-container">
				<WorkoutListItem
					v-for="workout in workouts"
					:key="workout.id"
					:workout="workout"
				></WorkoutListItem>
				<div v-if="Object.keys(workouts).length === 0" class="emptyState">
					<img
						class="illustration"
						src="/assets/images/illustrations/workouts.png"
					/>
					<p>
						Seems like you haven't added any workouts yet. <br />Go on, add your
						first workout now!
					</p>
					<button class="primary" @click="addNewWorkout()">Add Workout</button>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
import NavBar from "./NavBar";
import WorkoutListItem from "./WorkoutListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(
	"workouts"
);

export default {
	name: "WorkoutList",
	components: {
		WorkoutListItem,
		NavBar
	},
	data: function() {
		return {
			title: "Workouts"
		};
	},
	computed: {
		...mapState(["workouts"]),
		...mapGetters(["count"])
	},
	methods: {
		...mapActions(["addWorkout"]),
		addNewWorkout: function() {
			var router = this.$router;
			this.addWorkout().then(function(id) {
				router.push({ path: "/workouts/" + id });
			});
		}
	}
};
</script>
