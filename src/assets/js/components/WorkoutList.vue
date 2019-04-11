<template>
	<BaseLayout class="workoutList">
		<template slot="header">
			<NavBar :title="title" menu-button>
				<template slot="right">
					<button @click="addNewWorkout()">＋</button>
				</template>
			</NavBar>
		</template>
		<template slot="main">
			<ParallaxContainer>
				<template slot="deep">
					<div class="workoutList__headerContainer headerContainer">
						<WorkoutListIllustration
							class="workoutList__illustrationWrapper illustrationWrapper"
						></WorkoutListIllustration>
					</div>
				</template>
				<template slot="back">
					<div class="workoutList__headerContainer headerContainer">
						<h1 class="workoutList__title">{{ title }}</h1>
					</div>
				</template>
				<template slot="front">
					<div class="workoutList__contentWrapper contentWrapper">
						<div
							v-if="count > 0"
							class="workoutList__contentContainer contentContainer"
						>
							<WorkoutListItem
								v-for="workout in workouts"
								:key="workout.id"
								:workout="workout"
							></WorkoutListItem>
						</div>
						<div
							v-else
							class="workoutList__contentContainer contentContainer -isEmpty"
						>
							<p>
								Seems like you haven't added any workouts yet. <br />Go on, add
								your first workout now!
							</p>
							<button class="-isPrimary" @click="addNewWorkout()">
								Add Workout
							</button>
						</div>
					</div>
				</template>
			</ParallaxContainer>
		</template>
	</BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";
import ParallaxContainer from "./ParallaxContainer";
import WorkoutListIllustration from "./WorkoutListIllustration";
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
		ParallaxContainer,
		WorkoutListIllustration,
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
