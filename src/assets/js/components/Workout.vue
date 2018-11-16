<template>
    <div>
        <h2>Workout {{ id }}</h2>
        {{ prettyDate(workout.date) }}
        <EventList
            v-bind:events = events>
        </EventList>
    </div>
</template>

<script>
import EventList from './EventList'
import { prettyDate }   from '../mixins/prettyDate'
import { mapGetters }   from 'vuex'

export default {
    name: 'workout',
    props: ['id'],
    mixins: [prettyDate],
    components: {
        EventList,
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