<template>
    <header class="header">
        <div v-if="$router.options.history.state.back" href="" class="prev" v-on:click="goBack">
            <b-icon-arrow-left-short class="back"/>
        </div>
        <div class="title">{{text}}</div>
        <router-link :to="{name: 'Page'}"><b-icon-house class="home"/></router-link>
    </header>
</template>

<script>
    import {BIconArrowLeftShort, BIconHouse} from 'bootstrap-icons-vue';

    export default {
        name: "Headr",
        props: {
            text: {
                type: String,
                required: true
            }
        },

        components: {
            BIconArrowLeftShort,
            BIconHouse
        },

        data() {
            return {
                prevRoute: null
            }
        },
        methods: {
            goBack() {
                console.log(43543)
                this.$router.go(-1);
            }
        },
    }
</script>

<style scoped lang="scss">
    .header {
        padding: 10px 15px;
        background-color: #eee;
        margin: 0;
        border-bottom: 1px solid #ddd;
        border-radius: 0 0 2px 2px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .prev:hover {
            cursor: pointer;
        }

        .back, .home {
            padding-top: 3px;
        }

        .back {
            font-size: 30px;
        }

        .home {
            font-size: 25px;
        }

        .title {
            width: 100%;
            text-align: center;
        }
    }
</style>
