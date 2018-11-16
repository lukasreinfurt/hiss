export default {

    addTemplate (state, payload) {
        state.templates.push(payload)
    },

    removeTemplate (state, payload) {
        var index = state.template.indexOf(payload)
        if (index > -1) {
            state.templates.splice(index, 1)
        }
    }

}