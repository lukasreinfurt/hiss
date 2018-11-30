<template>
  <div class="container">
    <h1>Log</h1>
    <div class="flex-container">
      <WorkoutLogListItem
        v-for="workoutLog in workoutLogs"
        :key="workoutLog.id"
        :workout-log="workoutLog"
      />
    </div>
  </div>
</template>

<script>
import WorkoutLogListItem from "./WorkoutLogListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("workoutLogs");

export default {
  components: {
    WorkoutLogListItem
  },
  computed: {
    ...mapState(["workoutLogs"])
  }
};
</script>
