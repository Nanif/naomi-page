import Vue from 'vue';
import Vuex from 'vuex';

import {alert} from './alert';
import {account} from './account';
import {users} from './users';
import {catalog} from './catalog';
import {settings} from "./settings";
import {categories} from "./categories";
import {products} from "./products"
import {orders} from "./orders";
import {clearing} from "./clearing";
import {shippings} from "./shippings";
import {distribution} from "./distribution";
import {admin} from "./admin";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        account,
        users,
        catalog,
        settings,
        categories,
        products,
        orders,
        clearing,
        shippings,
        distribution,
        admin
    }
});

