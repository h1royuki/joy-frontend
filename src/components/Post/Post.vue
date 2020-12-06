<template>
    <div class="post">
            <div class="header">
                <div class="tags">
                    <router-link class="tag" v-for="(tag, index) in post._tags" v-bind:key="index"
                                 :to="{ name: 'Tag', params: { tagId: tag }}">
                        {{ tag }}
                    </router-link>
                </div>
            </div>
            <div class="content" :style="{height: long ? '250px' : '100%'}" ref="postRef">
                <post-content v-for="(element, index) in post._content._elements"
                              v-bind:key="index"
                              :element="element"/>
            </div>
            <div class="expand" v-if="long" v-on:click="expand">
                ▼ Expand
            </div>
            <div class="footer">
                <div v-if="post._rating" class="rating">
                    <b-icon-lightning class="icon"/>
                    {{ post._rating }}
                </div>

                <router-link class="author" :to="{ name: 'User', params: { userId: post._author._nickname }}">
                    <img class="avatar" :src="avatarURL">
                    {{ post._author._nickname }}
                </router-link>

                <a v-if="post._commentsCount" class="comments-count" href="#">
                    <b-icon-chat-square-text class="icon"/>
                    {{ post._commentsCount }}
                </a>
            </div>
    </div>
</template>

<script>
    import {BIconChatSquareText, BIconLightning} from 'bootstrap-icons-vue';
    import PostContent from "./PostContent";
    import {API_URL} from "../../env";

    export default {
        name: 'Post',
        props: {
            post: Object,
        },
        components: {
            PostContent,
            BIconChatSquareText,
            BIconLightning
        },
        data() {
            return {
                long: false
            }
        },
        methods: {
            buildAvatarURL(id) {
                return 'http://' + API_URL + '/avatar/' + String(id);
            },

            expand() {
                this.long = false;
            }
        },
        mounted() {
            if (this.$refs.postRef.clientHeight > 600) {
                this.long = true;
            }
        },
        computed: {
            avatarURL() {
                return 'http://' + API_URL + '/avatar/' + String(this.post._author._id);
            }
        }
    }
</script>

<style scoped lang="scss">
    .post {
        border-top: 1px solid #191c1e;
        border-bottom: 1px solid #191c1e;
        border-radius: 2px;
        background-color: #202124;
        margin: 5px 0;

        .header {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            border-bottom: 1px solid #191c1e;

            .tags {
                display: flex;
                flex-direction: row;
                max-width: 100%;
                flex-wrap: wrap;
                padding: 5px 0;
                font-size: 12px;

                .tag {
                    background: #ffe5c5;
                    padding: 5px 10px;
                    border-radius: 15px;
                    margin: 5px 5px;
                }
            }
        }

        .content {
            max-width: 100%;
            padding: 0 10px;
            overflow: hidden;
        }

        .expand {
            height: 100%;
            text-align: center;
            padding: 10px;
            background-color: #ffe5c5;
            color: #191c1e;

            &:hover {
                cursor: pointer;
            }
        }

        .footer {
            padding: 0;
            border-top: 1px solid #191c1e;
            font-size: 16px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            .rating,
            .author,
            .date,
            .comments-count {
                display: flex;
                align-items: center;
                min-height: 50px;
                color: #fff;

                .avatar {
                    border-radius: 50px;
                    margin: 0 5px;
                    max-width: 30px;
                    max-height: 30px;
                }
                .icon {
                    font-size: 19px;
                    padding-right: 7px;
                    color: #fff;
                }
            }
        }
    }
</style>
