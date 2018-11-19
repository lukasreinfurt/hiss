<template>
    <router-link :to="'/log/' + workoutLog.id">
        <div class="card">
            <h2>Workout</h2>
            {{ prettyDate(workoutLog.date) }}
        </div>
    </router-link>
</template>

<script>
import { prettyDate } from '../mixins/prettyDate'

export default {
    props: ['workoutLog'],
    mixins: [prettyDate]
}
</script>
