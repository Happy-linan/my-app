import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/login'},
    { path: '/login', component: Login }
  ]
})

export default router
