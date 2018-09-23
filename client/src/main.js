import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './state/store';

window.axios = axios;
window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['CSRF-Token'] = document.cookie.replace(
    /(?:(?:^|.*;\s*)X-CSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,
    '$1',
);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

//withCredentials: true,
