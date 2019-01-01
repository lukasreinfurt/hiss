<template>
  <div class="container">
    <h1>Exercises</h1>
    <select v-model="selected">
      <option
        v-for="availableExercise in availableExercises"
        :key="availableExercise.id"
        :value="availableExercise.id"
      >
        {{ availableExercise.name }}
      </option>
    </select>
    <button @click="addNewExercise()">+</button>
    <div class="flex-container">
      <WorkoutExerciseListItem
        v-for="(exercise, index) in exercises"
        :key="index"
        :index="index"
        :exercise="exercise"
        :workout-id="id"
      ></WorkoutExerciseListItem>
    </div>
  </div>
</template>

<script>
import WorkoutExerciseListItem from "./WorkoutExerciseListItem";
import { mapState, mapActions } from "vuex";

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
    },
    id: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  data: function() {
    return {
      selected: ""
    };
  },
  computed: {
    ...mapState("exercises", { availableExercises: "exercises" })
  },
  methods: {
    ...mapActions("workouts", ["addExercise"]),
    addNewExercise: function() {
      if (this.selected) {
        this.addExercise({ id: this.id, exercise: this.selected });
      }
    }
  }
};
</script>
