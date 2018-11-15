<template>
    <div class="card">
        <h2>{{ exercise.name }}</h2>
    </div>
</template>

<script>
export default {
    name: 'exerciseListItem',
    props: ['exercise']
}
</script>
