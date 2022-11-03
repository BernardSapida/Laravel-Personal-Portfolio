import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css';

import VueSweetalert2 from 'vue-sweetalert2';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';
import VueAxios from 'vue-axios';

import AOS from 'aos';
import 'aos/dist/aos.css';

window.Vue = Vue;

Vue.use(AOS);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);

library.add(
    fas,
    fab
);

Vue.component('icon', FontAwesomeIcon);

const router = new VueRouter({
    mode: "history",
    routes,
});

Vue.prototype.$appEvents = new Vue();

new Vue({
    created() { 
        AOS.init(); 
    },
    router,
}).$mount("#app");