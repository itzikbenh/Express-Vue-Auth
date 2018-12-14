<template>
    <div>
        <div class="navbar flex items-center w-full bg-blue-dark shadow-md fixed pin-t z-10">
            <nav class="pl-2 w-full flex items-center shadow-md">
                <div class="w-1/2 self-center">
                    <router-link to="/">
                        <h2 class="text-white uppercase">Auth</h2>
                    </router-link>
                </div>
                <div class="w-1/2 text-sm clearfix flex justify-end mr-4">
                    <template v-if="loggedIn || loggingOut">
                        <router-link
                            class="text-white hover:text-grey-light uppercase px-6"
                            to="/profile"
                        >Profile</router-link>
                        <a
                            class="justify-center text-white hover:text-grey-light uppercase"
                            href="/logout"
                            @click.prevent="logOut()"
                        >
                            <span>Log out</span>
                        </a>
                    </template>
                    <template v-else>
                        <router-link
                            class="text-white hover:text-grey-light uppercase px-6"
                            to="/login"
                        >Sign in</router-link>

                        <router-link
                            class="text-white hover:text-grey-light uppercase"
                            to="/register"
                        >Sign up</router-link>
                    </template>
                </div>
            </nav>
        </div>
    </div>
</template>


<script>
import { authComputed, authMethods } from '../state/helpers';

export default {
    methods: {
        ...authMethods
    },
    computed: {
        ...authComputed
    }
};
</script>


<style scoped>
nav {
    height: 50px;
}
</style>