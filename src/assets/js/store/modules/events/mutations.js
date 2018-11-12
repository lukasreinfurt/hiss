export default {

    addEvent (state, payload) {
        state.events.push(payload)
    },

    removeEvent (state, payload) {
        var index = state.events.indexOf(payload)
        if (index > -1) {
            state.events.splice(index, 1)
        }
    }

}