<template>
    <Layout>
        <div class="w-full max-w-xs mt-6 mb-0 mx-auto">
            <form class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4" @submit.prevent="submit">
                <p class="text-center font-bold uppercase mb-6">Reset Password</p>
                <div class="form-item" :class="{'has-error': form.errors.has('password') }">
                    <input class="input" type="password" placeholder="Password"
                        v-model="form.password">
                    <p class="text-red text-xs italic"
                    v-if="form.errors.has('password')" v-text="form.errors.get('password')"></p>
                </div>
                <div class="form-item" :class="{'has-error': form.errors.has('password_confirmation') }">
                    <input class="input" type="password" placeholder="Confirm password"
                        v-model="form.password_confirmation">
                    <p class="text-red text-xs italic"
                    v-if="form.errors.has('password_confirmation')" v-text="form.errors.get('password_confirmation')"></p>
                </div>
                <button class="button button-primary uppercase w-full" type="submit"
                        :class="{'is-loading': form.isSubmitting}" :disabled="form.isSubmitting">
                    Reset Password
                </button>
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
                password: '',
                password_confirmation: '',
                token: this.$route.params.token,
            }),
        };
    },
    methods: {
        async submit() {
            try {
                const user = await this.form.post('http://localhost:3000/password/reset');
                this.$router.replace({ name: 'login' });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
