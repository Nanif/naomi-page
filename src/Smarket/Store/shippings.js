import {ShippingsService} from "../Services/ShippingsService";

const state = {
    shippings: []
};

const actions = {
    async getShippings({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let shippings = await ShippingsService.getShippings(currentCatalogId)
        commit('shippings', shippings);
    },

    async reloadShippings({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let shippings = await ShippingsService.reloadShippings(currentCatalogId)
        commit('shippings', shippings);
    },
};

const mutations = {
    shippings(state, shippings) {
        state.shippings = shippings;
    }
};

export const shippings = {
    namespaced: true,
    state,
    actions,
    mutations
};
