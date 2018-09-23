<template>
    <Layout>
        <div>
            <h1 class="text-center">Hello {{user.name}}</h1>
        </div>
        <div class="mt-16 max-w-lg mx-auto">
            <h3 class="text-center">Logged in devices</h3>
            <button class="button button-red mt-6 uppercase" @click.prevent="logOutAll">Logout all</button>
            <div class="mt-2 bg-white shadow-md">
                <table class="table is-bordered">
                    <tr>
                        <th>IP</th>
                        <th>User agent</th>
                    </tr>
                    <tbody>
                        <tr v-for="(loginToken, index) in user.login_tokens" :key="index">
                            <td>{{loginToken.ip}}</td>
                            <td>{{loginToken.ua}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../layouts/Main';
import { authComputed, authMethods } from '../../state/helpers';

export default {
    components: { Layout },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...authMethods,
    },
};
</script>
