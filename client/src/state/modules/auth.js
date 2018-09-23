import axios from 'axios';
import router from '../../router';
import Vue from 'vue';

//So cookies will be sent to cross domains
if (process.env.NODE_ENV === 'development') {
    axios.defaults.withCredentials = true;
}

axios.defaults.headers.common['CSRF-Token'] = document.cookie.replace(
    /(?:(?:^|.*;\s*)X-CSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
    '$1',
);

export const state = {
    currentUser: {},
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
        return Object.keys(state.currentUser).length;
    },
    settingUser(state) {
        return state.settingUser;
    },
};

export const actions = {
    async init({ commit, dispatch }) {
        commit('settingUser', true);
        await dispatch('setUser');
        commit('settingUser', false);
    },

    async setUser({ commit }) {
        try {
            const { data: user } = await axios.get('http://localhost:3000/user');
            commit('setUser', user);
        } catch (error) {
            commit('setUser', {});
        }
    },

    async logOut({ commit }) {
        try {
            commit('loggingOut', true);
            await axios.post('http://localhost:3000/logout');
            router.push({ name: 'login' });
            commit('setUser', {});
            setTimeout(() => {
                commit('loggingOut', false);
                Vue.prototype.$notify.open('You have successfully logged out.');
            }, 2000);
        } catch (error) {
            commit('loggingOut', false);
        }
    },

    async logOutAll({ commit }) {
        try {
            commit('loggingOut', true);
            await axios.post('http://localhost:3000/logout/all');
            router.push({ name: 'login' });
            commit('setUser', {});
            setTimeout(() => {
                commit('loggingOut', false);
                Vue.prototype.$notify.open('You have successfully logged out from all devices.');
            }, 2000);
        } catch (error) {
            commit('loggingOut', false);
        }
    },
};
