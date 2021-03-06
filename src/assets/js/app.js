import Vue from "vue";
import App from "./components/App";
import router from "./router/";
import store from "./store/";

onload = function() {
	new Vue({
		router,
		store,
		render: createEle => createEle(App)
	}).$mount("#app-container");
};
