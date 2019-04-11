<template>
	<div class="app flex-container horizontal">
		<aside
			:class="{ '-isActive': menuActive }"
			class="app__menu flex-container"
			@click="toggleMenu"
		>
			<nav class="nav">
				<ul class="nav__list flex-container">
					<router-link class="nav__link" to="/log">
						<li class="nav__listItem">
							<LogIcon class="log__iconWrapper iconWrapper nav__icon"></LogIcon
							>Log
						</li>
					</router-link>
					<router-link class="nav__link" to="/exercises">
						<li class="nav__listItem">
							<ExerciseIcon
								class="exercise__iconWrapper iconWrapper nav__icon"
							></ExerciseIcon
							>Exercises
						</li>
					</router-link>
					<router-link class="nav__link" to="/workouts">
						<li class="nav__listItem">
							<WorkoutIcon
								class="workout__iconWrapper iconWrapper nav__icon"
							></WorkoutIcon
							>Workouts
						</li>
					</router-link>
				</ul>
				<ul class="nav__list flex-container">
					<router-link class="nav__link" to="/settings">
						<li class="nav__listItem">
							<SettingsIcon
								class="settings__iconWrapper iconWrapper nav__icon"
							></SettingsIcon
							>Settings
						</li>
					</router-link>
					<router-link class="nav__link" to="/about">
						<li class="nav__listItem">
							<AboutIcon
								class="about__iconWrapper iconWrapper nav__icon"
							></AboutIcon
							>About
						</li>
					</router-link>
				</ul>
			</nav>
		</aside>
		<router-view name="content"></router-view>
	</div>
</template>

<script>
import AboutIcon from "./AboutIcon";
import ExerciseIcon from "./ExerciseIcon";
import LogIcon from "./LogIcon";
import SettingsIcon from "./SettingsIcon";
import WorkoutIcon from "./WorkoutIcon";

import { mapState } from "vuex";

export default {
	name: "App",
	components: {
		AboutIcon,
		ExerciseIcon,
		LogIcon,
		SettingsIcon,
		WorkoutIcon
	},
	computed: {
		...mapState("settings", ["menuActive", "theme"])
	},
	watch: {
		theme() {
			this.activateTheme();
		}
	},
	mounted() {
		this.activateTheme();
	},
	methods: {
		toggleMenu: function() {
			this.$store.commit("settings/toggleMenuActive");
		},
		activateTheme: function() {
			document.documentElement.className = this.theme;
		}
	}
};
</script>
