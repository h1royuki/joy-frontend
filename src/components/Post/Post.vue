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
        <div class="expand-wrapper" v-if="long" v-on:click="expand">
            <div class="expand">Expand</div>
        </div>
        <div class="footer">
            <router-link class="author" :to="{ name: 'User', params: { userId: post._author._nickname }}">
                <img class="avatar" :src="avatarURL">
                {{ post._author._nickname }}
            </router-link>

            <a class="comments-count" href="#">
                <b-icon-chat-square-text class="icon"/>
                {{ post._commentsCount }}
            </a>

            <div v-if="post._rating" class="rating">
                <b-icon-lightning class="icon"/>
                {{ post._rating }}
            </div>
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
            if (this.$refs.postRef.clientHeight > 750) {
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
                padding: 5px 0;
                font-size: 12px;
                overflow: auto;
                white-space: nowrap;

                .tag {
                    background: #404040;
                    padding: 5px 10px;
                    border-radius: 15px;
                    margin: 5px 5px;
                    color: #ddd;
                }
            }
        }

        .content {
            max-width: 100%;
            padding: 0 10px;
            overflow: hidden;
        }

        .expand-wrapper {
            display: flex;
            width: 100%;
            position: relative;
            margin-top: -40px;
            justify-content: center;
            align-items: center;

            .expand {
                text-align: center;
                padding: 7px 10px;
                background-color: #333639;
                border-radius: 50px;
                margin-bottom: 7px;
                box-shadow: 0px 3px 4px 0px #00000091;
                &:hover {
                    cursor: pointer;
                }
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
