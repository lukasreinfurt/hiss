<template>
	<div class="baseLayout flex-container">
		<header class="baseLayout__header"><slot name="header"></slot></header>
		<main class="baseLayout__main"><slot name="main"></slot></main>
		<footer class="baseLayout__footer"><slot name="footer"></slot></footer>
	</div>
</template>

<script>
export default {
	name: "BaseLayout"
};
</script>
