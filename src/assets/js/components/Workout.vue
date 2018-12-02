<template>
  <div>
    <h2><input v-model="workout.name" placeholder="Workout Name" /></h2>
    <ExerciseList :exercises="exercises" />
  </div>
</template>

<script>
import ExerciseList from "./ExerciseList";
import { mapGetters } from "vuex";

export default {
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
    ...mapGetters("workouts", ["getWorkoutById"]),
    ...mapGetters("exercises", ["getExerciseById"]),
    workout() {
      return this.getWorkoutById(this.id);
    },
    exercises() {
      var results = [];
      this.workout.exercises.forEach(function(exercise) {
        results.push(this.getExerciseById(exercise));
      }, this);
      return results;
    }
  }
};
</script>
