<template>
  <div class="card">
    <router-link :to="'/exercises/' + exercise.id">
      <h2>{{ exercise.name }}</h2>
    </router-link>
    <button @click="removeExercise(exercise)">x</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ExerciseListItem",
  props: {
    exercise: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    ...mapActions("exercises", ["removeExercise"])
  }
};
</script>
