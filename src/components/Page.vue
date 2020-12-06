<template>
    <post :post="post" v-for="(post, index) in posts" :key="index" />
</template>

<script>
    import Post from './Post/Post.vue'

    export default {
        name: "Page",
        props: {
            posts: {
                required: true,
                type: Object
            }
        },
        components: {
            Post
        }
    }
</script>

<style scoped>

</style>
