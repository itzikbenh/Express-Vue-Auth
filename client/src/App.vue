<template>
    <div id="app">
        <div class="logging-out absolute h-full w-full pin z-20" v-if="$store.state.auth.loggingOut">
            <div class="shadow max-w-sm mx-auto text-center p-6 mt-16 bg-white relative">
                <h1 class="saving">
                    Logging out
                    <span>.</span><span>.</span><span>.</span>
                </h1>
            </div>
        </div>
        <router-view :key="$route.fullPath" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'app',
    components: {
        HelloWorld,
    },
};
</script>

<style>
#app {
    margin-top: 70px;
}

.router-link-active {
    color: #dae1e7 !important;
}

.logging-out {
    background: rgba(255, 255, 255, 0.8);
}

@keyframes blink {
    0% {
        opacity: 0.2;
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 0.2;
    }
}

.logging-out span {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
}

.logging-out span:nth-child(2) {
    animation-delay: 0.2s;
}

.logging-out span:nth-child(3) {
    animation-delay: 0.4s;
}
</style>

<style lang="scss" src="./app.scss"></style>