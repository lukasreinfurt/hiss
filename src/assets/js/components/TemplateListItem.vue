<template>
    <router-link :to="'/templates/' + template.id">
        <div class="card">
            <h2>{{ template.name }}</h2>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'templateListItem',
    props: ['template']
}
</script>