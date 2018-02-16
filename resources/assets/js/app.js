require('./bootstrap');
window.Vue = require('vue');


// Importación de componentes
import App from './view/App.vue';


// Plugins
import EventBus from './plugins/event-bus'
Vue.use(EventBus)


const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
});