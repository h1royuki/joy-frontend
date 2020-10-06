<template>
    <div class="post">
        <div class="header">
            <div class="tags">
                <router-link class="tag" v-for="(tag, index) in post._tags" v-bind:key="index" :to="{ name: 'Tag', params: { tagId: tag }}">
                    {{ tag }}
                </router-link>
            </div>
        </div>
        <div class="content">
            <post-content v-for="(element, index) in post._content._elements"
                          v-bind:key="index"
                          :element="element">

            </post-content>
        </div>
        <div class="footer">
            <div v-if="post._rating" class="rating">
                <b-icon-lightning class="icon"/>
                {{ post._rating }}
            </div>

            <router-link class="author" :to="{ name: 'User', params: { userId: post._author._nickname }}">
                <img class="avatar" :src="buildAvatarURL(post._author._id)">
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
    import {BIconLightning, BIconChatSquareText} from 'bootstrap-icons-vue';
    import PostContent from "./Post/PostContent";
    import {API_URL} from "../env";

    export default {
        name: 'Post',
        props: {
            post: Object
        },
        components: {
            PostContent,
            BIconChatSquareText,
            BIconLightning
        },
        methods: {
            buildAvatarURL(id) {
                return 'http://' + API_URL + '/avatar/' + String(id);
            }
        }
    }
</script>

<style scoped lang="scss">
    .post {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        border-radius: 2px;
        background-color: white;
        margin: 5px 0;

        .header {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            border-bottom: 1px solid #ddd;

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
            margin-bottom: -4px;
        }

        .footer {
            padding: 0;
            border-top: 1px solid #ddd;
            font-size: 16px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            a {
                color: #000000;
            }

            .rating,
            .author,
            .date,
            .comments-count {
                display: flex;
                align-items: center;
                min-height: 50px;

                .avatar {
                    border-radius: 50px;
                    margin: 0 5px;
                    max-width: 30px;
                    max-height: 30px;
                }
                .icon {
                    font-size: 19px;
                    padding-right: 7px;
                }
            }
        }
    }
</style>
