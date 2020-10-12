<template>
    <a class="link" :href="link"><slot></slot></a>
</template>

<script>
    export default {
        name: "LinkContent",
        props: {
            link: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .link {
        text-decoration: underline;
        font-size: 16px;
        word-wrap: break-word;
    }
</style>
