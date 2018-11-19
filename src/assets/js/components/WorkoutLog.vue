<template>
    <div>
        <h2>Workout {{ id }}</h2>
        {{ prettyDate(workoutLog.date) }}
        <EventList
            v-bind:events = events>
        </EventList>
    </div>
</template>

<script>
import EventList      from './EventList'
import { prettyDate } from '../mixins/prettyDate'
import { mapGetters } from 'vuex'

export default {
    props: ['id'],
    mixins: [prettyDate],
    components: {
        EventList,
    },
    computed: {
        ...mapGetters('workoutLogs', ['getWorkoutLogById']),
        ...mapGetters('events', ['getEventsByWorkoutId']),
        workoutLog () {
            return this.getWorkoutLogById(this.id)
        },
        events () {
            return this.getEventsByWorkoutId(this.id)
        }
    },
}
</script>