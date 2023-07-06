<template>
  <div class="header">
    <div class="w">
      <div class="left">
        <a href="/home">
        <img src="../../img/Head/logo.png" alt="Logo" />

        </a>
      </div>
      <div class="right">
       <router-link active-class="head_a" to="/home">首页</router-link>
       <router-link active-class="head_a" to="/about">关于我们</router-link>
       <router-link active-class="head_a" to="/sever"
         >解决方案</router-link
       >
       <router-link active-class="head_a" to="/news">新闻动态</router-link>
       <router-link active-class="head_a" to="/recruit"
         >人才招聘</router-link
       >
       <router-link active-class="head_b" to="/contact"><div class="contact">联系我们</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import url('../../assets/comment/head.scss');
</style>