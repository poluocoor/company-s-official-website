<template>
    <Head></Head>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <BackTop></BackTop>
    <Foot></Foot>
</template>

<script setup>
import Head from './components/comment/Head.vue'
import Foot from './components/comment/Foot.vue'
import BackTop from './components/comment/BackTop.vue';
</script>

<style lang="scss" scoped>

</style>
