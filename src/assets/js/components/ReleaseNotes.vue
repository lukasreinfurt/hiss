<template>
	<BaseLayout class="releaseNotes">
		<template slot="header">
			<NavBar :title="title"></NavBar>
		</template>
		<template slot="main">
			<ParallaxContainer>
				<template slot="deep">
					<div class="releaseNotes__headerContainer headerContainer">
						<ReleaseNotesIllustration
							class="releaseNotes__illustrationWrapper illustrationWrapper"
						></ReleaseNotesIllustration>
					</div>
				</template>
				<template slot="back">
					<div class="releaseNotes__headerContainer headerContainer">
						<h1 class="releaseNotes__title">{{ title }}</h1>
					</div>
				</template>
				<template slot="front">
					<div class="releaseNotes__contentWrapper contentWrapper">
						<div
							class="releaseNotes__contentContainer contentContainer"
							v-html="changelog"
						></div>
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
import ReleaseNotesIllustration from "./ReleaseNotesIllustration";
import changelog from "../../../../CHANGELOG.md";

export default {
	name: "ReleaseNotes",
	components: {
		BaseLayout,
		NavBar,
		ParallaxContainer,
		ReleaseNotesIllustration
	},
	data: function() {
		return {
			title: "Release Notes",
			changelog: changelog
		};
	}
};
</script>
