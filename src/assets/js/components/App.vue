<template>
  <div id="app">
    <Counter></Counter>
    <Increment></Increment>
    <EventList></EventList>
  </div>
</template>

<script>
import Counter   from './Counter'
import Increment from './Increment'
import EventList from './EventList'

export default {
  name: 'app',
  components: {
    Counter,
    Increment,
    EventList,
  }
}
</script>

<style lang="css">
  #app {
    text-align: center;
  }
</style>