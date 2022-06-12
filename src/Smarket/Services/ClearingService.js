import axios from "axios";
import {authConfig} from "../../Helpers/authHeader";

export const ClearingService = {
    getClearing,
    setClearing,
    deleteClearing,
};

async function getClearing(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/clearing`, authConfig());
    return result.data;
}

async function setClearing(catalogId, type, userName, password, project, clearingOnlineLink) {
    let data = {
        type, userName, password, project, clearingOnlineLink
    }
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/clearing`, data, authConfig());
    return result.data;
}

async function deleteClearing(catalogId) {

    let result = await axios.delete(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/clearing`, authConfig());
    return result.data;
}
