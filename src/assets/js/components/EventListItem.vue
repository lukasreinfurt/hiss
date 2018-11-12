<template>
    <div>
        <h2>{{ event.type }}</h2>
        Duration: {{ event.duration }}
        <button v-on:click="removeEvent(event)">x</button>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('events')

export default {
    name: 'event',
    props: ['event'],
    methods: {
        ...mapActions(['removeEvent'])
    },
}
</script>