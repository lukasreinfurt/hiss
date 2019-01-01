<template>
  <div class="flex-container">
    <h1>Exercises</h1>
    <div class="flex-container">
      <ExerciseLogListItem
        v-for="exerciseLog in exerciseLogs"
        :key="exerciseLog.id"
        :exercise-log="exerciseLog"
        @remove="removeExerciseLogHandler"
      ></ExerciseLogListItem>
    </div>
    <button @click="addNewExerciseLog()">＋</button>
  </div>
</template>

<script>
import ExerciseLogListItem from "./ExerciseLogListItem";
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("exerciseLogs");

export default {
  name: "ExerciseLogList",
  components: {
    ExerciseLogListItem
  },
  props: {
    exerciseLogs: {
      type: Array,
      default: function() {
        return [];
      }
    },
    workoutLog: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    ...mapActions(["addExerciseLog", "removeExerciseLog"]),
    addNewExerciseLog: function() {
      if (this.exerciseLogs.length > 0) {
        this.addExerciseLog({
          type: "transition",
          workoutLog: this.workoutLog.id
        });
      }
      this.addExerciseLog({
        type: "exercise",
        workoutLog: this.workoutLog.id
      });
    },
    removeExerciseLogHandler: function(exerciseLog) {
      var index = this.exerciseLogs.indexOf(exerciseLog);
      if (index > -1) {
        this.removeExerciseLog(exerciseLog);
        var next = this.exerciseLogs[index + 1];
        if (next && next.type === "transition") {
          this.removeExerciseLog(next);
        }
        if (index === this.exerciseLogs.length - 1) {
          var previous = this.exerciseLogs[index - 1];
          if (previous && previous.type === "transition") {
            this.removeExerciseLog(previous);
          }
        }
      }
    }
  }
};
</script>
