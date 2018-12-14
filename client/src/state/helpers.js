import { mapState, mapGetters, mapActions } from 'vuex';

export const authComputed = {
    ...mapState('auth', {
        currentUser: state => state.currentUser
    }),
    ...mapGetters('auth', ['loggedIn', 'loggingOut'])
};

export const authMethods = mapActions('auth', ['logOut', 'logOutAll']);
