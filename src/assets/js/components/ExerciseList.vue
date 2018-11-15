<template>
    <div class="container">
        <h1>Exercises ({{ count }})</h1>
        <div class="flex-container">
            <ExerciseListItem
                v-for           = "exercise in exercises"
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

const { mapState, mapGetters } = createNamespacedHelpers('exercises')

export default {
    name: 'exerciseList',
    components: {
        ExerciseListItem,
    },
    computed: {
        ...mapState(['exercises']),
        ...mapGetters(['count'])
    },
}
</script>