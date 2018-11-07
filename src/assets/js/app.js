import Vue from 'vue';
import App from './App.vue';

onload = function() {
  var app = new Vue({
    el: '#app',
    render: h => h(App)
  })
}
  