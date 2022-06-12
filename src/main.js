import Vue from 'vue'
import { store } from './Smarket/Store';
import {router}from './router'
import BootstrapVue from "bootstrap-vue"
// import VeeValidate from 'vee-validate';

import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
// Vue.use(VeeValidate);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
