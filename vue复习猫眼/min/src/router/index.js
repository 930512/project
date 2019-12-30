import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/movie"
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/Movie.vue'),
    redirect:"/movie/willing",
    children:[
      {
        path: '/movie/willing',
        name: 'willing',
        component: () => import(/* webpackChunkName: "about" */ '../views/movie/movie1/Willing.vue')
      },
      {
        path: '/movie/doing',
        name: 'doing',
        component: () => import(/* webpackChunkName: "about" */ '../views/movie/movie1/Doing.vue')
      }
    ]
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import(/* webpackChunkName: "about" */ '../views/cinema/Cinema.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/mine/Mine.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
