import Vue            from 'vue'
import Router         from 'vue-router'
import ExerciseList   from '../components/ExerciseList'
import TemplateList   from '../components/TemplateList'
import Template       from '../components/Template'
import WorkoutLogList from '../components/WorkoutLogList'
import WorkoutLog     from '../components/WorkoutLog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: WorkoutLogList
    },
    {
      path: '/log',
      component: WorkoutLogList
    },
    {
      path: '/log/:id',
      component: WorkoutLog,
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