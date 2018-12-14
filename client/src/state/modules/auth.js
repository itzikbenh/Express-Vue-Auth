import router from '../../router';
import Vue from 'vue';

export const state = {
    currentUser: {},
    loggingOut: false,
    initialized: false
};

export const mutations = {
    setUser(state, user) {
        state.currentUser = user;
    },
    loggingOut(state, bool) {
        state.loggingOut = bool;
    },
    initialize(state) {
        state.initialized = true;
    }
};

export const getters = {
    loggedIn(state) {
        return Object.keys(state.currentUser).length;
    },
    loggingOut(state) {
        return state.loggingOut;
    },
    initialized(state) {
        return state.initialized;
    }
};

export const actions = {
    async setUser({ commit }) {
        try {
            const { data: user } = await Vue.prototype.$axios.get('/user');
            commit('setUser', user);
        } catch (error) {
            commit('setUser', {});
        }
    },

    async logOut({ commit }) {
        try {
            commit('loggingOut', true);
            await Vue.prototype.$axios.post('/logout');
            router.push({ name: 'login' });
            commit('setUser', {});
            setTimeout(() => {
                commit('loggingOut', false);
                Vue.prototype.$notify.open('You have successfully logged out.');
            }, 1000);
        } catch (error) {
            commit('loggingOut', false);
        }
    },

    async logOutAll({ commit }) {
        try {
            commit('loggingOut', true);
            await Vue.prototype.$axios.post('/logout/all');
            router.push({ name: 'login' });
            commit('setUser', {});
            setTimeout(() => {
                commit('loggingOut', false);
                Vue.prototype.$notify.open(
                    'You have successfully logged out from all devices.'
                );
            }, 1000);
        } catch (error) {
            commit('loggingOut', false);
        }
    }
};
