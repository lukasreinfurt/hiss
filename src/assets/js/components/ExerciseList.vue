<template>
    <div class="container">
        <h1>Exercises</h1>
        <div
            v-if = "exercises"
            class="flex-container">
            <ExerciseListItem
                v-for           = "exercise in exercises"
                v-bind:key      = "exercise.id"
                v-bind:exercise = "exercise"
            >
            </ExerciseListItem>
        </div>
        <div v-else>
            <div
                class      = "flex-container"
                v-for      = "(exercises, equipment) in exercisesByEquipment"
                v-bind:key = "equipment"
            >
                <h3>{{ equipment }}</h3>
                <ExerciseListItem
                    v-for           = "exercise in exercises"
                    v-bind:key      = "exercise.id"
                    v-bind:exercise = "exercise"
                >
                </ExerciseListItem>
            </div>
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
        exercisesByEquipment() {
            let result = {}
            this.defaultExercises.forEach(function(exercise) {
                if (!result[exercise.equipment]) {
                    result[exercise.equipment] = []
                }
                result[exercise.equipment].push(exercise)
            })
            return result
        },
    },
}
</script>