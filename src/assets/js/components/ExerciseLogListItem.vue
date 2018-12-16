<template>
  <div>
    <div v-if="exerciseLog.type === 'exercise'" class="card">
      <h2>{{ exercise.name }}</h2>
      Repetitions: {{ exerciseLog.repetitions }} Weight:
      {{ exerciseLog.weight }} Duration: {{ exerciseLog.duration }}
      <button @click="removeExerciseLog(exerciseLog)">x</button>
    </div>
    <div v-else-if="exerciseLog.type === 'transition'" class="card transition">
      Transition for {{ exerciseLog.duration }} seconds.
    </div>
    <div v-else>Something went wrong {{ exerciseLog.type === "exercise" }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ExerciseLogListItem",
  props: {
    exerciseLog: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    exercise() {
      return this.$store.state.exercises.exercises[
        this.exerciseLog.exerciseType
      ];
    }
  },
  methods: {
    ...mapActions("exerciseLogs", ["removeExerciseLog"])
  }
};
</script>

<style>
.card.transition {
  color: gray;
  background-color: white;
  border-style: dashed;
}
</style>
