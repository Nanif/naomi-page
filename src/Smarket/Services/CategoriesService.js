import axios from "axios";
import {authConfig} from "../../Helpers/authHeader";

export const CategoriesService = {
    getExternalCategories,
    getCategories,
    addCategory,
    deleteCategory,
};

async function getExternalCategories(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/categories/external`, authConfig())
    return result.data;
}

async function getCategories(catalogId) {
    let result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/categories`, authConfig())
    return result.data;
}

async function addCategory(catalogId, categoryId) {
    let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/categories`, {categoryId}, authConfig())
    return result.data;
}

async function deleteCategory(catalogId, categoryId) {
    window.console.log('deleteCategory')
    let result = await axios.delete(`${process.env.VUE_APP_API_BASE_URL}/mng/catalogs/${catalogId}/categories/${categoryId}`, authConfig())
    return result.data;
}

// async function getCategories(catalogId) {
//     let data = {
//         email: storeEmail,
//         address: storeStreet,
//         town: storeCity,
//         phone: storePhone,
//         phone2: storePhone2,
//         whatsApp: storeWhatsApp,
//         website: storeSite
//     }
//     let result = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/mng/contact?catalogId=${catalogId}`, data, authConfig())
//     return result.data;
// }






