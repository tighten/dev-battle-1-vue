require('./bootstrap');

import router from './routes';

const app = new Vue({
    el: '#app',

    router,
});
