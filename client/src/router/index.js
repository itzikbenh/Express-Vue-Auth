import Vue from 'vue';
import routes from './routes';
import VueRouter from 'vue-router';
import store from '../state/store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach(async (routeTo, routeFrom, next) => {
    const authRequired = routeTo.matched.some(route => route.meta.authRequired);

    if (!authRequired) return next();

    await store.dispatch('auth/setUser');

    if (store.getters['auth/loggedIn']) {
        return next();
    }

    next({ name: 'login' });
});

export default router;
