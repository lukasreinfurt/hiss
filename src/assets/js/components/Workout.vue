<template>
    <div>
        <h2>{{ workout.name }}</h2>
        <ExerciseList
            v-bind:exercises = exercises>
        </ExerciseList>
    </div>
</template>

<script>
import ExerciseList   from './ExerciseList'
import { mapGetters } from 'vuex'

export default {
    props: ['id'],
    components: {
        ExerciseList,
    },
    computed: {
        ...mapGetters('workouts', ['getWorkoutById']),
        ...mapGetters('exercises', ['getExerciseById']),
        workout () {
            return this.getWorkoutById(this.id)
        },
        exercises () {
            var results = []
            this.workout.exercises.forEach(function(exercise) {
                results.push(this.getExerciseById(exercise))
            }, this)
            return results
        }
    },
}
</script>