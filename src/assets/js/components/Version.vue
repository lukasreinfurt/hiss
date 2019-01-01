<template>
  <div id="contentWrapper" class="flex-container">
    <header><NavBar :title="title" hamburger></NavBar></header>
    <div id="mainWrapper" class="flex-container">
      <main class="flex-container">
        Currently running {{ version }}
        <div v-html="changelog" />
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import { version } from "../../../../package.json";
import changelog from "../../../../CHANGELOG.md";

export default {
  name: "Version",
  components: {
    NavBar
  },
  data: function() {
    return {
      title: "Version",
      version: version,
      changelog: changelog
    };
  }
};
</script>
