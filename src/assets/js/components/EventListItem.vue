<template>
    <div>
        <div
            class="card"
            v-if="event.type === 'exercise'">
            <h2>{{ event.exerciseType }}</h2>
            Repetitions: {{ event.repetitions }}
            Weight: {{ event.weight }}
            Duration: {{ event.duration }}
            <button v-on:click="removeEvent(event)">x</button>
        </div>
        <div
            class="card transition"
            v-else-if="event.type === 'transition'">
            Transition for {{ event.duration }} seconds.
        </div>
        <div v-else>
            Something went wrong {{ event.type === 'exercise' }}
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('events')

export default {
    name: 'eventListItem',
    props: ['event'],
    methods: {
        ...mapActions(['removeEvent'])
    },
}
</script>

<style>
.card.transition {
    color: gray;
    background-color: white;
    border-style: dashed;
}
</style>