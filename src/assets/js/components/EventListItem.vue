<template>
    <div>
        <div
            class="card"
            v-if="event.type === 'exercise'">
            <h2>{{ exercise.name }}</h2>
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
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'eventListItem',
    props: ['event'],
    computed: {
        ...mapGetters('exercises', ['getExerciseById']),
        exercise () {
            return this.getExerciseById(this.event.exerciseType)
        }
    },
    methods: {
        ...mapActions('events', ['removeEvent']),
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