<template>
  <div id="app" class="flex-container horizontal">
    <nav id="main-nav" :class="{ active: menuActive }" @click="deactivateMenu">
      <ul class="flex-container">
        <li>
          <router-link to="/log" @click.native="deactivateMenu"
            >Log</router-link
          >
        </li>
        <li>
          <router-link to="/exercises" @click.native="deactivateMenu"
            >Exercises</router-link
          >
        </li>
        <li>
          <router-link to="/workouts" @click.native="deactivateMenu"
            >Workouts</router-link
          >
        </li>
        <li>
          <router-link to="/version" @click.native="deactivateMenu"
            >Version</router-link
          >
        </li>
      </ul>
    </nav>
    <div id="mainWrapper" class="flex-container">
      <nav id="secondary-nav">
        <!-- <ul class="flex-container horizontal">
          <li id="hamburger-menu" @click="toggleMenu">☰</li>
        </ul> -->
        <router-view name="navBar" @toggle-menu="toggleMenu()" />
      </nav>
      <div id="contentWrapper" class="flex-container">
        <div id="content"><router-view name="content" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.menuActive = !this.menuActive;
    },
    deactivateMenu: function() {
      this.menuActive = false;
    }
  }
};
</script>
