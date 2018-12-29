<template>
  <nav id="secondary-nav" class="flex-container horizontal">
    <ul class="flex-container horizontal">
      <li @click="$router.go(-1)">＜</li>
    </ul>
    <ul class="flex-container horizontal">
      <li>{{ title }}</li>
    </ul>
    <ul class="flex-container horizontal" />
  </nav>
</template>

<script>
export default {
  name: "NavBarBack",
  props: {
    title: {
      type: String,
      default: function() {
        return "";
      }
    }
  }
};
</script>
