<template>
  <div>
    <div v-if="exerciseLog.type === 'exercise'" class="card">
      <h2>
        <select v-model="type">
          <option
            v-for="availableExercise in availableExercises"
            :key="availableExercise.id"
            :value="availableExercise.id"
          >
            {{ availableExercise.name }}
          </option>
        </select>
      </h2>
      Repetitions:<input v-model.number="repetitions" type="number" /><br />
      Weight:<input v-model.number="weight" type="number" step="0.5" /><br />
      Duration:<input v-model.number="duration" type="number" /><br />
      <button @click="$emit('remove', exerciseLog)">x</button>
    </div>
    <div v-else-if="exerciseLog.type === 'transition'" class="card transition">
      Transition for {{ exerciseLog.duration }} seconds.
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
