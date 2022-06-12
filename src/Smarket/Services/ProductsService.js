import axios from "axios";
import {authConfig} from "../../Helpers/authHeader";

export const ProductsService = {
    getProducts,
    reloadProducts
};

async function getProducts(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/products`, authConfig())
    return result.data;
}

async function reloadProducts(catalogId) {
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/products`,null, authConfig())
    return result.data;
}






