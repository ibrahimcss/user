import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'list',
        component: () => import('../components/ListUser')
    },    {
        path: '/create',
        name: 'create',
        component: () => import('../components/CreateUser')
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../components/Edit')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
