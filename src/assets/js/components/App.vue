<template>
  <div id="app" class="flex-container horizontal">
    <aside
      :class="{ active: menuActive }"
      class="flex-container"
      @click="toggleMenu"
    >
      <nav id="main-nav">
        <ul class="flex-container">
          <router-link to="/log"><li>Log</li></router-link>
          <router-link to="/exercises"><li>Exercises</li></router-link>
          <router-link to="/workouts"><li>Workouts</li></router-link>
        </ul>
        <ul class="flex-container">
          <router-link to="/about"><li>About</li></router-link>
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
