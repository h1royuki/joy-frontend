<template>
    <headr :text="'JoyMobile'" />
        <div v-for="(post, index) in posts" :key="index">
            <post :post="post"></post>
        </div>
    <keep-alive>
        <infinity-scroll :isLoading="isLoading" :handler="loadPosts" :offset="5"></infinity-scroll>
    </keep-alive>
</template>

<script>
    import Post from '../components/Post.vue'
    import api from '../modules/api.js'
    import InfinityScroll from "../components/InfinityScroll";
    import Headr from "../components/Headr";
    import {mapActions} from "vuex";

    export default {
        name: 'Home',
        components: {
            Headr,
            Post,
            InfinityScroll
        },
        data() {
            return {
                isLoading: false
            }
        },
        methods: {
            loadPosts() {
                this.isLoading = true;
                const nextPage = this.lastPostPage ? this.lastPostPage : 0;
                console.log(this.lastPostPage);

                api.get('/page/' + nextPage).then(res => {
                    this.addPostPage(res.data);
                    this.setLastPostPage(res.data._nextPage);

                    console.log(this.lastPostPage);

                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                })
            },
            ...mapActions([
                `addPostPage`,
                `setLastPostPage`

            ]),
        },
        created() {
            if(!this.posts.length) {
                this.loadPosts();
            }
        },
        computed: {
            posts() {
                return this.$store.getters.postPages;
            },
            firstPostPage() {
                return this.$store.getters.firstPostPage;
            },
            lastPostPage() {
                return this.$store.getters.lastPostPage;
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
