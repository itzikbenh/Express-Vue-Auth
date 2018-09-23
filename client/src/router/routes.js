import store from '../state/store';
import Register from './views/Register';
import Login from './views/Login';
import Profile from './views/Profile';
import Home from './views/Home';
import RequestResetLink from './views/RequestResetLink';
import ResetPassword from './views/ResetPassword';

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            authRequired: true,
        },
        props: route => ({ user: store.state.auth.currentUser }),
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            guestRequired: true,
        },
        beforeEnter(routeTo, routeFrom, next) {
            if (store.getters['auth/loggedIn']) {
                next({ name: 'home' });
            } else {
                next();
            }
        },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            guestRequired: true,
        },
        beforeEnter(routeTo, routeFrom, next) {
            if (store.getters['auth/loggedIn']) {
                next({ name: 'home' });
            } else {
                next();
            }
        },
    },
    {
        path: '/password/reset',
        name: 'requestResetLink',
        component: RequestResetLink,
    },
    {
        path: '/password/reset/:token',
        name: 'resetPassword',
        component: ResetPassword,
    },
];
