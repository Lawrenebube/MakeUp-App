import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../views/login.vue'
import HomePage from '../views/HomePage'

const routes = [
  {
    path: '/',
    name: '/',
    component: HomePage
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
  path: '/loginPage',
    name: 'loginPage',
    component: loginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
