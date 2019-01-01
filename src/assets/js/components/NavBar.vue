<template>
  <nav id="secondary-nav" class="flex-container horizontal">
    <ul class="flex-container horizontal">
      <slot name="left">
        <li v-if="hamburger" id="hamburger-menu" @click="toggleMenuActive()">
          ☰
        </li>
        <li v-else @click="$router.go(-1)">＜</li>
      </slot>
    </ul>
    <ul class="flex-container horizontal">
      <slot name="center">
        <li>{{ title }}</li>
      </slot>
    </ul>
    <ul class="flex-container horizontal">
      <slot name="right" />
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: function() {
        return "";
      }
    },
    hamburger: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  methods: {
    toggleMenuActive() {
      this.$store.commit("settings/toggleMenuActive");
    }
  }
};
</script>
