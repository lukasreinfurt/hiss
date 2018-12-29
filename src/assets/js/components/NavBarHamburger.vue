<template>
  <nav id="secondary-nav" class="flex-container horizontal">
    <ul class="flex-container horizontal">
      <li id="hamburger-menu" @click="$emit('toggle-menu')">☰</li>
    </ul>
    <ul class="flex-container horizontal">
      <li>{{ title }}</li>
    </ul>
    <ul class="flex-container horizontal" />
  </nav>
</template>

<script>
export default {
  name: "NavBarHamburger",
  props: {
    title: {
      type: String,
      default: function() {
        return "";
      }
    }
  }
};
</script>
