import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/mess"
  },
  {
    path: '/mess',
    name: 'mess',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mess.vue')
  }, 
  {
    path: '/people',
    name: 'people',
    component: () => import(/* webpackChunkName: "about" */ '../views/People.vue')
  },
  {
    path: '/entry',
    name: 'entry',
    component: () => import(/* webpackChunkName: "about" */ '../views/Entry.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
