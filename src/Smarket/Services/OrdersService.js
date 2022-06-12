import axios from "axios";
import {authConfig} from "../../Helpers/authHeader";

export const OrdersService = {
    getOrders,
    getStatuses
};

async function getOrders(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/orders`, authConfig())
    return result.data;
}

async function getStatuses(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/orders/statuses`, authConfig())
    return result.data;
}







