
const state = {
    products: []
};

const actions = {
    async getProducts({commit}) {
        commit('getProducts', products);
    },

    async reloadProducts({commit}) {
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
