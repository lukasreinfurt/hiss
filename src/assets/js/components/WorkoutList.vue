<template>
    <div class="container">
        <h1>Workouts ({{ count }})</h1>
        <div class="flex-container">
            <WorkoutListItem
                v-for          = "workout in workouts"
                v-bind:key     = "workout.id"
                v-bind:workout = "workout"
            >
            </WorkoutListItem>
        </div>
    </div>
</template>

<script>
import WorkoutListItem             from './WorkoutListItem'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapGetters } = createNamespacedHelpers('workouts')

export default {
    name: 'workoutList',
    components: {
        WorkoutListItem,
    },
    computed: {
        ...mapState(['workouts']),
        ...mapGetters(['count'])
    },
}
</script>