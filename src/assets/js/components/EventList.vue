<template>
    <div class="flex-container">
        <h1>Events</h1>
        <div class="flex-container">
            <EventListItem
                v-for        = "event in events"
                v-bind:key   = "event.id"
                v-bind:event = "event"
            >
            </EventListItem>
        </div>
        <button v-on:click="addEvent({ id: Date.now(), type:'test', duration: 60 })">+</button>
    </div>
</template>

<script>
import EventListItem               from './EventListItem'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('events')

export default {
    name: 'eventList',
    components: {
        EventListItem,
    },
    props: ['events'],
    computed: {
        ...mapState({defaultEvents: 'events'}),
        selectedEvents() {
            return this.events ? this.events : this.defaultEvents
        }
    },
    methods: {
        ...mapActions(['addEvent'])
    },
}
</script>