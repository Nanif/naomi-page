import {CategoriesService} from "../Services/CategoriesService";

const getDefaultState = () => {
    return {
        externalCategories: [],
        categories:[]
    }
}

const state = getDefaultState()

const actions = {
    resetState ({ commit }) {
        commit('resetState')
    },
    async getExternalCategories({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let externalCategories = await CategoriesService.getExternalCategories(currentCatalogId)
        commit('getExternalCategories', externalCategories);
    },

    async getCategories({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let categories = await CategoriesService.getCategories(currentCatalogId)
        commit('getCategories', categories);
    },

    async addCategory({commit}, categoryId){
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let category = await CategoriesService.addCategory(currentCatalogId, categoryId)
        commit('addCategory', category);
    },

    async deleteCategory({commit}, categoryId){
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await CategoriesService.deleteCategory(currentCatalogId, categoryId)
        commit('deleteCategory', categoryId);
    }
};

const mutations = {
    resetState (state) {
        Object.assign(state, getDefaultState())
    },
    getExternalCategories(state, externalCategories) {
        state.externalCategories = externalCategories;
    },
    getCategories(state, categories) {
        state.categories = categories;
    },
    addCategory(state, category){
        state.categories.push(category)
    },
    deleteCategory(state, categoryId){
        state.categories.find(c=>c.id == categoryId)
    }
};

export const categories = {
    namespaced: true,
    state,
    actions,
    mutations
};
