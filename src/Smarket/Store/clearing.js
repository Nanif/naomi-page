import {ClearingService} from "../Services/ClearingService";

const state = {
    clearing: {
        type: 'none',
        userName: '',
        password: '',
        project: '000',
        clearingOnlineLink:''
    }
};

const actions = {
    async getClearing({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let clearing = await ClearingService.getClearing(currentCatalogId);
        commit('setClearing', clearing)
    },

    async setClearing({commit}, {type, userName, password, project, clearingOnlineLink}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await ClearingService.setClearing(currentCatalogId, type, userName, password, project, clearingOnlineLink);
        commit('setClearing', {type, userName, password, project})
    },

    async deleteClearingSetting({commit},) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await ClearingService.deleteClearing(currentCatalogId);
        commit('deleteClearing')
    },
};

const mutations = {
    setClearing(state, clearing) {
        state.clearing.type = clearing.type || 'none';
        state.clearing.userName = clearing.userName;
        state.clearing.password = clearing.password;
        state.clearing.project = clearing.project;
        state.clearing.clearingOnlineLink = clearing.clearingOnlineLink;
    },
    deleteClearing(state) {
        state.clearing = {
            type: 'none',
            userName: '',
            password: '',
            project: '000'
        }
    },
    getIntegrationData(state, integrationData) {
        state.integration = integrationData;
        state.integration.syncData = state.integration.syncData || 'none'
    }
};

export const clearing = {
    namespaced: true,
    state,
    actions,
    mutations
};
