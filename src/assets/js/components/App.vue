<template>
  <div id="app" class="flex-container horizontal">
    <aside
      :class="{ active: menuActive }"
      class="flex-container"
      @click="toggleMenu"
    >
      <nav id="main-nav">
        <ul class="flex-container">
          <router-link to="/log"
            ><li>
              <img class="icon" src="/assets/images/icons/log.svg" />Log
            </li></router-link
          >
          <router-link to="/exercises"
            ><li>
              <img
                class="icon"
                src="/assets/images/icons/exercises.svg"
              />Exercises
            </li></router-link
          >
          <router-link to="/workouts"
            ><li>
              <img
                class="icon"
                src="/assets/images/icons/workouts.svg"
              />Workouts
            </li></router-link
          >
        </ul>
        <ul class="flex-container">
          <router-link to="/about"
            ><li>
              <img class="icon" src="/assets/images/icons/about.svg" />About
            </li></router-link
          >
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
