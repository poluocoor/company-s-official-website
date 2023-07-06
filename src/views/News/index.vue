<template>
  <div class="all">
    <!-- 图片背景 -->
    <div class="picture">
      <!-- <img src="../../img/News/Group3.png" alt="" /> -->
      <div class="titleNav">
        <div class="title1">新闻中心</div>
        <div class="title2">Information</div>
        <div class="line"></div>
        <div class="newest">最新热点在线查看</div>
      </div>
    </div>
    <!-- 资讯 -->
    <div class="content">
      <div class="news1">News</div>
      <h2 class="new2">新闻动态</h2>
    </div>
    <!-- 内容 -->
    <div class="newsTitle">
      <router-link to="/news/newsCompany">公司动态</router-link>
      <router-link to="/news/newsIndustry">行业新闻</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components:'newsList',
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@keyframes move {
  from {
    transform: translateY(180px);
  }
  to {
    transform: translateY(0);
  }
}
.all {
  .picture {
    width: 100%;
    height: 894px;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    background-image: url('../../img/News/Group3.png');
    img {
      width: 100%;
      height: 100%;
    }
    .titleNav {
      animation: move 2s;
      width: 622px;
      height: 391px;
      position: relative;
      top: 250px;
      left: 200px;
      z-index: 100;
      // padding-top: 250px;
      // padding-left: 200px;
      // box-sizing: border-box;
      .title1 {
        font-size: 128px;
        color: #ffffff;
      }
      .title2 {
        font-size: 64px;
        color: #d9d9d9;
        margin-top: 20px;
        margin-bottom: 40px;
      }
      .line {
        width: 220px;
        height: 0px;
        opacity: 1;
        border: 2px solid #0a69d6;
        margin-bottom: 25px;
      }
      .newest {
        font-size: 32px;
        color: #aeafb5;
      }
    }
  }
  .content {
    margin-top: 50px;
    .news1 {
      color: #b6bdc3;
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      font-weight: black;
    }
    .new2 {
      margin-top: 10px;
      margin-bottom: 30px;
      white-space: nowrap;
      text-align: center;
      font-size: 30px;
    }
  }
  .newsTitle {
    width: 1300px;
    height: 1300px;
    // background-color: #0a69d6;
    margin: 0 auto;
    a{
      display: inline-block;
      width: 160px;
      height: 58px;
      color: #808080;
      text-align: center;
      line-height: 58px;
      border-radius: 5px 5px 5px 5px;
      opacity: 1;
      border: 1px solid #808080;
      margin: 10px 34px;
    }
    .router-link-exact-active{
      background-color: #0a69d6;
      color: #ffffff;
    }
  }
}
</style>
