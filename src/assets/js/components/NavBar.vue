<template>
  <nav id="secondary-nav" class="flex-container horizontal">
    <section class="flex-container horizontal">
      <slot name="left">
        <button
          v-if="hamburger"
          id="hamburger-menu"
          @click="toggleMenuActive()"
        >
          ☰
        </button>
        <button v-else @click="$router.go(-1)">＜</button>
      </slot>
    </section>
    <section class="flex-container horizontal">
      <slot name="center"> {{ title }} </slot>
    </section>
    <section class="flex-container horizontal"><slot name="right" /></section>
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
