<template>
  <div class="card">
    <h2>{{ exercise.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "ExerciseListItem",
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
