<template>
	<BaseLayout>
		<template slot="header">
			<NavBar :title="title"></NavBar>
		</template>
		<template slot="main">
			<div class="releaseNotes">
				<div
					class="releaseNotes__container flex-container"
					v-html="changelog"
				></div>
			</div>
		</template>
	</BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";
import changelog from "../../../../CHANGELOG.md";

export default {
	name: "ReleaseNotes",
	components: {
		BaseLayout,
		NavBar
	},
	data: function() {
		return {
			title: "Release Notes",
			changelog: changelog
		};
	}
};
</script>
