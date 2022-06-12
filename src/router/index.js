import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const router = new Router({
    scrollBehavior() {
        return window.scrollTo({top: 0, behavior: 'smooth'});
    },
    routes: [

        //auth
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'userpages'},
            component: () => import('../Smarket/auth/login.vue')
        },
        {
            path: '/register',
            name: 'register',
            meta: {layout: 'userpages'},
            component: () => import('../Smarket/auth/register.vue' )
        },

        //smarket

        {
            path: '/homepage',
            name: 'home',
            component: () => import('../Smarket/Homepage.vue'),
        },
        //קטלוג חכם
        {
            path: '/catalog/categories',
            name: 'categories',
            component: () => import('../Smarket/Catalog/Categories.vue'),
        },
        {
            path: '/catalog/products',
            name: 'products',
            component: () => import('../Smarket/Catalog/Products.vue'),
        },
        {
            path: '/catalog/orders',
            name: 'orders',
            component: () => import('../Smarket/Catalog/Orders.vue'),
        },
        {
            path: '/catalog/shippings',
            name: 'shippings',
            component: () => import('../Smarket/Catalog/Shippings.vue'),
        },
        //מיתוג
        {
            path: '/branding/contact',
            name: 'contact',
            component: () => import('../Smarket/Branding/Contact.vue'),
        },
        {
            path: '/branding/design',
            name: 'design',
            component: () => import('../Smarket/Branding/Design.vue'),
        },
        //משיבון
        {
            path: '/meshivon/settings',
            name: 'meshivon',
            component: () => import('../Smarket/Meshivon/Settings.vue'),
        },
        {
            path: '/meshivon/messages',
            name: 'messages',
            component: () => import('../Smarket/Meshivon/Messages.vue'),
        },
        {
            path: '/meshivon/downloads',
            name: 'downloads',
            component: () => import('../Smarket/Meshivon/Downloads.vue'),
        },
        //הגדרות
        {
            path: '/settings/clearing',
            name: 'clearing',
            component: () => import('../Smarket/Settings/Clearing.vue'),
        },
        {
            path: '/settings/integration',
            name: 'integration',
            component: () => import('../Smarket/Settings/Integration.vue'),
        },
        {
            path: '/settings/general',
            name: 'general',
            component: () => import('../Smarket/Settings/General.vue'),
        },
        //מנהל
        {
            path: '/admin/users',
            name: 'users',
            component: () => import('../Smarket/Admin/Users.vue'),
        },

    ]
})

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})
