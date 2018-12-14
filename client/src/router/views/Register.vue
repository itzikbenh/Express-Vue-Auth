<template>
    <Layout>
        <div class="w-full max-w-xs mt-6 mb-0 mx-auto">
            <form class="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4" @submit.prevent="submit">
                <p class="text-center font-bold uppercase mb-6">Create your account</p>
                <div class="form-item" :class="{'has-error': form.errors.has('name') }">
                    <input class="input" type="text" placeholder="Full name" v-model="form.name">
                    <p
                        class="text-red text-xs italic"
                        v-if="form.errors.has('name')"
                        v-text="form.errors.get('name')"
                    ></p>
                </div>
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
                <div
                    class="form-item"
                    :class="{'has-error': form.errors.has('password_confirmation') }"
                >
                    <input
                        class="input"
                        type="password"
                        placeholder="Confirm password"
                        v-model="form.password_confirmation"
                    >
                    <p
                        class="text-red text-xs italic"
                        v-if="form.errors.has('password_confirmation')"
                        v-text="form.errors.get('password_confirmation')"
                    ></p>
                </div>
                <button
                    class="button button-primary uppercase w-full"
                    type="submit"
                    :class="{'is-loading': form.isSubmitting}"
                    :disabled="form.isSubmitting"
                >Sign Up</button>
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
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            })
        };
    },
    methods: {
        async submit() {
            try {
                const res = await this.form.post('/register');
                this.$notify.open('You have been registered successfully.');
                this.$router.push({ name: 'profile' });
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

