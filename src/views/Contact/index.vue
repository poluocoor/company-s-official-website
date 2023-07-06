<template>
  <div>
    <!-- 上半部分 -->
    <div class="main">
      <div class="title">
        <div class="hd">
          <h1 class="left">关注客户需求</h1>
          <h1 class="right">创造客户价值</h1>
        </div>
        <div class="ft">Focus on customer needs to create customer value</div>
      </div>
      <div class="next">
        <img class="nextpic" src="../../img/Contact/Group7.png" alt="" />
      </div>
    </div>
    <!-- 中间标签 -->
    <div class="middle">
      <img src="../../img/Contact/Group8.png" alt="" />
    </div>
    <ul class="ul">
      <li class="li">
        <div class="lit">
          <img class="img" src="../../img/Contact/tel.png" alt="" />
        </div>
        <div class="lim">电话</div>
        <div class="lib">0371-86038758</div>
      </li>
      <li class="li">
        <div class="lit">
          <img class="img" src="../../img/Contact/ema.png" alt="" />
        </div>
        <div class="lim">邮箱</div>
        <div class="lib">hnjeemao@163.com</div>
      </li>
      <li class="li">
        <div class="lit">
          <img class="img" src="../../img/Contact/addr.png" alt="" />
        </div>
        <div class="lim">位置</div>
        <div class="lib">河南省郑州市中原区华山路 105号</div>
      </li>
    </ul>
    <!-- 下半部分 -->
    <!-- 表单 -->
    <div class="contfoot">
      <div class="left">
        <div class="title">留言资讯</div>
        <form action="javascript:;">
          <label class="formtitle" for="name">姓名</label>
          <input type="text" id="name" />
          <label class="formtitle" for="te">联系电话</label>
          <input type="tel" name="" id="te" />
          <div class="formtitle">咨询事宜</div>
          <input type="checkbox" name="" id="cooperate" />
          <label class="formtitle1" for="cooperate">项目合作</label>
          <input type="checkbox" name="" id="man" />
          <label class="formtitle1" for="man">人才投递</label>
          <label class="formtitle" for="notes">备注</label>
          <textarea name="" id="notes" cols="30" rows="10"></textarea>
          <lable class="formtitle" for="code">验证码</lable>
          <input type="text" id="code" />
          <div class="code">VRVT</div>
          <button class="btn" type="submit">提交</button>
        </form>
      </div>
      <!-- 地图 -->
      <div class="right">
        <baidu-map
          class="map"
          :center="{ lng: 113.60810279302, lat: 34.760389240871 }"
          :zoom="20"
          @ready="ready"
          :scroll-wheel-zoom="true"
        >
          <bm-overlay
            pane="labelPane"
            :class="{ sample: true, active }"
            @draw="draw"
            @mouseover="active = true"
            @mouseleave="active = false"
          >
            <div>河南捷茂电子科技有限公司</div>
            <div class="three"></div>
          </bm-overlay>
          <bm-marker
            :position="{ lng: 113.60810279302, lat: 34.760389240871 }"
            :dragging="true"
            :icon="{
              url: require('../../img/Contact/Group9.png'),
              size: { width: 57, height: 96 },
            }"
          ></bm-marker>
          <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT">
            <div class="bd">
              <a class="bda" href="https://map.baidu.com/">
                <el-icon class="bdel"><Position /></el-icon>
              </a>
            </div>
          </bm-control>
        </baidu-map>
      </div>
    </div>
    <div class="conlast">@河南捷茂电子科技有限公司</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const show = ref(true);

const infoWindowClose = () => {
  show.value = false
};
const infoWindowOpen = () => {
  show.value = true
};
const active = ref(false);

const draw = ({ el, BMap, map }) => {
  const pixel = map.pointToOverlayPixel(
    new BMap.Point(113.60810279302, 34.760389240871)
  );
  el.style.left = pixel.x - 130 + "px";
  el.style.top = pixel.y - 100 + "px";
};
</script>

<style lang="scss" scoped>
@import url("../../assets/contact/index.scss");
</style>
