<template>
	<nav class="navBar flex-container horizontal">
		<section class="navBar__section flex-container horizontal">
			<slot name="left">
				<button
					v-if="menuButton"
					class="navBar__menuButton"
					@click="toggleMenuActive()"
				>
					☰
				</button>
				<button v-else class="navBar__backButton" @click="$router.go(-1)">
					＜
				</button>
			</slot>
		</section>
		<section class="navBar__section flex-container horizontal">
			<slot name="center">
				<span class="navBar__title">{{ title }}</span>
			</slot>
		</section>
		<section class="navBar__section flex-container horizontal">
			<slot name="right"></slot>
		</section>
	</nav>
</template>

<script>
export default {
	name: "NavBar",
	props: {
		title: {
			type: String,
			default: function() {
				return "";
			}
		},
		menuButton: {
			type: Boolean,
			default: function() {
				return false;
			}
		}
	},
	methods: {
		toggleMenuActive() {
			this.$store.commit("settings/toggleMenuActive");
		}
	}
};
</script>
