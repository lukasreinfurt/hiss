<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="css">
  #app {
    text-align: center;
  }
</style>