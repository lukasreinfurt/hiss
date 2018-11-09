<template>
    <div class="container">
      <button v-on:click="doStuff">+</button>
    </div>
</template>

<script>
import store from '../store/store'

export default {
    name: 'increment',
    methods: {
        doStuff () {
            store.commit('increment')
        }
    }
}
</script>