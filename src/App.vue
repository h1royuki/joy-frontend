<template>
    <keep-alive>
        <transition>
            <router-view/>
        </transition>
    </keep-alive>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    html, body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #333639;
        color: #ddd;
    }

    a {
        text-decoration: none;
        color: #4f4f4f;
        outline: none;
    }
</style>
