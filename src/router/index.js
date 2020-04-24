import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Shops from '../components/Shop'
import Items from '../components/Item'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Update from '../components/UpdateItems'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/items',
      name: 'Items',
      component: Items,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/shops',
      name: 'Shops',
      component: Shops,
      meta: {
        requiresAuth: true
      }
    },
      {
        path: '/update',
        name: 'Update',
        component: Update,
        meta: {
          requiresAuth: true
        }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('comics')
  else next()
})

export default router
