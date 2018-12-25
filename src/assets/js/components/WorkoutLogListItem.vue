<template>
  <div class="card">
    <router-link :to="'/log/' + workoutLog.id">
      <h2>{{ workout.name }}</h2>
    </router-link>
    {{ prettyDate(workoutLog.date) }}
    <button @click="removeWorkoutLogHandler(workoutLog)">x</button>
  </div>
</template>

<script>
import { prettyDate } from "../mixins/prettyDate";
import { mapActions, mapGetters } from "vuex";

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
    },
    ...mapGetters("exerciseLogs", ["getExerciseLogsByWorkoutLogId"]),
    exerciseLogs() {
      return this.getExerciseLogsByWorkoutLogId(this.workoutLog.id);
    }
  },
  methods: {
    ...mapActions("exerciseLogs", ["removeExerciseLog"]),
    ...mapActions("workoutLogs", ["removeWorkoutLog"]),
    removeWorkoutLogHandler: function(workoutLog) {
      this.exerciseLogs.forEach(function(exerciseLog) {
        this.removeExerciseLog(exerciseLog);
      }, this);
      this.removeWorkoutLog(workoutLog);
    }
  }
};
</script>
