import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
   {
        path: '/',
        name: 'mainComponent',
        component: () => import('../components/MainComponent')
    } ,    {
        path: '/createPost',
        name: 'create',
        component: () => import('../components/newsComponent/Post')
    }/*,
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('../components/Edit')
    }*/
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
