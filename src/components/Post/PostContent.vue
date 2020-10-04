<template>
    <img class="image" v-if="element._type === 'image' || element._type === 'video'" :src="generateMediaLink(element._data)" alt="">
    <p class="text" v-else-if="element._type === 'p'">{{element._data}}</p>
    <h3 class="h3" v-else-if="element._type === 'h3'">{{element._data}}</h3>
    <a class="link" v-else-if="element._type === 'a'" :href="element._link">{{element._data}}</a>
    <iframe class="iframe" v-else-if="element._type === 'iframe'" :src="element._data"></iframe>
</template>

<script>
    import {API_URL} from "../../env";

    export default {
        name: "PostContent",
        props: {
            element: Object
        },

        methods: {
            generateMediaLink(link) {
                return link.replace(/img\d{0,2}\.joyreactor\.[a-z]*/, API_URL)
            }
        }
    }
</script>

<style scoped lang="scss">
    .content {
        .image, .video {
            max-width: 100%;
            width: 100%;
        }

        .link {
            text-decoration: underline;
            overflow:hidden;
            width: 90%;
            display: inline-block;
            text-overflow:ellipsis;
            white-space:nowrap;
        }

        .iframe {
            min-height: 325px;
        }

        .h3 {
            font-size: 18px;
        }

        .text, .link {
            font-size: 15px;
        }

        .h3, .text, .link {
            padding: 0 10px;
        }

        .iframe {
            width: 100%;
            border: 0;
            height: 100%;
        }
    }
</style>
