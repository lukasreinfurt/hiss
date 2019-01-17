<template>
	<BaseLayout class="workoutLogList">
		<template slot="header">
			<NavBar :title="title" menu-button>
				<template slot="right">
					<button @click="addNewWorkoutLog()">＋</button>
				</template>
			</NavBar>
		</template>
		<template slot="main">
			<ParallaxContainer>
				<template slot="deep">
					<div class="workoutLogList__headerContainer headerContainer">
						<img
							class="workoutLogList__illustration"
							src="/assets/images/illustrations/log.png"
						/>
					</div>
				</template>
				<template slot="back">
					<div class="workoutLogList__headerContainer headerContainer">
						<h1 class="workoutLogList__title">{{ title }}</h1>
					</div>
				</template>
				<template slot="front">
					<div class="workoutLogList__contentWrapper contentWrapper">
						<div
							v-if="count > 0"
							class="workoutLogList__contentContainer contentContainer"
						>
							<WorkoutLogListItem
								v-for="workoutLog in workoutLogs"
								:key="workoutLog.id"
								:workout-log="workoutLog"
							></WorkoutLogListItem>
						</div>
						<div
							v-else
							class="workoutLogList__contentContainer contentContainer -isEmpty"
						>
							<p>
								Seems like you haven't logged any workouts yet. <br />Go on, add
								your first log now!
							</p>
							<button class="primary" @click="addNewWorkoutLog()">
								Add Log
							</button>
						</div>
					</div>
				</template>
			</ParallaxContainer>
		</template>
	</BaseLayout>
	<!-- <div id="contentWrapper" class="flex-container">
		<header>
			<NavBar :title="title" menu-button>
				<template slot="right">
					<button @click="addNewWorkoutLog()">＋</button>
				</template>
			</NavBar>
		</header>
		<div id="mainWrapper" class="flex-container">
			<main class="flex-container">
				<WorkoutLogListItem
					v-for="workoutLog in workoutLogs"
					:key="workoutLog.id"
					:workout-log="workoutLog"
				></WorkoutLogListItem>
				<div v-if="Object.keys(workoutLogs).length === 0" class="emptyState">
					<img
						class="illustration"
						src="/assets/images/illustrations/log.png"
					/>
					<p>
						Seems like you haven't logged any workouts yet. <br />Go on, add
						your first log now!
					</p>
					<button class="primary" @click="addNewWorkoutLog()">Add Log</button>
				</div>
			</main>
		</div>
  </div>-->
</template>

<script>
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";
import ParallaxContainer from "./ParallaxContainer";
import WorkoutLogListItem from "./WorkoutLogListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(
	"workoutLogs"
);

export default {
	name: "WorkoutLogList",
	components: {
		BaseLayout,
		NavBar,
		ParallaxContainer,
		WorkoutLogListItem
	},
	data: function() {
		return {
			title: "Log"
		};
	},
	computed: {
		...mapGetters(["count"]),
		...mapState(["workoutLogs"])
	},
	methods: {
		...mapActions(["addWorkoutLog"]),
		addNewWorkoutLog: function() {
			var router = this.$router;
			this.addWorkoutLog().then(function(id) {
				router.push({ path: "/log/" + id });
			});
		}
	}
};
</script>
