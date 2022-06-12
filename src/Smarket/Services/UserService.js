import axios from "axios";
import {authHeader} from '../../Helpers/authHeader';
import jwt_decode from "jwt-decode";
import {CatalogService} from "./CatalogService";

export const userService = {
    validateToken,
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

async function validateToken(token) {
    let loginResult = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/token`, {token})
    return await setLogin(loginResult)
}

async function login(userEmail, password) {
    let loginResult = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/login`, {email: userEmail, password})
    return await setLogin(loginResult)
}

async function setLogin(loginResult){
    if (loginResult.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(loginResult.data));
        let decoded = jwt_decode(loginResult.data.accessToken);
        let catalogs = await CatalogService.getCatalogsByUser(decoded.userId);
        loginResult.data.catalogs = catalogs;
        if (catalogs.length) {
            loginResult.data.currentCatalog = catalogs[0].id
        } else {
            window.console.log('no catalog was found!')
        }
        localStorage.setItem('user', JSON.stringify(loginResult.data));
    }
    return loginResult.data;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`${process.env.VUE_APP_API_BASE_URL}/users/register`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${process.env.VUE_APP_API_BASE_URL}/users`, requestOptions).then(handleResponse);
}


function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${process.env.VUE_APP_API_BASE_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`${process.env.VUE_APP_API_BASE_URL}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${process.env.VUE_APP_API_BASE_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
