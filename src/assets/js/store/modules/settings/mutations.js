export default {
	toggleMenuActive(state) {
		state.menuActive = !state.menuActive;
	},

	updateTheme(state, payload) {
		state.theme = payload.value;
	}
};
