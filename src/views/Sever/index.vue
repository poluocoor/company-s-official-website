<template>
  <div>
    <div class="head">
      <img class="head-img" src="../../img/Sever/img1.png" alt="" />
      <div class="head-text">
        <img src="../../img/Sever/img.png" alt="" />
        <div class="arrows">
          <img src="../../img/Sever/img-1.png" alt="" />
        </div>
      </div>
    </div>

    <!-- 解决方案 -->
    <div class="content">
      <div class="products-e">High-end Products</div>
      <div class="products">解决方案</div>
      <div class="products-img">
        <div class="products-left">
          <img class="bg" src="../../img//Sever/img2.png" alt="" />
          <div class="bottom">
            <!-- <img src="../../img/Sever/img5.png" alt="" /> -->
            智慧电力
          </div>
        </div>
        <div class="products-right">
          <div style="margin-bottom: 40px; position: relative">
            <img class="bg" src="../../img/Sever/img3.png" alt="" />
            <div class="r-bottom">
              <!-- <img src="../../img/Sever/img6.png" alt="" /> -->
              智慧矿山
            </div>
          </div>
          <div style="position: relative">
            <img class="bg" src="../../img/Sever/img4.png" alt="" />
            <div class="r-bottom">
              智能交通
              <!-- <img src="../../img/Sever/img6.png" alt="" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 服务案例 -->
    <div class="case">
      <div style="height: 241px">
        <div style="height: 1px"></div>
        <!-- <div class="casetext-e">Service Case</div>
        <div class="casetext-c">服务案例</div> -->
        <div class="casetext-e" style="height: 78px; text-align: Center">
          <p style="height: 40px; line-height: 40px">The Solution</p>
          <p style="height: 36px; line-height: 36px">解决案例</p>
        </div>
      </div>
      <div class="allbox">
        <div class="box hover">
          <div class="text">运维服务</div>
          <div class="img"></div>
        </div>
        <div class="box hover2">
          <img src="../../img/Sever/img8.png" alt="" />
        </div>
        <div class="box hover">
          <div class="text">广域/园区数据通信规划设计与实施服务</div>
          <div class="img"></div>
        </div>
        <div class="box hover2">
          <img src="../../img/Sever/img9.png" alt="" />
        </div>
        <div class="box hover2">
          <img src="../../img/Sever/img10.png" alt="" />
        </div>
        <div class="box hover1">
          <div class="text">宁夏电力：EPON接入解决“最后一公里”的覆盖难题</div>
          <div class="img"></div>
        </div>
        <div class="box hover2">
          <img src="../../img/Sever/img11.png" alt="" />
        </div>
        <div class="box hover1">
          <div class="text">融合路局中心解决方案，助力 “12306”数据中心建设</div>
          <div class="img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  position: relative;
}
.head-img {
  width: 100%;
  height: 621px;
}
.head-text {
  width: 446px;
  height: 116px;
  position: absolute;
  left: 15%;
  top: 30%;
  animation: mymove 2s;
}
//标题出现
@keyframes mymove {
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateY(0);
  }
}
.arrows {
  width: 100%;
  text-align: center;
  animation: mytwo 3s;
}

@keyframes mytwo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

//内容样式
.content {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 137px;
}
.products-e {
  width: 245px;
  height: 40px;
  font-size: 27px;
  font-family: Sitka-Banner Bold, Sitka;
  font-weight: normal;
  color: #b6bdc3;
  line-height: 38px;
  margin: auto;
}

.products {
  width: 120px;
  height: 36px;
  font-size: 30px;
  font-family: Inter-Bold, Inter;
  font-weight: bold;
  color: #2b2b2b;
  line-height: 35px;
  margin: auto;
  margin-bottom: 115px;
}
.products-img {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  margin: auto;
}
.products-left {
  position: relative;
  .bg {
    width: 572px;
    height: 664px;
  }
  .bottom {
    width: 572px;
    height: 74px;
    position: absolute;
    background-image: url("../../img/Sever/img5.png");
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 74px;
    font-size: 24px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #ffffff;
    animation: mytext 3s;
  }
}

.products-right {
  .bg {
    // position: relative;
    width: 585px;
  }
}
.r-bottom {
  width: 585px;
  height: 74px;
  position: absolute;
  background-image: url("../../img/Sever/img6.png");
  bottom: 0;
  text-align: center;
  line-height: 74px;
  font-size: 24px;
  font-family: Inter-Regular, Inter;
  font-weight: 400;
  color: #ffffff;
  animation: mytext 2s;
}
@keyframes mytext {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
//服务案例样式
.case {
  width: 100%;
  height: 815px;
  background-image: url("../../img/Sever/img7.png");
  margin-bottom: 103px;
}
.casetext-e {
  width: 194px;
  // height: 40px;
  font-size: 32px;
  //   font-family: Sitka-Banner Bold, Sitka;
  font-weight: normal;
  color: #b6bdc3;
  // line-height: 38px;
  margin: auto;
  margin-top: 61px;
  overflow: hidden;
  // padding-top: 61px;
}
.casetext-c {
  width: 120px;
  // height: 36px;
  font-size: 30px;
  font-family: Inter-Regular, Inter;
  font-weight: 400;
  color: #ffffff;
  // line-height: 35px;
  margin: auto;
  // margin-bottom: 102px;
}
.allbox {
  width: 1520px;
  height: 486px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.box {
  width: 380px;
  height: 243px;
}
.box:first-child {
  position: relative;
  background-color: #ffffff;
  .text {
    // width: 80px;
    height: 24px;
    font-size: 20px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #0034ab;
    line-height: 243px;
    text-align: center;
  }
  .img {
    height: 22px;
    width: 22px;
    position: absolute;
    bottom: -20px;
    left: 179px;
    z-index: 1;
    background: url("../../img//Sever/case-3.png") no-repeat;
  }
}
.box:nth-child(3) {
  position: relative;
  background-color: #ffffff;
  .text {
    width: 288px;
    height: 48px;
    font-size: 20px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #0034ab;
    line-height: 23px;
    margin: auto;
    margin-top: 98px;
  }
  .img {
    height: 22px;
    width: 22px;
    position: absolute;
    bottom: -20px;
    left: 179px;
    z-index: 1;
    background: url("../../img//Sever/case-3.png") no-repeat;
  }
}
.box:nth-child(6) {
  position: relative;
  background-color: #ffffff;
  .text {
    width: 303px;
    height: 48px;
    font-size: 20px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #0034ab;
    line-height: 23px;
    margin: auto;
    margin-top: 98px;
  }
  .img {
    width: 22px;
    height: 22px;
    position: absolute;
    top: -16px;
    left: 179px;
    z-index: 1;
    background: url("../../img/Sever/case-2.png") no-repeat;
  }
}
.box:nth-child(8) {
  position: relative;
  background-color: #ffffff;
  .text {
    width: 260px;
    height: 48px;
    font-size: 20px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #0034ab;
    line-height: 23px;
    margin: auto;
    margin-top: 98px;
  }
  .img {
    width: 22px;
    height: 22px;
    position: absolute;
    top: -16px;
    left: 179px;
    z-index: 1;
    background: url("../../img/Sever/case-2.png") no-repeat;
  }
}

.hover:hover {
  background-color: #0a69d6;
  .text {
    color: #fff;
  }
  .img {
    background: url("../../img/Sever/case-1.png") no-repeat;
  }
}
.hover1:hover {
  background-color: #0a69d6;
  .text {
    color: #fff;
  }
  .img {
    background: url("../../img/Sever/case-4.png") no-repeat;
  }
}
.hover2:hover {
  z-index: 10;
  img {
    width: 390px;
    height: 253px;
  }
}
</style>
