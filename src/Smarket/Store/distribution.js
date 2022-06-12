import {DistributionService} from "../Services/DistributionService";

const state = {
    meshivon: {
        activate: false,
        storeCode: '',
        replyTo: '',
        messages: [],
    },

    downloadUrl: '',
    downloads:[]
};

const actions = {
    async getMeshivon({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let meshivon = await DistributionService.getMeshivon(currentCatalogId);
        commit('getMeshivon', meshivon)
    },

    async setMeshivon({commit}, {storeCode, replyTo}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await DistributionService.setMeshivon(currentCatalogId, storeCode, replyTo);
        commit('setMeshivon', {storeCode, replyTo})
    },

    async getMeshivonMessages({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let messages = await DistributionService.getMeshivonMessages(currentCatalogId);
        commit('meshivonMessages', messages)
    },

    async getDownloads({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let downloads = await DistributionService.getDownloads(currentCatalogId)
        commit('downloads', downloads);
    },

    async getDownloadUrl({commit}){
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let downloadUrl = await DistributionService.getDownloadUrl(currentCatalogId);
        commit('downloadUrl', downloadUrl);
    }
};

const mutations = {
    getMeshivon(state, meshivon) {
        state.meshivon.activate = !!meshivon.id;
        state.meshivon.storeCode = meshivon.storeCode;
        state.meshivon.replyTo = meshivon.replyToEmail;
    },
    setMeshivon(state, meshivon) {
        state.meshivon.activate = true;
        state.meshivon.storeCode = meshivon.storeCode;
        state.meshivon.replyTo = meshivon.replyToEmail;
    },
    meshivonMessages(state, messages) {
        state.meshivon.messages = messages;
    },
    downloads(state, downloads) {
        state.downloads = downloads;
    },
    downloadUrl(state, downloadUrl){
        state.downloadUrl = downloadUrl.link;
    }
};

export const distribution = {
    namespaced: true,
    state,
    actions,
    mutations
};
