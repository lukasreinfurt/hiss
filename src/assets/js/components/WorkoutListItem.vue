<template>
    <div class="card">
        <router-link :to="'/workouts/' + workout.id">
            <h2>{{ workout.name }}</h2>
        </router-link>
        <button v-on:click="removeWorkout(workout)">x</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['workout'],
    methods: {
        ...mapActions('workouts', ['removeWorkout']),
    },
}
</script>