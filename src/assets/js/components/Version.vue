<template>
  <div>
    Currently running {{ version }}
    <div v-html="changelog" />
  </div>
</template>

<script>
import { version } from "../../../../package.json";
import changelog from "../../../../CHANGELOG.md";

export default {
  name: "Version",
  data: function() {
    return {
      version: version,
      changelog: changelog
    };
  }
};
</script>
