<template>
  <div id="app" class="flex-container horizontal">
    <aside class="flex-container">
      <nav id="main-nav" :class="{ active: menuActive }" @click="toggleMenu">
        <ul class="flex-container">
          <li><router-link to="/log">Log</router-link></li>
          <li><router-link to="/exercises">Exercises</router-link></li>
          <li><router-link to="/workouts">Workouts</router-link></li>
          <li><router-link to="/version">Version</router-link></li>
        </ul>
      </nav>
    </aside>
    <router-view name="content"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState("settings", ["menuActive"])
  },
  methods: {
    toggleMenu: function() {
      this.$store.commit("settings/toggleMenuActive");
    }
  }
};
</script>
