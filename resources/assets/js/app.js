window.Vue = require('vue');

import axios from 'axios'
import routes from './router'
import VueRouter from 'vue-router'
import Api from './services/api'
import Request from './services/request'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

Vue.component('font-awesome-icon', FontAwesomeIcon)


// Importación de componentes
import App from './view/App.vue';


// Plugins
import EventBus from './plugins/event-bus'

Vue.use(EventBus)
Vue.use(VueRouter)


window.axios = axios
window.Api = Api
window.Request = Request

const router = new VueRouter({
    routes,
    mode: 'history'
})

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});