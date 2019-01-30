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
							<img class="nav__icon" src="/assets/images/icons/log.svg" />Log
						</li>
					</router-link>
					<router-link class="nav__link" to="/exercises">
						<li class="nav__listItem">
							<img
								class="nav__icon"
								src="/assets/images/icons/exercises.svg"
							/>Exercises
						</li>
					</router-link>
					<router-link class="nav__link" to="/workouts">
						<li class="nav__listItem">
							<img
								class="nav__icon"
								src="/assets/images/icons/workouts.svg"
							/>Workouts
						</li>
					</router-link>
				</ul>
				<ul class="nav__list flex-container">
					<router-link class="nav__link" to="/settings">
						<li class="nav__listItem">
							<img
								class="nav__icon"
								src="/assets/images/icons/settings.svg"
							/>Settings
						</li>
					</router-link>
					<router-link class="nav__link" to="/about">
						<li class="nav__listItem">
							<img
								class="nav__icon"
								src="/assets/images/icons/about.svg"
							/>About
						</li>
					</router-link>
				</ul>
			</nav>
		</aside>
		<router-view name="content"></router-view>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "App",
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
