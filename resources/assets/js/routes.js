import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/home'),
    },
];

export default new VueRouter({
    routes,
    linkActiveClass: 'active',
});
