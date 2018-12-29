<template>
  <ul class="flex-container horizontal">
    <li id="hamburger-menu" @click="$emit('toggle-menu')">☰</li>
  </ul>
</template>

<script>
export default {
  name: "NavBarHamburger"
};
</script>
