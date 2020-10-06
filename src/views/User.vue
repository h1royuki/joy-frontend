<template>
    <headr :text="'Пользователь: ' + $route.params.userId" />
    <div v-if="page" class="user">
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
                const userName = this.$route.params.userId;

                if (userName) {
                    this.isLoading = true;
                    const page = this.page ? this.page._nextPage ? this.page._nextPage : 0 : 0;
                    const url = '/user/' + userName + '/' + page;

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
