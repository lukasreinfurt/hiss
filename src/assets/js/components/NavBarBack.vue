<template>
  <ul class="flex-container horizontal">
    <li @click="$router.go(-1)">＜</li>
  </ul>
</template>

<script>
export default {
  name: "NavBarBack"
};
</script>
