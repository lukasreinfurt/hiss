<template>
	<div class="parallaxContainer">
		<div class="parallaxContainer__layer -isDeep">
			<slot name="deep"></slot>
		</div>
		<div class="parallaxContainer__layer -isBack">
			<slot name="back"></slot>
		</div>
		<div class="parallaxContainer__layer -isFront">
			<slot name="front"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "ParallaxContainer"
};
</script>
