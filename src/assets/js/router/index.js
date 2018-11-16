import Vue          from 'vue'
import Router       from 'vue-router'
import ExerciseList from '../components/ExerciseList'
import TemplateList from '../components/TemplateList'
import Template     from '../components/Template'
import WorkoutList  from '../components/WorkoutList'
import Workout      from '../components/Workout'

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
    {
      path: '/exercises',
      component: ExerciseList
    },
    {
      path: '/templates',
      component: TemplateList
    },
    {
      path: '/templates/:id',
      component: Template,
      props: true
    },
  ]
})