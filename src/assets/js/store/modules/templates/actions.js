export default {

    handler () {},

    addTemplate (context, payload) {
        context.commit('addTemplate', payload)
    },

    removeTemplate(context, payload) {
        context.commit('removeTemplate', payload)
    }
    
}
