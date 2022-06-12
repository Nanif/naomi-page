import {CatalogService} from "../Services/CatalogService";


const state = {
    catalog: [],
    // currentCatalog: localStorage.getItem('user') ? localStorage.getItem('user').currentCatalog : '',
    catalogDetails: {},
};

const actions = {
    async getCatalogDetails({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let catalofDetails = await CatalogService.getCatalogDetails(currentCatalogId)
        commit('getCatalogDetails', catalofDetails);
    },
};

const mutations = {
    getCatalogDetails(state, catalogDetails) {
        state.catalogDetails = catalogDetails;
    },
};

export const catalog = {
    namespaced: true,
    state,
    actions,
    mutations
};
