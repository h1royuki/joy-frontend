<template>
    <headr :text="'JoyMobile'" />

    <div v-for="(page, index) in pages" v-bind:key="index" class="page">
        <div v-for="(post, index) in page._posts" :key="index">
            <post :post="post"></post>
        </div>
    </div>
    <infinity-scroll :isLoading="isLoading" :handler="loadPosts" :offset="5"></infinity-scroll>
</template>

<script>

    import Post from '../components/Post.vue'
    import api from '../modules/api.js'
    import InfinityScroll from "../components/InfinityScroll";
    import Headr from "../components/Headr";

    export default {
        name: 'Home',
        components: {
            Headr,
            Post,
            InfinityScroll
        },
        data() {
            return {
                pages: [],
                nextPage: null,
                isLoading: false
            }
        },
        watch: {
            $route() {
                this.pagex = [];
                this.loadPosts();
            },
        },
        methods: {
            loadPosts() {
                this.isLoading = true;
                const nextPage = this.nextPage ? this.nextPage : 0;

                api.get('/page/' + nextPage).then(res => {
                    this.pages.push(res.data);
                    this.nextPage = res.data._nextPage;

                    this.isLoading = false;
                }).catch(e => {
                    console.log(e);
                    this.isLoading = false;
                })
            },
        },
    }
</script>

<style scoped lang="scss">
</style>
