<template>
    <img v-show="!isLoading" class="image" :src="generateMediaLink(link)" @load="loaded">
    <div v-show="isLoading" class="image-loading">
        <b-icon-image class="icon"/>
    </div>
</template>

<script>
    import {API_URL} from "../../../env";
    import {BIconImage} from 'bootstrap-icons-vue';

    export default {
        name: "ImageContent",
        components: {
            BIconImage
        },
        props: {
            link: {
                required: true,
                type: String
            }
        },
        data() {
            return {
                isLoading: true
            }
        },
        methods: {
            generateMediaLink(link) {
                return link ? link.replace(/img\d{0,2}\.joyreactor\.[a-z]*/, API_URL) : '#';
            },
            loaded() {
                this.isLoading = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .image {
        width: calc(100% + 20px);
        padding: 0;
        margin-left: -10px;
    }

    .image-loading {
        display: flex;
        width: calc(100% + 20px);
        min-height: 200px;
        justify-content: center;
        align-items: center;
        text-align: center;

        .icon {
            display: inline;
            font-size: 50px;
            animation: loading 1300ms infinite;

            @keyframes loading {
                0% {
                    opacity: 100%;
                }
                50% {
                    opacity: 50%;
                }
                100% {
                    opacity: 100%
                }
            }
        }
    }
</style>
