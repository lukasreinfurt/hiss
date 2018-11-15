<template>
    <div class="container">
        <h2>Events</h2>
        <div class="flex-container">
            <EventListItem
                v-for        = "event in events"
                v-bind:key   = "event.id"
                v-bind:event = "event"
            >
            </EventListItem>
        </div>
    </div>
</template>

<script>
import EventListItem from './EventListItem'

export default {
    name: 'eventList',
    props: ['events'],
    components: {
        EventListItem,
    },
}
</script>