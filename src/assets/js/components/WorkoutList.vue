<template>
  <div class="container">
    <h1>Workouts</h1>
    <button @click="addNewWorkout()">+</button>
    <div class="flex-container">
      <WorkoutListItem
        v-for="workout in workouts"
        :key="workout.id"
        :workout="workout"
      />
    </div>
    <div v-if="Object.keys(workouts).length === 0">No Workouts yet!</div>
  </div>
</template>

<script>
import WorkoutListItem from "./WorkoutListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(
  "workouts"
);

export default {
  name: "WorkoutList",
  components: {
    WorkoutListItem
  },
  computed: {
    ...mapState(["workouts"]),
    ...mapGetters(["count"])
  },
  methods: {
    ...mapActions(["addWorkout"]),
    addNewWorkout: function() {
      var router = this.$router;
      this.addWorkout().then(function(id) {
        router.push({ path: "/workouts/" + id });
      });
    }
  }
};
</script>
