<template>
    <div class="container">
        <h1>Exercises</h1>
        <div class="flex-container">
            <ExerciseListItem
                v-for           = "exercise in selectedExercises"
                v-bind:key      = "exercise.id"
                v-bind:exercise = "exercise"
            >
            </ExerciseListItem>
        </div>
    </div>
</template>

<script>
import ExerciseListItem            from './ExerciseListItem'
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('exercises')

export default {
    name: 'exerciseList',
    components: {
        ExerciseListItem,
    },
    props: ['exercises'],
    computed: {
        ...mapState({defaultExercises: 'exercises'}),
        selectedExercises() {
            return this.exercises ? this.exercises : this.defaultExercises
        }
    },
}
</script>