import Vue from 'vue';
import routes from './routes';
import VueRouter from 'vue-router';
import store from '../state/store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach(async (routeTo, routeFrom, next) => {
    if (!store.getters['auth/initialized']) {
        await store.dispatch('auth/setUser');
        store.commit('auth/initialize');
    }

    const authRequired = routeTo.matched.some(({ meta }) => meta.authRequired);
    const guestRequired = routeTo.matched.some(
        ({ meta }) => meta.guestRequired
    );

    if (authRequired && !store.getters['auth/loggedIn']) {
        next({ name: 'login' });
    } else if (guestRequired && store.getters['auth/loggedIn']) {
        next({ name: 'home' });
    } else {
        next();
    }
});

export default router;
