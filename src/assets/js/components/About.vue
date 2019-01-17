<template>
	<BaseLayout>
		<template slot="header">
			<NavBar :title="title" menu-button></NavBar>
		</template>
		<template slot="main">
			<div class="about contentWrapper">
				<div class="about__container contentContainer">
					<img
						class="about__illustration"
						src="/assets/images/illustrations/about.png"
					/>
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
import BaseLayout from "./BaseLayout";
import NavBar from "./NavBar";
import { version } from "../../../../package.json";

export default {
	name: "About",
	components: {
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
