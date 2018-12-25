import Vue from "vue";
import Router from "vue-router";
import Exercise from "../components/Exercise";
import ExerciseList from "../components/ExerciseList";
import WorkoutList from "../components/WorkoutList";
import Workout from "../components/Workout";
import WorkoutLogList from "../components/WorkoutLogList";
import WorkoutLog from "../components/WorkoutLog";
import Version from "../components/Version";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: WorkoutLogList
    },
    {
      path: "/log",
      component: WorkoutLogList
    },
    {
      path: "/log/:id",
      component: WorkoutLog,
      props: true
    },
    {
      path: "/exercises",
      component: ExerciseList
    },
    {
      path: "/exercises/:id",
      component: Exercise,
      props: true
    },
    {
      path: "/workouts",
      component: WorkoutList
    },
    {
      path: "/workouts/:id",
      component: Workout,
      props: true
    },
    {
      path: "/version",
      component: Version
    }
  ]
});
