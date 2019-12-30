import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/dealing"
  },
  {
    path: '/dealing',
    name: 'dealing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dealing.vue'),
    redirect:"/dealing/add",
    children:[
      {
        path: 'add',
        name: 'add',
        component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
      },
      {
        path: 'family',
        name: 'family',
        component: () => import(/* webpackChunkName: "about" */ '../views/Family.vue')
      }
    ]
  },
  {
    path: '/find',
    name: 'find',
    component: () => import(/* webpackChunkName: "about" */ '../views/Find.vue'),
    children:[
      {
        path: 'add',
        name: 'add',
        component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
      },
      {
        path: 'family',
        name: 'family',
        component: () => import(/* webpackChunkName: "about" */ '../views/Family.vue')
      }
    ]
  },
  {
    path: '/dealed',
    name: 'dealed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dealed.vue'),
    children:[
      {
        path: 'add',
        name: 'add',
        component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
      },
      {
        path: 'family',
        name: 'family',
        component: () => import(/* webpackChunkName: "about" */ '../views/Family.vue')
      }
    ]
  },
  {
    path:"/detail",
    name:"detail",
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
