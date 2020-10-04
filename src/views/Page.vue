<template>
    <div class="home">
        <div v-for="(post, index) in posts" :key="index">
            <post :post="post"></post>
        </div>
    </div>
    <infinity-scroll :isLoading="isLoading" :handler="loadPosts" :offset="5"></infinity-scroll>
</template>

<script>
    import Post from '../components/Post.vue'
    import api from '../modules/api.js'
    import InfinityScroll from "../components/InfinityScroll";

    export default {
        name: 'Home',
        components: {
            Post,
            InfinityScroll
        },
        data() {
            return {
                posts: [],
                nextPage: null,
                prevPage: null,
                isLoading: false
            }
        },
        methods: {
            loadPosts() {
                this.isLoading = true;
                const page = this.nextPage ? this.nextPage : 0;

                api.get('/page/' + page).then(res => {
                    this.posts.push(...res.data._posts)
                    this.nextPage = res.data._nextPage;
                    this.prevPage = res.data._prevPage;

                    this.isLoading = false;
                }).catch(e => {
                    console.log(e);
                    this.isLoading = false;
                })
            },
            handleScroll() {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    if(!this.isLoading) {
                        this.loadPosts();
                    }
                }
            }
        },
    }
</script>

<style scoped lang="scss">
</style>
