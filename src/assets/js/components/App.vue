<template>
  <div id="app" class="flex-container horizontal">
    <aside class="flex-container">
      <nav id="main-nav" :class="{ active: menuActive }" @click="toggleMenu">
        <ul class="flex-container">
          <router-link to="/log"><li>Log</li></router-link>
          <router-link to="/exercises"><li>Exercises</li></router-link>
          <router-link to="/workouts"><li>Workouts</li></router-link>
          <router-link to="/version"><li>Version</li></router-link>
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
