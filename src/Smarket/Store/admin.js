import {AdminService} from "../Services/AdminService";

const state = {
    users:[]
};

const actions = {
    async getUsers({commit}) {
        let users = await AdminService.getUsers()
        commit('users', users);
    },
};

const mutations = {
    users(state, users) {
        state.users = users;
    },
};

export const admin = {
    namespaced: true,
    state,
    actions,
    mutations
};
