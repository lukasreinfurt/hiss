<template>
  <div class="card">{{ exercise.name }}</div>
</template>

<script>
export default {
  name: "WorkoutExerciseListItem",
  props: {
    exercise: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
