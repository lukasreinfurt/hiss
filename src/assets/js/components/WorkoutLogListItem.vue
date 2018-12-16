<template>
  <router-link :to="'/log/' + workoutLog.id">
    <div class="card">
      <h2>{{ workout.name }}</h2>
      {{ prettyDate(workoutLog.date) }}
    </div>
  </router-link>
</template>

<script>
import { prettyDate } from "../mixins/prettyDate";

export default {
  name: "WorkoutLogListItem",
  mixins: [prettyDate],
  props: {
    workoutLog: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    workout() {
      return this.$store.state.workouts.workouts[this.workoutLog.workoutType];
    }
  }
};
</script>
