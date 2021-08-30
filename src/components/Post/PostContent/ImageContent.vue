<template>
    <img v-show="!isLoading" class="image" :src="generateMediaLink(link)" @load="loaded">
    <div v-show="isLoading" class="image-loading">
        <b-icon-image class="icon"/>
    </div>
</template>

<script>
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
                return link ? link : '#';
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
        min-height: 250px;
        justify-content: center;
        align-items: center;
        text-align: center;

        .icon {
            font-size: 70px;
        }
    }
</style>
