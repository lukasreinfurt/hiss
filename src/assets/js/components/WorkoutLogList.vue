<template>
  <div class="container">
    <button @click="addNewWorkoutLog()">+</button>
    <div class="flex-container">
      <WorkoutLogListItem
        v-for="workoutLog in workoutLogs"
        :key="workoutLog.id"
        :workout-log="workoutLog"
      />
    </div>
    <div v-if="Object.keys(workoutLogs).length === 0">No Log entries yet!</div>
  </div>
</template>

<script>
import WorkoutLogListItem from "./WorkoutLogListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("workoutLogs");

export default {
  name: "WorkoutLogList",
  components: {
    WorkoutLogListItem
  },
  computed: {
    ...mapState(["workoutLogs"])
  },
  methods: {
    ...mapActions(["addWorkoutLog"]),
    addNewWorkoutLog: function() {
      var router = this.$router;
      this.addWorkoutLog().then(function(id) {
        router.push({ path: "/log/" + id });
      });
    }
  }
};
</script>
