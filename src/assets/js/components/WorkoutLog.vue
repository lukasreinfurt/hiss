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
  components: {
    ExerciseLogList
  },
  mixins: [prettyDate],
  props: {
    id: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters("workouts", ["getWorkoutById"]),
    ...mapGetters("workoutLogs", ["getWorkoutLogById"]),
    ...mapGetters("exerciseLogs", ["getExerciseLogsByWorkoutLogId"]),
    workout() {
      return this.getWorkoutById(this.workoutLog.workoutType);
    },
    workoutLog() {
      return this.getWorkoutLogById(this.id);
    },
    exerciseLogs() {
      return this.getExerciseLogsByWorkoutLogId(this.id);
    }
  }
};
</script>
