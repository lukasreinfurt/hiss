<template>
    <div>
        <h2>Workout {{ id }}</h2>
        {{ prettyDate(workout.date) }}
        <WorkoutEventList
            v-bind:events = events>
        </WorkoutEventList>
    </div>
</template>

<script>
import WorkoutEventList from './WorkoutEventList'
import { prettyDate }   from '../mixins/prettyDate'
import { mapGetters }   from 'vuex'

export default {
    name: 'workout',
    props: ['id'],
    mixins: [prettyDate],
    components: {
        WorkoutEventList,
    },
    computed: {
        ...mapGetters('workouts', ['getWorkoutById']),
        ...mapGetters('events', ['getEventsByWorkoutId']),
        workout () {
            return this.getWorkoutById(this.id)
        },
        events () {
            return this.getEventsByWorkoutId(this.id)
        }
    },
}
</script>