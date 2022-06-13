import Vue from 'vue'
import {router}from './router'
import BootstrapVue from "bootstrap-vue"

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';
import SMSComponent from "@/components/irox-exercise/SMSComponent";
import phoneComponent from "@/components/irox-exercise/PhoneComponent";
import EMAILComponent from "@/components/irox-exercise/E-MAILComponent";
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

Vue.component('sms-component', SMSComponent);
Vue.component('phone-component', phoneComponent);
Vue.component('e-mail-component', EMAILComponent);


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
