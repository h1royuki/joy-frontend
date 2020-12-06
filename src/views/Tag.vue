<template>
    <headr :text="'Тег: ' + $route.params.tagId" />
    <div v-for="(page, index) in pages" v-bind:key="index" class="page">
        <div v-for="(post, index) in page._posts" :key="index">
            <post :post="post"></post>
        </div>
    </div>
    <infinity-scroll :isLoading="isLoading" :handler="loadPosts" :offset="5"></infinity-scroll>
</template>

<script>
    import Post from '../components/Post/Post.vue'
    import api from '../modules/api.js'
    import InfinityScroll from "../components/InfinityScroll";
    import Headr from "../components/Headr";

    export default {
        name: 'User',
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
                this.pages = [];
                this.loadPosts();
            },
        },
        created() {
            this.loadPosts();

        },
        methods: {
            loadPosts() {
                const tagName = this.$route.params.tagId;

                if(tagName) {
                    this.isLoading = true;

                    const nextPage = this.nextPage ? this.nextPage : 0;
                    const url = '/tag/' + tagName + '/' + nextPage;

                    api.get(url).then(res => {
                        this.pages.push(res.data);
                        this.nextPage = res.data._nextPage;

                        this.isLoading = false;
                    }).catch(() => {
                        this.isLoading = false;
                    })
                }
            },
        },
    }
</script>

<style scoped lang="scss">
</style>
