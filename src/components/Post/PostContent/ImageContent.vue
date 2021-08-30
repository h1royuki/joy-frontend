<template>
    <img
        :width="this.width"
        :height="this.height"
        class="image"
        :src="generateMediaLink(link)" @load="loaded
">
</template>

<script>
    export default {
        name: "ImageContent",
        components: {
        },
        props: {
            link: {
                required: true,
                type: String
            },
          height: {
            required: true,
            type: Number
          },
          width: {
            required: true,
            type: Number
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
        height: auto;
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
