<template>
    <div class="container">
        <h1>Template ({{ count }})</h1>
        <div class="flex-container">
            <TemplateListItem
                v-for           = "template in templates"
                v-bind:key      = "template.id"
                v-bind:template = "template"
            >
            </TemplateListItem>
        </div>
    </div>
</template>

<script>
import TemplateListItem            from './TemplateListItem'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapGetters } = createNamespacedHelpers('templates')

export default {
    name: 'templateList',
    components: {
        TemplateListItem,
    },
    computed: {
        ...mapState(['templates']),
        ...mapGetters(['count'])
    },
}
</script>