<template>
    <div class="container">
      <h1>{{ count }} ({{ evenOrOdd }})</h1>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'counter',
    computed: {
        ...mapState(['count', 'test']),
        ...mapGetters(['evenOrOdd'])
    }
    
}
</script>