<template>
    <div>
        <div
            class="card"
            v-if="exerciseLog.type === 'exercise'">
            <h2>{{ exercise.name }}</h2>
            Repetitions: {{ exerciseLog.repetitions }}
            Weight: {{ exerciseLog.weight }}
            Duration: {{ exerciseLog.duration }}
            <button v-on:click="removeExerciseLog(exerciseLog)">x</button>
        </div>
        <div
            class="card transition"
            v-else-if="exerciseLog.type === 'transition'">
            Transition for {{ exerciseLog.duration }} seconds.
        </div>
        <div v-else>
            Something went wrong {{ exerciseLog.type === 'exercise' }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['exerciseLog'],
    computed: {
        ...mapGetters('exercises', ['getExerciseById']),
        exercise () {
            return this.getExerciseById(this.exerciseLog.exerciseType)
        }
    },
    methods: {
        ...mapActions('exerciseLogs', ['removeExerciseLog']),
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