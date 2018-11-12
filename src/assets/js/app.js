import Vue   from 'vue'
import App   from './components/App'
import store from './store/'

onload = function() {

  var app = new Vue({
    el: '#app',
    store,
    render: h => h(App)
  })

}
  