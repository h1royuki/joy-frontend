<template>
    <img class="image" v-if="element._type === 'image' || element._type === 'video'"
         :src="generateMediaLink(element._data)" alt="">
    <a class="link" v-else-if="element._type === 'a' && element._link" :href="element._link">{{element._data}}</a>
    <iframe class="iframe" v-else-if="element._type === 'iframe'" :src="element._data"></iframe>
    <text-content class="text" v-else-if="element._type === 'text'" :tag="element._tag">
        {{element._data}}
    </text-content>
</template>

<script>
    import {API_URL} from "../../env";
    import TextContent from "./PostContent/TextContent";

    export default {
        name: "PostContent",
        props: {
            element: Object
        },

        components: {
            TextContent
        },
        methods: {
            generateMediaLink(link) {
                return link ? link.replace(/img\d{0,2}\.joyreactor\.[a-z]*/, API_URL) : '#';
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
            font-size: 16px;
            padding: 0 10px;
        }

        .iframe {
            min-height: 325px;
            width: 100%;
            border: 0;
            height: 100%;
        }

        .text {
            padding: 0 10px;
        }

    }
</style>
