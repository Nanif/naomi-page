<template>
    <div class="app-sidebar sidebar-shadow" @mouseover="toggleSidebarHover('add','closed-sidebar-open')"
         @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <div class="logo-src">
            </div>
            <div class="header__pane mr-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                        v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
        </div>

    </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import {mapState} from "vuex";

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: [
                    {
                        href: '/homepage',
                        icon: 'pe-7s-home',
                        title: 'דף הבית'
                    },
                    {
                        header: true,
                        title: 'קטלוג חכם',
                    },
                    {
                        title: 'קטלוג',
                        icon: 'pe-7s-rocket',
                        child: [
                            {
                                href: '/catalog/categories',
                                title: 'קטגוריות',
                            },
                            {
                                href: '/catalog/products',
                                title: 'מוצרים',
                            },
                            {
                                href: '/catalog/orders',
                                title: 'הזמנות',
                            },
                            {
                                href: '/catalog/shippings',
                                title: 'משלוחים',
                            },
                        ]
                    },
                    {
                        title: 'מיתוג',
                        icon: 'pe-7s-medal',
                        child: [
                            {
                                href: '/branding/design',
                                title: 'עיצוב',
                            },
                            {
                                href: '/branding/contact',
                                title: 'פרטי קשר',
                            },
                        ]
                    },
                    {
                        title: 'הגדרות',
                        icon: 'pe-7s-config',
                        child: [
                            {
                                href: '/settings/integration',
                                title: 'חיבור לאתר',
                            },
                            {
                                href: '/settings/clearing',
                                title: 'סליקה',
                            },
                            {
                                href: '/settings/general',
                                title: 'כללי',
                            },
                        ]
                    },
                    {
                        header: true,
                        title: 'משיבון חכם'
                    },
                    {
                        href: '/meshivon/messages',
                        icon: 'pe-7s-paper-plane',
                        title: 'הודעות',
                    },
                    {
                        href: '/meshivon/downloads',
                        icon: 'pe-7s-cloud-download',
                        title: 'הורדות',
                    },
                    {
                      href: '/meshivon/settings',
                      icon: 'pe-7s-config',
                      title: 'הגדרות',
                    },
                ],
                collapsed: false,

                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,
        },
        computed: {
            ...mapState('account', ['user']),
        },
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            if (this.user.role == "admin") {
                this.menu.push(
                    {
                        header: true,
                        title: 'תפריט מנהל',
                    },
                    {
                        href: '/admin/users',
                        title: 'משתמשים',
                        icon: 'pe-7s-users',
                        // child: [
                        //     {
                        //         href: '/admin/users',
                        //         title: 'משתמשים',
                        //     },
                        // ]
                    },)
            }
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>
