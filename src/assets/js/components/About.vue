<template>
  <div id="contentWrapper" class="flex-container">
    <header><NavBar :title="title" hamburger></NavBar></header>
    <div id="mainWrapper" class="flex-container">
      <main class="flex-container">
        <img
          class="illustration"
          src="/assets/images/illustrations/about.png"
        />
        <h1>HISS</h1>
        <section>
          Currently running {{ version }} (see
          <router-link to="/about/releasenotes">release notes</router-link>)
        </section>
        <section>Made with ❤️ in 🇩🇪</section>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import { version } from "../../../../package.json";

export default {
  name: "About",
  components: {
    NavBar
  },
  data: function() {
    return {
      title: "About",
      version: version
    };
  }
};
</script>
