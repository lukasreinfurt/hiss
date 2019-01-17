<template>
	<BaseLayout class="exerciseList">
		<template slot="header">
			<NavBar :title="title" menu-button>
				<template slot="right">
					<button @click="addNewExercise()">＋</button>
				</template>
			</NavBar>
		</template>
		<template slot="main">
			<ParallaxContainer>
				<template slot="deep">
					<div class="exerciseList__headerContainer headerContainer">
						<img
							class="exerciseList__illustration"
							src="/assets/images/illustrations/exercises.png"
						/>
					</div>
				</template>
				<template slot="back">
					<div class="exerciseList__headerContainer headerContainer">
						<h1 class="exerciseList__title">{{ title }}</h1>
					</div>
				</template>
				<template slot="front">
					<div class="exerciseList__contentWrapper contentWrapper">
						<div
							v-if="count > 0"
							class="exerciseList__contentContainer contentContainer"
						>
							<div
								v-for="(exercises, equipment) in exercisesByEquipment"
								:key="equipment"
								class="exerciseList__group"
							>
								<span v-if="equipment">{{ equipment }}</span>
								<span v-else>Uncategorized</span>
								<ExerciseListItem
									v-for="exercise in exercises"
									:key="exercise.id"
									:exercise="exercise"
								></ExerciseListItem>
							</div>
						</div>
						<div
							v-else
							class="exerciseList__contentContainer contentContainer -isEmpty"
						>
							<p>
								Seems like you haven't added any exercises yet. <br />Go on, add
								your first exercise now!
							</p>
							<button class="primary" @click="addNewExercise()">
								Add Exercise
							</button>
						</div>
					</div>
				</template>
			</ParallaxContainer>
		</template>
	</BaseLayout>
	<!--
	<div id="contentWrapper" class="flex-container">
		<header>
			<NavBar :title="title" menu-button>
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
  -->
</template>

<script>
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";
import ParallaxContainer from "./ParallaxContainer";
import ExerciseListItem from "./ExerciseListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(
	"exercises"
);

export default {
	name: "ExerciseList",
	components: {
		BaseLayout,
		ExerciseListItem,
		NavBar,
		ParallaxContainer
	},
	data: function() {
		return {
			title: "Exercises"
		};
	},
	computed: {
		...mapGetters(["count"]),
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
