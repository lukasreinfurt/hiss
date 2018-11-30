<template>
  <div class="card">
    <router-link :to="'/workouts/' + workout.id">
      <h2>{{ workout.name }}</h2>
    </router-link>
    <button @click="removeWorkout(workout)">x</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    workout: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    ...mapActions("workouts", ["removeWorkout"])
  }
};
</script>
