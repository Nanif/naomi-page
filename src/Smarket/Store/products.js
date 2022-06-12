import {ProductsService} from "../Services/ProductsService";

const state = {
    products: []
};

const actions = {
    async getProducts({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let products = await ProductsService.getProducts(currentCatalogId)
        commit('getProducts', products);
    },

    async reloadProducts({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let products = await ProductsService.reloadProducts(currentCatalogId)
        commit('getProducts', products);
    },
};

const mutations = {
    getProducts(state, products) {
        state.products = products;
    }
};

export const products = {
    namespaced: true,
    state,
    actions,
    mutations
};
