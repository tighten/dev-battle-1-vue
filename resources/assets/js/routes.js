import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./home'),
    },
];

export default new VueRouter({
    routes,
    linkActiveClass: 'active',
});
