import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: "Home",
        component: () =>
            import ("../views/home/Home.vue")
    }, {
        path: '/sort',
        name: 'Sort',
        component: () =>
            import ("../views/sort/Sort.vue")
    }, {
        path: '/shopcart',
        name: 'Shopcart',
        component: () =>
            import ("../views/shopcart/Shopcart.vue")
    }, {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ("../views/profile/Profile.vue")
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router