<template>
    <router-link :to="'/workouts/' + workout.id">
        <div class="card">
            <h2>{{ workout.name }}</h2>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['workout']
}
</script>