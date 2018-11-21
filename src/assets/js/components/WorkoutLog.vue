<template>
    <div>
        <h2>{{ workout.name }}</h2>
        {{ prettyDate(workoutLog.date) }}
        <ExerciseLogList
            v-bind:exercise-logs = exerciseLogs>
        </ExerciseLogList>
    </div>
</template>

<script>
import ExerciseLogList from './ExerciseLogList'
import { prettyDate }  from '../mixins/prettyDate'
import { mapGetters }  from 'vuex'

export default {
    props: ['id'],
    mixins: [prettyDate],
    components: {
        ExerciseLogList,
    },
    computed: {
        ...mapGetters('workouts', ['getWorkoutById']),
        ...mapGetters('workoutLogs', ['getWorkoutLogById']),
        ...mapGetters('exerciseLogs', ['getExerciseLogsByWorkoutId']),
        workout () {
            return this.getWorkoutById(this.workoutLog.workoutType)
        },
        workoutLog () {
            return this.getWorkoutLogById(this.id)
        },
        exerciseLogs () {
            return this.getExerciseLogsByWorkoutId(this.id)
        }
    },
}
</script>