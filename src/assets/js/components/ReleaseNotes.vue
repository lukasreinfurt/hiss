<template>
	<BaseLayout>
		<template slot="header">
			<NavBar :title="title"></NavBar>
		</template>
		<template slot="main">
			<div class="releaseNotes contentWrapper">
				<div
					class="releaseNotes__container contentContainer"
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
