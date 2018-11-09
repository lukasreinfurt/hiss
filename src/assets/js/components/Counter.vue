<template>
    <div class="container">
      <h1>{{ $store.state.count }} ({{ evenOrOdd }})</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'counter',
    computed: mapGetters([
        'evenOrOdd'
    ])
}
</script>