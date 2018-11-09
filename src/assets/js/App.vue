<template>
  <div id="app">
    <Counter></Counter>
    <Increment></Increment>
  </div>
</template>

<script>
import Counter from './Counter.vue'
import Increment from './Increment.vue'

export default {
  name: 'app',
  components: {
    Counter,
    Increment
  }
}
</script>

<style lang="css">
  #app {
    text-align: center;
  }
</style>