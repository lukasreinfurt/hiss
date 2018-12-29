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
      },
      props: {
        content: false,
        navBar: { title: "Log" }
      }
    },
    {
      path: "/log",
      components: {
        content: WorkoutLogList,
        navBar: NavBarHamburger
      },
      props: {
        content: false,
        navBar: { title: "Log" }
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
        navBar: { title: "Log" }
      }
    },
    {
      path: "/exercises",
      components: {
        content: ExerciseList,
        navBar: NavBarHamburger
      },
      props: {
        content: false,
        navBar: { title: "Exercises" }
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
        navBar: { title: "Exercise" }
      }
    },
    {
      path: "/workouts",
      components: {
        content: WorkoutList,
        navBar: NavBarHamburger
      },
      props: {
        content: false,
        navBar: { title: "Workouts" }
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
        navBar: { title: "Workout" }
      }
    },
    {
      path: "/version",
      components: {
        content: Version,
        navBar: NavBarHamburger
      },
      props: {
        content: true,
        navBar: { title: "Version" }
      }
    }
  ]
});
