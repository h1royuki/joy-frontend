<template>
    <div class="infinity-scroll" v-if="isLoading">
        <b-icon-arrow-repeat class="icon"/>
    </div>
</template>

<script>
    import {BIconArrowRepeat} from 'bootstrap-icons-vue';

    export default {
        name: "InfinityScroll",
        components: {
            BIconArrowRepeat
        },
        props: {
            isLoading: Boolean,
            handler: Function,
            offset: Number
        },

        methods: {
            handleScroll() {
                const current = window.innerHeight + window.scrollY;
                const offset = document.body.offsetHeight / 100 * (this.offset ? this.offset : 0);
                const isNeedToStart = current >= document.body.offsetHeight - offset;

                if (isNeedToStart && !this.isLoading) {
                    this.handler();
                }
            }
        },
        created() {
            console.log(process.env);
            window.addEventListener('scroll', this.handleScroll)
            this.handler();
        }
    }
</script>

<style scoped lang="scss">
    .infinity-scroll {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        width: 100%;
        align-items: center;

        .icon {
            font-size: 50px;
            animation: rotate 2s infinite;

            @keyframes rotate {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        }
    }
</style>
