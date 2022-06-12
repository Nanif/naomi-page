import Vue from 'vue';
import Vuex from 'vuex';


import {products} from "./products"


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        products,
    }
});

