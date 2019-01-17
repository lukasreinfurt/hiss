<template>
	<BaseLayout>
		<template slot="header">
			<NavBar :title="title" menu-button>
				<template slot="right">
					<button @click="addNewWorkout()">＋</button>
				</template>
			</NavBar>
		</template>
		<template slot="main">
			<div class="workoutList">
				<div v-if="count > 0" class="workoutList__container">
					<WorkoutListItem
						v-for="workout in workouts"
						:key="workout.id"
						:workout="workout"
					></WorkoutListItem>
				</div>
				<div v-else class="workoutList__container -isEmpty">
					<img
						class="workoutList__illustration"
						src="/assets/images/illustrations/workouts.png"
					/>
					<p>
						Seems like you haven't added any workouts yet. <br />Go on, add your
						first workout now!
					</p>
					<button class="primary" @click="addNewWorkout()">Add Workout</button>
				</div>
			</div>
		</template>
	</BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";
import WorkoutListItem from "./WorkoutListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(
	"workouts"
);

export default {
	name: "WorkoutList",
	components: {
		BaseLayout,
		NavBar,
		WorkoutListItem
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
