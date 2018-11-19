<template>
    <div>
        <h2>{{ template.name }}</h2>
        <ExerciseList
            v-bind:exercises = exercises>
        </ExerciseList>
    </div>
</template>

<script>
import ExerciseList   from './ExerciseList'
import { mapGetters } from 'vuex'

export default {
    name: 'template',
    props: ['id'],
    components: {
        ExerciseList,
    },
    computed: {
        ...mapGetters('templates', ['getTemplateById']),
        ...mapGetters('exercises', ['getExerciseById']),
        template () {
            return this.getTemplateById(this.id)
        },
        exercises () {
            var results = []
            this.template.exercises.forEach(function(exercise) {
                results.push(this.getExerciseById(exercise))
            }, this)
            return results
        }
    },
}
</script>