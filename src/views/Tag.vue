<template>
    <headr :text="'Тег: ' + $route.params.tagId" />
    <div v-if="page" class="tagsPage">
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
        name: 'User',
        components: {
            Headr,
            Post,
            InfinityScroll
        },
        data() {
            return {
                page: null,
                isLoading: false
            }
        },
        watch: {
            $route() {
                this.page = null;
                this.loadPosts();
            },
        },
        methods: {
            loadPosts() {
                const tagName = this.$route.params.tagId;

                if(tagName) {
                    this.isLoading = true;
                    const page = this.page ? this.page._nextPage ? this.page._nextPage : 0 : 0;
                    const url = '/tag/' + tagName + '/' + page;

                    api.get(url).then(res => {
                        this.page = res.data;
                        this.isLoading = false;
                    }).catch(e => {
                        console.log(e);
                        this.isLoading = false;
                    })
                }
            },
        },
    }
</script>

<style scoped lang="scss">
</style>
