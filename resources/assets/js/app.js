window.Vue = require('vue');

import axios from 'axios'
import router from './router'
import Api from './services/api'
import Request from './services/request'
//import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
// Importación de componentes
import App from './view/App.vue';


// Plugins
import EventBus from './plugins/event-bus'
Vue.use(EventBus)


window.axios = axios
window.Api = Api
window.Request = Request

const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});