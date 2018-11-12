export default {

    handler () {},

    addEvent (context, payload) {
        context.commit('addEvent', payload)
    },

    removeEvent(context, payload) {
        context.commit('removeEvent', payload)
    }
    
}
