<template>
    <router-link :to="'/workouts/' + workout.id">
        <div class="card">
            <h2>Workout</h2>
            {{ prettyDate(workout.date) }}
        </div>
    </router-link>
</template>

<script>
import { prettyDate } from '../mixins/prettyDate'

export default {
    name: 'workoutListItem',
    props: ['workout'],
    mixins: [prettyDate]
}
</script>
