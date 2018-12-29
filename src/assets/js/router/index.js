import Vue from "vue";
import Router from "vue-router";
import Exercise from "../components/Exercise";
import ExerciseList from "../components/ExerciseList";
import NavBarBack from "../components/NavBarBack";
import NavBarHamburger from "../components/NavBarHamburger";
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
      components: {
        content: WorkoutLogList,
        navBar: NavBarHamburger
      }
    },
    {
      path: "/log",
      components: {
        content: WorkoutLogList,
        navBar: NavBarHamburger
      }
    },
    {
      path: "/log/:id",
      components: {
        content: WorkoutLog,
        navBar: NavBarBack
      },
      props: {
        content: true,
        navBar: false
      }
    },
    {
      path: "/exercises",
      components: {
        content: ExerciseList,
        navBar: NavBarHamburger
      }
    },
    {
      path: "/exercises/:id",
      components: {
        content: Exercise,
        navBar: NavBarBack
      },
      props: {
        content: true,
        navBar: false
      }
    },
    {
      path: "/workouts",
      components: {
        content: WorkoutList,
        navBar: NavBarHamburger
      }
    },
    {
      path: "/workouts/:id",
      components: {
        content: Workout,
        navBar: NavBarBack
      },
      props: {
        content: true,
        navBar: false
      }
    },
    {
      path: "/version",
      components: {
        content: Version,
        navBar: NavBarHamburger
      }
    }
  ]
});
