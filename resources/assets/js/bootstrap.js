import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import lodash from 'lodash';

window.Vue = Vue;
Vue.config.productionTip = false;
Vue.use(VueRouter);

window._ = lodash;
window.axios = axios;

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + clash.auth_token,
};

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

try {
    require('bootstrap-sass');
} catch (e) {}
