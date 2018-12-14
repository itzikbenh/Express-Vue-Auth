import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules
});

window.axios = axios.create();
window.axios.interceptors.request.use(config => {
    config.headers.common['CSRF-Token'] = document.cookie.replace(
        /(?:(?:^|.*;\s*)X-CSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
    );
    return config;
});

window.axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            //We only want to cover cases where user is logged in on the client,
            //but not the server.
            if (store.getters['auth/loggedIn']) {
                store.commit('auth/setUser', {});
                router.push({ name: 'login' });
                return;
            }
        }
        return Promise.reject(error);
    }
);

Vue.use({
    install(Vue) {
        Vue.prototype.$axios = window.axios;
    }
});

//Automatically run the `init` action for every module,
//if one exists.
for (const moduleName of Object.keys(modules)) {
    if (modules[moduleName].actions && modules[moduleName].actions.init) {
        store.dispatch(`${moduleName}/init`);
    }
}

export default store;
