import Vue from 'vue'
import Router from 'vue-router'

import Login from '../view/pages/Login.vue'
import Dashboard from '../view/components/Dashboard.vue'

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
  /*    children: [
        {
          path: 'dash',
          name: 'Dash',
          component: Dashboard
        },
      ] */
    }    
  ]  
});