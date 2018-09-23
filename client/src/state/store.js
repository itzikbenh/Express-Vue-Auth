import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

//console.log(modules);

Vue.use(Vuex);

const store = new Vuex.Store({
    modules,
});

//Automatically run the `init` action for every module,
//if one exists.
for (const moduleName of Object.keys(modules)) {
    if (modules[moduleName].actions && modules[moduleName].actions.init) {
        store.dispatch(`${moduleName}/init`);
    }
}

export default store;
