import axios from 'axios';
import router from '../../router';

export const state = {
    currentUser: null,
    settingUser: true,
    loggingOut: false,
};

export const mutations = {
    setUser(state, user) {
        state.currentUser = user;
    },
    settingUser(state, bool) {
        state.settingUser = bool;
    },
    loggingOut(state, bool) {
        state.loggingOut = bool;
    },
};

export const getters = {
    loggedIn(state) {
        return !!state.currentUser;
    },
};

export const actions = {
    async init({ commit, dispatch }) {
        axios.defaults.withCredentials = true;
        commit('settingUser', true);
        await dispatch('setUser');
        commit('settingUser', false);
    },

    async setUser({ commit }) {
        try {
            const { data: user } = await axios.get('http://localhost:3000/user');
            commit('setUser', user);
        } catch (error) {
            commit('setUser', null);
        }
    },

    async logOut({ commit }) {
        try {
            commit('loggingOut', true);
            await axios.post('http://localhost:3000/logout');
            router.replace({ name: 'login' });
            commit('setUser', null);
        } catch (error) {}
        commit('loggingOut', false);
    },
};
