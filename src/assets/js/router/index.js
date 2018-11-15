import Vue         from 'vue'
import Router      from 'vue-router'
import WorkoutList from '../components/WorkoutList'
import Workout     from '../components/Workout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: WorkoutList
    },
    {
      path: '/workouts',
      component: WorkoutList
    },
    {
      path: '/workouts/:id',
      component: Workout,
      props: true
    },
  ]
})