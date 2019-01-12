<template>
  <div>
    <div v-if="exerciseLog.type === 'exercise'" class="card">
      <select v-model="type">
        <option
          v-for="availableExercise in availableExercises"
          :key="availableExercise.id"
          :value="availableExercise.id"
        >
          {{ availableExercise.name }}
        </option>
      </select>
      <div id="inputs" class="flex-container horizontal wrap">
        <div class="flex-container">
          <label>Repetitions</label>
          <div class="inputWrapper">
            <input
              v-model.number="repetitions"
              type="number"
              min="0"
              max="99"
              placeholder="0"
            />
          </div>
        </div>
        <div class="flex-container">
          <label>Weight</label>
          <div class="inputWrapper">
            <input
              v-model.number="weight"
              type="number"
              step="0.5"
              min="0"
              max="999"
              placeholder="0"
            />
            <span class="unit">kg</span>
          </div>
        </div>
        <div class="flex-container">
          <label>Duration</label>
          <div class="inputWrapper">
            <input
              v-model.number="duration"
              type="number"
              min="0"
              max="999"
              placeholder="0"
            />
            <span class="unit">s</span>
          </div>
        </div>
      </div>
      <button @click="$emit('remove', exerciseLog)">✕</button>
    </div>
    <div v-else-if="exerciseLog.type === 'transition'" class="card transition">
      Transition for <input v-model.number="duration" type="number" /> seconds.
    </div>
    <div v-else>Something went wrong {{ exerciseLog.type === "exercise" }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

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
    },
    ...mapState("exercises", { availableExercises: "exercises" }),
    type: {
      get() {
        return this.exerciseLog.exerciseType;
      },
      set(value) {
        this.$store.commit("exerciseLogs/updateType", {
          id: this.exerciseLog.id,
          value: value
        });
      }
    },
    repetitions: {
      get() {
        return this.exerciseLog.repetitions;
      },
      set(value) {
        this.$store.commit("exerciseLogs/updateRepetitions", {
          id: this.exerciseLog.id,
          value: value
        });
      }
    },
    weight: {
      get() {
        return this.exerciseLog.weight;
      },
      set(value) {
        this.$store.commit("exerciseLogs/updateWeight", {
          id: this.exerciseLog.id,
          value: value
        });
      }
    },
    duration: {
      get() {
        return this.exerciseLog.duration;
      },
      set(value) {
        this.$store.commit("exerciseLogs/updateDuration", {
          id: this.exerciseLog.id,
          value: value
        });
      }
    }
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
