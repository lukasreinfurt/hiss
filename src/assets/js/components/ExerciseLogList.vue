<template>
  <div class="flex-container">
    <h1>Exercises</h1>
    <div class="flex-container">
      <ExerciseLogListItem
        v-for="exerciseLog in exerciseLogs"
        :key="exerciseLog.id"
        :exercise-log="exerciseLog"
      />
    </div>
    <button @click="addEvent({ id: Date.now(), type: 'test', duration: 60 })">
      +
    </button>
  </div>
</template>

<script>
import ExerciseLogListItem from "./ExerciseLogListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("exerciseLogs");

export default {
  components: {
    ExerciseLogListItem
  },
  props: {
    exerciseLogs: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    ...mapState({ defaultExerciseLogs: "exerciseLogs" }),
    selectedExerciseLogs() {
      return this.exerciseLogs ? this.exerciseLogs : this.defaultExerciseLogs;
    }
  },
  methods: {
    ...mapActions(["addExerciseLog"])
  }
};
</script>
