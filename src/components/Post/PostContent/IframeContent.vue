<template>
    <iframe class="iframe" :src="link"></iframe>
</template>

<script>
    export default {
        name: "IframeContent",
        props: {
            link: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .iframe {
        min-height: 325px;
        border: 0;
        width: calc(100% + 20px);
        padding: 0;
        margin-left: -10px;
    }
</style>
