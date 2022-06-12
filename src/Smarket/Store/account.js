import {userService} from '../Services';
import {router} from '../../router';


const user = JSON.parse(localStorage.getItem('user'));
const state = user
    ? {status: {loggedIn: true}, user}
    : {status: {}, user: null};

const actions = {
    async validateToken({commit, dispatch}, token){
        let loginRes = await userService.validateToken(token);
        commit('loginSuccess', loginRes);
        dispatch('catalog/getCatalogDetails', null, {root:true});
        dispatch('distribution/getDownloadUrl', null, {root:true});
        await router.push('/homepage');
    },
    async login({dispatch, commit}, {userEmail, password}) {
        commit('loginRequest', {userEmail});

        try {
            let loginRes = await userService.login(userEmail, password);
            // let decoded = jwt_decode(loginRes.accessToken);
            // let catalogs = await CatalogService.getCatalogsByUser(decoded.userId);
            // loginRes.catalogs = catalogs;
            commit('loginSuccess', loginRes);
            await router.push('/homepage');
        } catch (error) {
            commit('loginFailure', error);
            dispatch('alert/error', error, {root: true});
        }
    },
    logout({commit}) {
        userService.logout();
        commit('logout');
    },
    register({dispatch, commit}, user) {
        commit('registerRequest', user);

        userService.register(user)
            .then(
                user => {
                    commit('registerSuccess', user);
                    router.push('/login');
                    setTimeout(() => {
                        // display success message after route change completes
                        dispatch('alert/success', 'Registration successful', {root: true});
                    })
                },
                error => {
                    commit('registerFailure', error);
                    dispatch('alert/error', error, {root: true});
                }
            );
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = {loggingIn: true};
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = {loggedIn: true};
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state, /*user*/) {
        state.status = {registering: true};
    },
    registerSuccess(state, /*user*/) {
        state.status = {};
    },
    registerFailure(state) {
        state.status = {};
    }
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};
