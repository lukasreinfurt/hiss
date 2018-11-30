<template>
  <div class="container">
    <h1>Exercises</h1>
    <div v-if="exercises.length > 0" class="flex-container">
      <ExerciseListItem
        v-for="exercise in exercises"
        :key="exercise.id"
        :exercise="exercise"
      />
    </div>
    <div v-else>
      <div
        v-for="(exercises, equipment) in exercisesByEquipment"
        :key="equipment"
        class="flex-container"
      >
        <h3>{{ equipment }}</h3>
        <ExerciseListItem
          v-for="exercise in exercises"
          :key="exercise.id"
          :exercise="exercise"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ExerciseListItem from "./ExerciseListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("exercises");

export default {
  name: "ExerciseList",
  components: {
    ExerciseListItem
  },
  props: {
    exercises: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    ...mapState({ defaultExercises: "exercises" }),
    exercisesByEquipment() {
      let result = {};
      Object.entries(this.defaultExercises).forEach(function([id, exercise]) {
        if (!result[exercise.equipment]) {
          result[exercise.equipment] = [];
        }
        result[exercise.equipment].push(exercise);
      });
      return result;
    }
  }
};
</script>
