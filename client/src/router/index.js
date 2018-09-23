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
    const guestRequired = routeTo.matched.some(route => route.meta.guestRequired);

    //If only for guests, we want to wait for setUser before we go next()
    //That way the beforeEnter only runs after we know if user is logged in, or not
    if (!authRequired && !guestRequired) return next();

    await store.dispatch('auth/setUser');

    if (authRequired && !store.getters['auth/loggedIn']) {
        next({ name: 'login' });
    } else {
        next();
    }
});

export default router;
