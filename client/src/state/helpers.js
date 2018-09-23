import { mapState, mapGetters, mapActions } from 'vuex';

export const authComputed = {
    ...mapState('auth', {
        currentUser: state => state.currentUser,
        settingUser: state => state.settingUser,
    }),
    ...mapGetters('auth', ['loggedIn']),
};

export const authMethods = mapActions('auth', ['logOut']);
