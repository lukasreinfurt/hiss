<template>
	<BaseLayout class="about">
		<template slot="header">
			<NavBar :title="title" class="about__navBar" menu-button></NavBar>
		</template>
		<template slot="main">
			<div class="about__contentWrapper contentWrapper">
				<div class="about__contentContainer contentContainer">
					<AboutIllustration
						class="about__illustrationWrapper illustrationWrapper"
					></AboutIllustration>
					<h1>HISS</h1>
					<section>
						Currently running {{ version }} (see
						<router-link to="/about/releasenotes">release notes</router-link>)
					</section>
					<section>Made with ❤️ in 🇩🇪</section>
				</div>
			</div>
		</template>
	</BaseLayout>
</template>

<script>
import AboutIllustration from "./AboutIllustration";
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";
import { version } from "../../../../package.json";

export default {
	name: "About",
	components: {
		AboutIllustration,
		BaseLayout,
		NavBar
	},
	data: function() {
		return {
			title: "About",
			version: version
		};
	}
};
</script>
