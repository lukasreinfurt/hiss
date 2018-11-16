export default {

    count (state) {
        return state.templates.length
    },
    
    getTemplateById: (state) => (id) => {
        return state.templates.find(template => template.id === id)
    }
}