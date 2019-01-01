<template>
  <div id="contentWrapper" class="flex-container">
    <header>
      <NavBar :title="title" hamburger>
        <template slot="right">
          <button @click="addNewWorkoutLog()">＋</button>
        </template>
      </NavBar>
    </header>
    <div id="mainWrapper" class="flex-container">
      <main class="flex-container">
        <WorkoutLogListItem
          v-for="workoutLog in workoutLogs"
          :key="workoutLog.id"
          :workout-log="workoutLog"
        ></WorkoutLogListItem>
        <div v-if="Object.keys(workoutLogs).length === 0">
          No Log entries yet!
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import WorkoutLogListItem from "./WorkoutLogListItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("workoutLogs");

export default {
  name: "WorkoutLogList",
  components: {
    WorkoutLogListItem,
    NavBar
  },
  data: function() {
    return {
      title: "Log"
    };
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
