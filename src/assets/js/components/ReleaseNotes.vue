<template>
	<div id="contentWrapper" class="flex-container">
		<header><NavBar :title="title"></NavBar></header>
		<div id="mainWrapper" class="flex-container">
			<main class="flex-container"><div v-html="changelog"></div></main>
		</div>
	</div>
</template>

<script>
import NavBar from "./NavBar";
import changelog from "../../../../CHANGELOG.md";

export default {
	name: "ReleaseNotes",
	components: {
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
