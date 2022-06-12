import axios from "axios";
import {authConfig} from "../../Helpers/authHeader";

export const CatalogService = {
    getCatalogsByUser,
    getCatalogDetails,
    getContactDetails,
    updateContactDetails,
    getBranding,
    uploadBrandingFile,
    updatePopup,
    updateColors,
    downloadCatalog,
    getIntegrationData,
    setSyncData,
    getCatalogSettings,
    setMinimalPublish
};

async function getCatalogsByUser(userId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs?userId=${userId}`, authConfig())
    return result.data;
}

async function getCatalogDetails(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}`, authConfig())
    return result.data;
}

async function getContactDetails(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/contact`, authConfig())
    return result.data;
}

async function updateContactDetails(catalogId, {storeEmail, storePhone, storePhone2, storeWhatsApp, storeStreet, storeCity, storeSite}) {
    let data = {
        email: storeEmail,
        address: storeStreet,
        town: storeCity,
        phone: storePhone,
        phone2: storePhone2,
        whatsApp: storeWhatsApp,
        website: storeSite
    }
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/contact`, data, authConfig())
    return result.data;
}

async function getBranding(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/branding`, authConfig())
    return result.data;
}

async function uploadBrandingFile(catalogId, {type, file}) {
    let headersConfig = authConfig();
    headersConfig.headers['Content-Type'] = 'multipart/form-data';
    let formData = new FormData()
    formData.append('file', file)
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/branding?type=${type}`, formData, headersConfig)
    window.console.log('result', result)
    return result.data;
}

async function updatePopup(catalogId, {autoOpenPopup, popupBtnText}) {
    let data = {
        autoOpenPopup,
        popupBtnText
    }
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/branding/popup`, data, authConfig())
    return result.data;
}

async function updateColors(catalogId, {mainColor, secondColor}) {
    let data = {
        mainColor,
        secondColor
    }
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/branding/colors`, data, authConfig())
    return result.data;
}

async function downloadCatalog() {
    let catalogId = JSON.parse(localStorage.getItem('user')).currentCatalog;
    // let query = `?publishBySmarket=${publishBySmarket}&minimal=${minimal}`
    let response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/file`, authConfig());
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    let name = `קטלוג חכם-${catalogId}`
    link.setAttribute('download', `${name}.html`); //or any other extension
    document.body.appendChild(link);
    link.click();
    return response
    // let result = await axios.get(`${config.apiUrl}/mng/catalog?catalogId=${catalogId}`);
}

async function getIntegrationData(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/integration`, authConfig());
    return result.data;
}

async function setSyncData(catalogId, syncData) {
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/integration/sync`, {syncData}, authConfig());
    return result.data;
}

async function getCatalogSettings(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/settings`, authConfig());
    return result.data;
}

async function setMinimalPublish(catalogId, minimalPublish) {
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/settings`,{minimalPublish}, authConfig());
    return result.data;
}
