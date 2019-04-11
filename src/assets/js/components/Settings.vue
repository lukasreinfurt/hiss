<template>
	<BaseLayout class="settings">
		<template slot="header">
			<NavBar :title="title" class="settings__navBar" menu-button></NavBar>
		</template>
		<template slot="main">
			<div class="settings__contentWrapper contentWrapper">
				<div class="settings__contentContainer contentContainer">
					<label>Theme</label>
					<select v-model="theme">
						<option>default</option>
						<option>light</option>
						<option>dark</option>
					</select>
				</div>
			</div>
		</template>
	</BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";

export default {
	name: "About",
	components: {
		BaseLayout,
		NavBar
	},
	data: function() {
		return {
			title: "Settings"
		};
	},
	computed: {
		theme: {
			get() {
				return this.$store.state.settings.theme;
			},
			set(value) {
				this.$store.commit("settings/updateTheme", {
					value: value
				});
			}
		}
	}
};
</script>
