<template clas="3242">
    <image-content class="image" v-if="element._type === 'image' || element._type === 'video'"
                   :link="element._data">
    </image-content>

    <link-content class="link" v-else-if="element._type === 'link' && element._link" :link="element._link">
        {{element._data}}
    </link-content>

    <iframe-content class="iframe" v-else-if="element._type === 'iframe'" :link="element._data"></iframe-content>

    <text-content v-else-if="element._tag === 'text'">{{element._data}}</text-content>

    <tag-content v-else :tag="element._tag">
        <post-content v-for="(element, index) in element._childrens"
                      v-bind:key="index"
                      :element="element">
        </post-content>
    </tag-content>
</template>

<script>
    import TextContent from "./PostContent/TextContent";
    import ImageContent from "./PostContent/ImageContent";
    import LinkContent from "./PostContent/LinkContent";
    import IframeContent from "./PostContent/IframeContent";
    import TagContent from "./PostContent/TagContent";

    export default {
        name: "PostContent",
        props: {
            element: Object
        },

        components: {
            IframeContent,
            LinkContent,
            ImageContent,
            TextContent,
            TagContent
        },
    }
</script>

<style scoped lang="scss">
</style>
