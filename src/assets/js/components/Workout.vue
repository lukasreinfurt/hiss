<template>
  <div>
    <h2><input v-model="name" placeholder="Workout Name" /></h2>
    <ExerciseList :exercises="exercises" />
  </div>
</template>

<script>
import ExerciseList from "./ExerciseList";

export default {
  name: "Workout",
  components: {
    ExerciseList
  },
  props: {
    id: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  computed: {
    workout() {
      return this.$store.state.workouts.workouts[this.id];
    },
    name: {
      get() {
        return this.$store.state.workouts.workouts[this.id].name;
      },
      set(value) {
        this.$store.commit("workouts/updateName", {
          id: this.id,
          value: value
        });
      }
    },
    exercises() {
      var results = [];
      this.workout.exercises.forEach(function(exercise) {
        results.push(this.$store.state.exercises.exercises[exercise]);
      }, this);
      return results;
    }
  }
};
</script>
