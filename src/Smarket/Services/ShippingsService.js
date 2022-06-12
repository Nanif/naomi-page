import axios from "axios";
import {authConfig} from "../../Helpers/authHeader";

export const ShippingsService = {
    getShippings,
    reloadShippings
};

async function getShippings(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/shippings`, authConfig())
    return result.data;
}

async function reloadShippings(catalogId) {
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/shippings`,null, authConfig())
    return result.data;
}






