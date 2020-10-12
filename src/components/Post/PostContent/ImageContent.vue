<template>
    <img class="image" :src="generateMediaLink(link)" alt="">
</template>

<script>
    import {API_URL} from "../../../env";

    export default {
        name: "ImageContent",
        props: {
            link: {
                required: true,
                type: String
            }
        },
        methods: {
            generateMediaLink(link) {
                return link ? link.replace(/img\d{0,2}\.joyreactor\.[a-z]*/, API_URL) : '#';
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
</style>
