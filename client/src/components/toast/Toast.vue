<template>
    <transition
        :enter-active-class="transition.enter"
        :leave-active-class="transition.leave">
        <div class="toast border-l-4 text-white p-4 m-2"
             v-show="isActive" :class="[type, position]"
             @click="close">
            <div v-html="message"></div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'is-success',
        },
        message: String,
        duration: Number,
        position: {
            type: String,
            default: 'is-top-right',
            validator(value) {
                return (
                    ['is-top-right', 'is-top', 'is-top-left', 'is-bottom-right', 'is-bottom', 'is-bottom-left'].indexOf(
                        value,
                    ) > -1
                );
            },
        },
    },
    data() {
        return {
            isActive: false,
            parentTop: null,
            parentBottom: null,
            newDuration: this.duration || 2000,
        };
    },
    computed: {
        correctParent() {
            switch (this.position) {
                case 'is-top-right':
                case 'is-top':
                case 'is-top-left':
                    return this.parentTop;
                case 'is-bottom-right':
                case 'is-bottom':
                case 'is-bottom-left':
                    return this.parentBottom;
            }
        },
        transition() {
            switch (this.position) {
                case 'is-top-right':
                case 'is-top':
                case 'is-top-left':
                    return {
                        enter: 'fadeInDown',
                        leave: 'fadeOut',
                    };
                case 'is-bottom-right':
                case 'is-bottom':
                case 'is-bottom-left':
                    return {
                        enter: 'fadeInUp',
                        leave: 'fadeOut',
                    };
            }
        },
    },
    methods: {
        removeElement(el) {
            if (typeof el.remove !== 'undefined') {
                el.remove();
            } else {
                el.parentNode.removeChild(el);
            }
        },
        close() {
            clearTimeout(this.timer);
            this.isActive = false;
            // Timeout for the animation complete before destroying
            setTimeout(() => {
                this.$destroy();
                this.removeElement(this.$el);
            }, 150);
        },
        showNotice() {
            this.correctParent.insertAdjacentElement('afterbegin', this.$el);
            this.isActive = true;
            this.timer = setTimeout(() => this.close(), this.newDuration);
        },
        setupContainer() {
            this.parentTop = document.querySelector('.notices.is-top');
            this.parentBottom = document.querySelector('.notices.is-bottom');
            if (this.parentTop && this.parentBottom) return;
            if (!this.parentTop) {
                this.parentTop = document.createElement('div');
                this.parentTop.className = `notices is-top`;
            }
            if (!this.parentBottom) {
                this.parentBottom = document.createElement('div');
                this.parentBottom.className = 'notices is-bottom';
            }
            const container = document.body;
            container.appendChild(this.parentTop);
            container.appendChild(this.parentBottom);
        },
    },
    beforeMount() {
        this.setupContainer();
    },
    mounted() {
        this.showNotice();
    },
};
</script>