import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import HomePage from '../views/HomePage'

const routes = [
  {
    path: '/',
    name: 'logIn',
    component: login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
  path: '/HomePage',
    name: 'homePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
