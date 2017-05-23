import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/tweet-index'),
    },
];

export default new VueRouter({
    routes,
    linkActiveClass: 'active',
});
