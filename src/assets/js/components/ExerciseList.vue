<template>
  <div class="container">
    <h1>Exercises</h1>
    <button @click="addNewExercise()">+</button>
    <div
      v-for="(exercises, equipment) in exercisesByEquipment"
      :key="equipment"
      class="flex-container"
    >
      <h3 v-if="equipment">{{ equipment }}</h3>
      <h3 v-else>Uncategorized</h3>
      <ExerciseListItem
        v-for="exercise in exercises"
        :key="exercise.id"
        :exercise="exercise"
      />
    </div>
  </div>
</template>

<script>
import ExerciseListItem from "./ExerciseListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("exercises");

export default {
  name: "ExerciseList",
  components: {
    ExerciseListItem
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
  },
  methods: {
    ...mapActions(["addExercise"]),
    addNewExercise: function() {
      var router = this.$router;
      this.addExercise().then(function(id) {
        router.push({ path: "/exercises/" + id });
      });
    }
  }
};
</script>
