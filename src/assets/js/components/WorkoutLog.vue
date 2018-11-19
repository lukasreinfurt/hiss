<template>
    <div>
        <h2>Workout {{ id }}</h2>
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
        ...mapGetters('workoutLogs', ['getWorkoutLogById']),
        ...mapGetters('exerciseLogs', ['getExerciseLogsByWorkoutId']),
        workoutLog () {
            return this.getWorkoutLogById(this.id)
        },
        exerciseLogs () {
            return this.getExerciseLogsByWorkoutId(this.id)
        }
    },
}
</script>