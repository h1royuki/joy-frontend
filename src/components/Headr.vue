<template>
    <header class="header">
        <div v-if="$router.options.history.state.back" href="" class="prev" v-on:click="goBack">
            <b-icon-arrow-left-short class="back"/>
        </div>
        <div class="title">{{text}}</div>
        <router-link :to="{name: 'Home'}"><b-icon-house class="home"/></router-link>
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
                this.$router.go(-1);
            }
        },
    }
</script>

<style scoped lang="scss">
    .header {
        padding: 5px 15px;
        background-color: #ffe5c5;
        margin: 0;
        border-bottom: 1px solid #ddd;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #000;

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
