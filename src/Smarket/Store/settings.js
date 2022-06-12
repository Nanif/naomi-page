import {CatalogService} from "../Services/CatalogService";

const state = {
    // catalogDetails: {},
    contactDetails: {},
    branding:
        {
            logo: {image: ''},
            banner: {image: ''},
            popup: {
                image: '',
                autoOpen: false,
                btnText: 'אודותינו'
            }
        },
    integration: {
        website: '',
        type: '',
        syncData: 'none',
        lastUpdated: '',
        lastUpdatedBy: ''
    },
    settings: {
        minimalPublish: false
    }
};

const actions = {
    // async getCatalogDetails({commit}) {
    //     let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
    //     let catalofDetails = await CatalogService.getCatalogDetails(currentCatalogId)
    //     commit('getCatalogDetails', catalofDetails);
    // },

    async getContactDetails({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let contactDetails = await CatalogService.getContactDetails(currentCatalogId)
        commit('getContactDetails', contactDetails);
    },

    async updateContactDetails({commit}, contactDetails) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await CatalogService.updateContactDetails(currentCatalogId, contactDetails)
        commit('updateContactDetails', contactDetails);
    },

    async getBranding({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let branding = await CatalogService.getBranding(currentCatalogId)
        commit('getBranding', branding);
    },

    async uploadBrandingFile({commit}, brandingFile) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let result = await CatalogService.uploadBrandingFile(currentCatalogId, brandingFile);
        commit('updateBrandingFile', {brandingFile: result, type: brandingFile.type})
    },

    async updatePopup({commit}, {autoOpenPopup, popupBtnText}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await CatalogService.updatePopup(currentCatalogId, {autoOpenPopup, popupBtnText});
        commit('updatePopup', {autoOpenPopup, popupBtnText})
    },

    async updateColors({commit}, {mainColor, secondColor}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await CatalogService.updateColors(currentCatalogId, {mainColor, secondColor});
        commit('updateColors', {mainColor, secondColor})
    },

    async getClearing({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let clearing = await CatalogService.getClearing(currentCatalogId);
        commit('setClearing', clearing)
    },

    async setClearing({commit}, {type, userName, password, project, clearingOnlineLink}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await CatalogService.setClearing(currentCatalogId, type, userName, password, project, clearingOnlineLink);
        commit('setClearing', {type, userName, password, project})
    },

    async deleteClearingSetting({commit},) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await CatalogService.deleteClearing(currentCatalogId);
        commit('deleteClearing')
    },

    async getIntegrationData({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let integrationData = await CatalogService.getIntegrationData(currentCatalogId);
        commit('getIntegrationData', integrationData)
    },

    async setSyncData({commit}, {syncData}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await CatalogService.setSyncData(currentCatalogId, syncData);
        commit('syncData', syncData)
    },

    async getCatalogSettings({commit}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        let settings = await CatalogService.getCatalogSettings(currentCatalogId);
        commit('settings', settings)
    },

    async setMinimalPublish({commit}, {minimalPublish}) {
        let currentCatalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
        await CatalogService.setMinimalPublish(currentCatalogId,minimalPublish );
        commit('minimalPublish', minimalPublish)
    },


};

const mutations = {
    // getCatalogDetails(state, catalogDetails) {
    //     state.catalogDetails = catalogDetails;
    // },
    getContactDetails(state, contactDetails) {
        state.contactDetails = contactDetails;
    },
    updateContactDetails(state, contactDetails) {
        state.contactDetails = contactDetails;
    },
    getBranding(state, branding) {
        state.branding = {
            logo: {image: branding.logo},
            banner: {image: branding.headerStripImage},
            popup: {
                image: branding.aboutPopupImage,
                autoOpen: branding.aboutPopupOpen,
                btnText: branding.aboutPopupBtnText
            },
            mainColor:branding.mainColor,
            secondColor:branding.secondColor
        }
    },
    updateBrandingFile(state, {brandingFile, type}) {
        // state.branding[brandingFile.type].image = `data:image/png;base64,${brandingFile.file.buffer.toString('base64')}`;
        window.console.log('branding', brandingFile)
        state.branding[type].image = brandingFile;
    },
    updatePopup(state, {autoOpenPopup, popupBtnText}) {
        state.branding['popup'].autoOpen = autoOpenPopup
        state.branding['popup'].btnText = popupBtnText
    },
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
    },
    syncData(state, syncData) {
        state.integration.syncData = syncData || 'none';
    },
    settings(state, settings) {
        state.settings = settings;
    },
    minimalPublish(state, minimalPublish) {
        state.settings.minimalPublish = minimalPublish;
    }
};

export const settings = {
    namespaced: true,
    state,
    actions,
    mutations
};
