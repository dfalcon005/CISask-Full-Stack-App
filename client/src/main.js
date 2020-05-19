// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@babel/polyfill'
import App from './views/App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'
import axios from 'axios'
import store from './store/store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// load the token
Vue.prototype.$http = axios;
const token  = localStorage.getItem('token');
// if there is a token, set the token header to that token
if(token){
  Vue.prototype.$http.defaults.headers.common['token'] = token;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
