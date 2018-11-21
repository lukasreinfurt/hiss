<template>
    <router-link :to="'/log/' + workoutLog.id">
        <div class="card">
            <h2>{{ workout.name }}</h2>
            {{ prettyDate(workoutLog.date) }}
        </div>
    </router-link>
</template>

<script>
import { prettyDate }              from '../mixins/prettyDate'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('workouts')

export default {
    props: ['workoutLog'],
    mixins: [prettyDate],
    computed: {
        ...mapGetters(['getWorkoutById']),
        workout () {
            return this.getWorkoutById(this.workoutLog.workoutType)
        },
    },
}
</script>
