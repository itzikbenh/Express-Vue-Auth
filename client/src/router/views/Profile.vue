<template>
    <Layout>
        <div>
            <h1 class="text-center">Hello {{user.name}}</h1>
        </div>
    </Layout>
</template>

<script>
import Layout from '../layouts/Main';

export default {
    components: { Layout },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
};
</script>
