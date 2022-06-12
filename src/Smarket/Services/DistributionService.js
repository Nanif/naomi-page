import axios from "axios";
import {authConfig} from "../../Helpers/authHeader";

export const DistributionService = {
    updateMeshivon,
    updateMeshivonStatus,
    getMeshivon,
    setMeshivon,
    getMeshivonMessages,
    getDownloads,
    getDownloadUrl
};

async function updateMeshivon() {
    let user = JSON.parse(localStorage.getItem('user'))
    let catalogId = user.currentCatalog;
    let catalog = user.catalogs.find(c=>c.id == catalogId)
    let trigger = 'smarket_platform_mng::user=' + user.email
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/answeringMail/catalog?storeId=${catalog.storeId}&trigger=${trigger}`, {}, authConfig())
    return result.data;
}

async function updateMeshivonStatus(jobId) {
    let user = JSON.parse(localStorage.getItem('user'))
    let catalogId = user.currentCatalog;
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/answeringMail/catalog/status/${jobId}`, {}, authConfig())
    window.console.log('result job', result)
    return result.data;
}

async function getMeshivon(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/answeringMail`, authConfig())
    return result.data;
}

async function setMeshivon(catalogId, storeCode, replyTo) {
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/answeringMail`, {
        storeCode,
        replyTo
    }, authConfig())
    return result.data;
}

async function getMeshivonMessages(catalogId){
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/answeringMail/messages`, authConfig())
    return result.data;
}

async function getDownloads(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/downloads`, authConfig())
    return result.data;
}

async function getDownloadUrl(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/link`, authConfig())
    return result.data;
}
