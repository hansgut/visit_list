import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// setting up default vue http modules for api calls
Vue.prototype.$http = axios;
// load token from localStorage
const token = localStorage.getItem("token");

if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
