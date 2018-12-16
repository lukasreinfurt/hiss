<template>
  <div class="container">
    <h1>Exercises</h1>
    <div class="flex-container">
      <WorkoutExerciseListItem
        v-for="exercise in exercises"
        :key="exercise.id"
        :exercise="exercise"
      />
    </div>
  </div>
</template>

<script>
import WorkoutExerciseListItem from "./WorkoutExerciseListItem";

export default {
  name: "WorkoutExerciseList",
  components: {
    WorkoutExerciseListItem
  },
  props: {
    exercises: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>
