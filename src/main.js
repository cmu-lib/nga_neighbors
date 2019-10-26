import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import AsyncComputed from 'vue-async-computed'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(AsyncComputed)

Vue.config.productionTip = false

Vue.prototype.$APIConstants = {
  REST_PAGE_SIZE: 100,
  BOOK_PAGE_SIZE: 25,
  API_LOGIN: "/api/auth/login/?next=/",
  API_LOGOUT: "/api/auth/logout/?next=/",
}

import Home from "./components/Home"
import Work from "./components/Work"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/work/:id", name: "WorkView", component: Work, props: (route) => ({ id: route.params.id }) }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export const HTTP = axios.create({
  baseURL: "http://localhost:8080"
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

