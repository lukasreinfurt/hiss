<template>
  <div>
    <h2>Version</h2>
    Currently running {{ version }}
  </div>
</template>

<script>
import { version } from "../../../../package.json";

export default {
  name: "Version",
  data: function() {
    return {
      version: version
    };
  }
};
</script>
