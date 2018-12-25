<template>
  <div>
    <h2>
      <select v-model="workoutType" @change="workoutChange">
        <option
          v-for="availableWorkout in availableWorkouts"
          :key="availableWorkout.id"
          :value="availableWorkout.id"
        >
          {{ availableWorkout.name }}
        </option>
      </select>
    </h2>
    {{ prettyDate(workoutLog.date) }}
    <ExerciseLogList :exercise-logs="exerciseLogs" :workout-log="workoutLog" />
  </div>
</template>

<script>
import ExerciseLogList from "./ExerciseLogList";
import { prettyDate } from "../mixins/prettyDate";
import { mapGetters, mapState } from "vuex";

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
    workoutType: {
      get() {
        return this.$store.state.workoutLogs.workoutLogs[this.id].workoutType;
      },
      set(value) {
        this.$store.commit("workoutLogs/updateWorkoutType", {
          id: this.id,
          value: value
        });
      }
    },
    ...mapState("workouts", { availableWorkouts: "workouts" }),
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
  },
  methods: {
    workoutChange: function() {
      // delete exerciseLogs with this.id
      // add exerciseLogs
      console.log(this.availableWorkouts[this.workoutType].exercises);
    }
  }
};
</script>
