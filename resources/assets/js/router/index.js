import Vue from 'vue'
import Router from 'vue-router'

import Login from '../view/pages/Login.vue'
import Dashboard from '../view/components/Dashboard.vue'
import ListUsers from '../view/components/Users/ListUsers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard/',
      name: 'Home',
      component: Dashboard,
      children: [
        {
          path: 'users',
          name: 'List Users',
          component: ListUsers
        },
      ] 
    }    
  ]  
});