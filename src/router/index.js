import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const router = new Router({
    scrollBehavior() {
        return window.scrollTo({top: 0, behavior: 'smooth'});
    },
    routes: [

        {
            path: '/hello',
            name: 'hello',
            component: () => import('../components/hello')
        },
        {
            path: '/irox-exercise',
            name: 'irox-exercise',
            component: () => import('../components/irox-exercise')
        },
        {
            path: '/more-projects',
            name: 'more-projects',
            component: () => import('../components/more-projects.vue')
        },
        {
            path: '/my-resume',
            name: 'my-resume',
            component: () => import('../components/my-resume')
        },
    ]
})

