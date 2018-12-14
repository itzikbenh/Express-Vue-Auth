<template>
    <Layout>
        <div class="w-full max-w-xs mt-6 mb-0 mx-auto">
            <form class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4" @submit.prevent="submit">
                <p class="text-center font-bold uppercase mb-6">Welcome back!</p>
                <div class="form-item" :class="{'has-error': form.errors.has('email') }">
                    <input class="input" type="email" placeholder="Email" v-model="form.email">
                    <p
                        class="text-red text-xs italic"
                        v-if="form.errors.has('email')"
                        v-text="form.errors.get('email')"
                    ></p>
                </div>
                <div class="form-item" :class="{'has-error': form.errors.has('password') }">
                    <input
                        class="input"
                        type="password"
                        placeholder="Password"
                        v-model="form.password"
                    >
                    <p
                        class="text-red text-xs italic"
                        v-if="form.errors.has('password')"
                        v-text="form.errors.get('password')"
                    ></p>
                </div>
                <div class="flex items-center justify-between mb-4">
                    <label>
                        <input
                            type="checkbox"
                            :true-value="1"
                            :false-value="0"
                            v-model="form.remember"
                        >
                        <span class="ml-2 text-xs">Remember me</span>
                    </label>
                    <router-link
                        class="inline-block align-baseline font-bold text-xs text-blue hover:text-blue-darker"
                        :to="{name: 'requestResetLink'}"
                    >Forgot your password?</router-link>
                </div>
                <button
                    class="button button-primary uppercase w-full"
                    type="submit"
                    :class="{'is-loading': form.isSubmitting}"
                    :disabled="form.isSubmitting"
                >Sign In</button>
            </form>
        </div>
    </Layout>
</template>

<script>
import Layout from '../layouts/Main';
import Form from '../../form';
export default {
    components: { Layout },
    data() {
        return {
            form: new Form({
                email: '',
                password: '',
                remember: ''
            })
        };
    },
    methods: {
        async submit() {
            try {
                const user = await this.form.post('/login');
                this.$notify.open('Welcome back!');
                this.$store.commit('auth/setUser', user);
                this.$router.push({ name: 'profile' });
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

