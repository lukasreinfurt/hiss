<template>
    <div class="container">
        <h1>Events ({{ count }})</h1>
        <ul>
            <li>
                <EventListItem
                    v-for        = "event in events"
                    v-bind:key   = "event.id"
                    v-bind:event = "event"
                >
                </EventListItem>
            </li>
        </ul>
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
    computed: {
        ...mapState(['events']),
        ...mapGetters(['count'])
    },
    methods: {
        ...mapActions(['addEvent'])
    },
}
</script>