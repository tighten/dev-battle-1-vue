require('./bootstrap');

import router from './routes';
import ApiClient from './api/api-client.js';

window.store = new Vue({
    mixins: [ ApiClient ],

    data () {
        return {
            tweets: [],
            username: clash.username,
        }
    },

    methods: {
        add (resource, data) {
            this[resource].push(data);
        },
        delete(resource, element) {
            var element_id = this[resource].indexOf(element);

            if (element_id > -1) {
                this[resource].splice(element_id, 1);
            }
        },
        load(resource, endpoint) {
            return this.get(endpoint).then((response) => {
                this[resource] = response;
            });
        },
    }
});

window.app = new Vue({
    el: '#app',

    router,
});
