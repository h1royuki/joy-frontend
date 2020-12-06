<template>
    <headr :text="'JoyMobile'" />
    <page :posts='posts'/>
        <infinity-scroll :isLoading="isLoading" :handler="loadPosts" :offset="5"/>
</template>

<script>
    import api from '../modules/api.js'
    import InfinityScroll from "../components/InfinityScroll";
    import Headr from "../components/Headr";
    import {mapActions} from "vuex";
    import Page from "../components/Page";

    export default {
        name: 'Home',
        components: {
            Page,
            Headr,
            InfinityScroll
        },
        data() {
            return {
                isLoading: false
            }
        },
        methods: {
            loadPosts() {
                if(this.isLoading) {
                    return;
                }

                this.isLoading = true;
                const nextPage = this.lastPostPage ? this.lastPostPage : 0;
                console.log(nextPage);

                api.get('/page/' + nextPage).then(res => {
                    this.addPostPage(res.data);
                    this.setLastPostPage(res.data._nextPage);
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
            if (Number(this.posts.length) === 0) {
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
