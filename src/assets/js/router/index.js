import Vue from "vue";
import Router from "vue-router";
import Exercise from "../components/Exercise";
import ExerciseList from "../components/ExerciseList";
import WorkoutList from "../components/WorkoutList";
import Workout from "../components/Workout";
import WorkoutLogList from "../components/WorkoutLogList";
import WorkoutLog from "../components/WorkoutLog";
import About from "../components/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      components: {
        content: WorkoutLogList
      },
      props: {
        content: false
      }
    },
    {
      path: "/log",
      components: {
        content: WorkoutLogList
      },
      props: {
        content: false
      }
    },
    {
      path: "/log/:id",
      components: {
        content: WorkoutLog
      },
      props: {
        content: true
      }
    },
    {
      path: "/exercises",
      components: {
        content: ExerciseList
      },
      props: {
        content: false
      }
    },
    {
      path: "/exercises/:id",
      components: {
        content: Exercise
      },
      props: {
        content: true
      }
    },
    {
      path: "/workouts",
      components: {
        content: WorkoutList
      },
      props: {
        content: false
      }
    },
    {
      path: "/workouts/:id",
      components: {
        content: Workout
      },
      props: {
        content: true
      }
    },
    {
      path: "/about",
      components: {
        content: About
      },
      props: {
        content: true
      }
    }
  ]
});
