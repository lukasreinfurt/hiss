<template>
  <div>
    <h2>{{ workout.name }}</h2>
    {{ prettyDate(workoutLog.date) }}
    <ExerciseLogList :exercise-logs="exerciseLogs" />
  </div>
</template>

<script>
import ExerciseLogList from "./ExerciseLogList";
import { prettyDate } from "../mixins/prettyDate";
import { mapGetters } from "vuex";

export default {
  name: "WorkoutLog",
  components: {
    ExerciseLogList
  },
  mixins: [prettyDate],
  props: {
    id: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  computed: {
    ...mapGetters("exerciseLogs", ["getExerciseLogsByWorkoutLogId"]),
    workout() {
      return this.$store.state.workouts.workouts[this.workoutLog.workoutType];
    },
    workoutLog() {
      return this.$store.state.workoutLogs.workoutLogs[this.id];
    },
    exerciseLogs() {
      return this.getExerciseLogsByWorkoutLogId(this.id);
    }
  }
};
</script>
