<template>
  <div class="ccc">
    <!-- By: poluocook -->
    <!-- banner -->
    <div style="position: relative; overflow: hidden" class="Bmain">
      <img
        style="width: 100%; height: 100%"
        src="../../img/Home/Group14.png"
        alt=""
      />
      <div class="HTTT">
        <div class="HT1">关注客户需求</div>
        <div class="HT2">创造客户价值</div>
        <div class="HT3">Focus on customer needs and create customer value</div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="Cmain">
      <!-- <div class="Mleft"></div> -->
      <div v-if="showDiv" class="Mmain">
        <div>
          <div class="Ftxt">
            <h3>About us</h3>
            <h1>关于我们</h1>
          </div>
        </div>
        <div style="display: flex">
          <div class="FLmain">
            <div>
              <div class="F-2">
                <p class="p1">河南捷茂电子科技有限公司</p>
                <p class="p2">
                  河南捷茂电子科技有限公司成立于2011年7月，是一家集智能通信系统技术研发为一体的高新技术企业。业务范围涵盖软件开发，光传输、语音、数据通信、高清视讯、网络安全、数据存储等核心通信设备，以及光缆、光纤、配线等能基通信配套设备材料，并自主打造智能运维平台、智能交互通信软件研发的信息化产品，为现代智能通信提供一体化解决方案，最终打造以ICT软、硬兼程自主研发为核心竞争力的集成平台。
                </p>
              </div>

              <div class="F-3" style="display: flex">
                <a href="/about"><div class="FLB">查看更多</div> </a>
                <a href="javascript:void(0);"  @click="toguide('port')"
                  ><div class="FRB">资质荣誉</div></a
                >
              </div>
              <div class="FLbottom">
                <div class="FLBT">
                  <p>想了解更多关于捷茂？</p>
                  <p style="font-size: 20px">Want to know more about Jeemo?</p>
                </div>
                <div class="FLBI">
                  <a href="/about">
                    <img src="../../img/Home/Slice2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="FRmain">
            <img
              style="
                width: 607px;
                height: 742px;
                opacity: 1;
                margin-top: 15.5px;
              "
              src="../../img//Home/Sli.png"
              alt=""
            />
            <div class="FRB2"></div>
          </div>
        </div>
      </div>
      <!-- <div class="Mright"></div> -->
    </div>
    <!-- 解决方案 -->
    <div class="Dmain">
      <!-- <div class="Mleft1"></div> -->
      <div v-if="showDiv1" style="width: 100%">
        <div style="width: 100%">
          <div>
            <div class="S-2">
              <h3>High-end Products</h3>
              <h1>解决方案</h1>
            </div>
          </div>

          <div class="F-2" style="display: flex; justify-content: center">
            <a href="/sever">
              <div class="SBU">
                <div>查看更多</div>
                <div>
                  <img class="SBUI" src="../../img/Home/vector1.png" alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div style="display: flex; justify-content: center">
          <div style="display: flex; margin-top: 20px">
            <!-- 左 -->
            <div class="JJL">
              <img src="../../img/Home/Group17.png" alt="" />
              <!-- <img src="../../img/Home/Maskgroup.png" alt=""> -->
              <div class="JJLT">电力行业</div>
              <a href="">
                <div class="JJLB">
                  了解更多
                  <img class="SBUI1" src="../../img/Home/Vector.png" alt="" />
                </div>
              </a>
            </div>
            <!-- 右 -->
            <div class="JJR">
              <!-- 上 -->
              <div class="JJRT">
                <img src="../../img/Home/Group16.png" alt="" />
                <div class="JJRTt">煤炭行业</div>
                <a href="">
                  <div class="JJRBt">
                    了解更多
                    <img class="SBUI1" src="../../img/Home/Vector.png" alt="" />
                  </div>
                </a>
              </div>
              <!-- 下 -->
              <div class="JJRB">
                <img src="../../img/Home/Group51.png" alt="" />
                <div class="JJRTt">交通运输</div>
                <a href="">
                  <div class="JJRBt">
                    了解更多
                    <img class="SBUI1" src="../../img/Home/Vector.png" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="Mright1"></div> -->
    </div>
    <!-- 新闻资讯 -->
    <div class="Cmain1">
      <div v-if="showDiv2">
        <div style="width: 100%">
          <div>
            <div class="Mtxt">
              <h3>News Information</h3>
              <h1>新闻资讯</h1>
            </div>
          </div>
          <div class="F-2" style="display: flex; margin-top: 84px">
            <div style="margin-right: 838px; width: 75%; display: flex">
              <a href="javascript:;" @click="showdiv1">
                <div class="FBU">公司动态</div>
              </a>
              <a href="javascript:;" @click="showdiv2">
                <div class="fbu">行业新闻</div>
              </a>
            </div>
            <a href="/news/newsCompany">
              <div class="SBU1">
                <div>查看更多</div>
                <div>
                  <img class="SBUI" src="../../img/Home/vector1.png" alt="" />
                </div>
              </div>
            </a>
            <div style="width: 13%"></div>
          </div>
          <div
            v-if="NSdiv1"
            style="width: 100%; display: flex; justify-content: center"
          >
            <div class="NSL">
              <div class="NSIL">
                <a href="/ns102">
                  <img class="NSimg" src="../../img/Home/30.png" alt="" />
                </a>
                <div class="NSILT">2021年5月13日</div>
              </div>
              <a href="/ns102">
                <div>
                  <div
                    style="
                      margin-top: 23px;
                      font-size: 16px;
                      color: #2b2b2b;
                      height: 19px;
                      width: 448px;
                    "
                  >
                    热烈祝贺中原区政府与华为办事处合作交流会在我司顺利举行！
                  </div>
                  <div
                    style="
                      margin-top: 10px;
                      color: #808080;
                      font-size: 14px;
                      height: 34px;
                      width: 436px;
                    "
                  >
                    2021年5月13日，由中原区区政府副区长樊立伟牵头，协同区政府办、
                    区政务办、区科技局、区商务局等相关领导...
                  </div>
                  <div
                    style="
                      margin-top: 39px;
                      font-size: 16px;
                      color: #b6bdc3;
                      height: 19px;
                      width: 70px;
                    "
                  >
                    <a style="color: #b6bdc3" href="/news/newsCompany">
                      MORE
                      <img
                        class="right9"
                        src="../../img/Home/right9.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div class="NSR">
              <!-- 上 -->
              <div class="F-2" style="display: flex">
                <div>
                  <a href="/ns101">
                    <img class="NSimg" src="../../img/Home/333.png" alt="" />
                  </a>
                </div>
                <div style="margin-left: 17px">
                  <div
                    style="
                      font-size: 16px;
                      color: #2b2b2b;
                      height: 19px;
                      width: 448px;
                    "
                  >
                    郑州市人民政府副市长史占勇、市政...
                  </div>
                  <a href="/ns101">
                    <div
                      style="
                        margin-top: 10px;
                        color: #808080;
                        font-size: 14px;
                        height: 51px;
                        width: 432px;
                      "
                    >
                      2020年4月1
                      日上午，郑州市人民政府副市长史占勇、市政协副主席刘睿带队，市资源规划局、市工信局、市科技局、市交通局、市人社局相关负责同志一行来我司了解企业...
                    </div>
                  </a>

                  <div
                    style="
                      margin-top: 39px;
                      font-size: 16px;
                      color: #b6bdc3;
                      height: 19px;
                      width: 70px;
                    "
                  >
                    <a style="color: #b6bdc3" href="/news/newsCompany">
                      MORE
                      <img
                        class="right9"
                        src="../../img/Home/right9.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <!-- 下 -->
              <div style="margin-top: 23px">
                <div class="NSMM">
                  <div style="display: flex">
                    <!-- 左 -->
                    <div>
                      <div class="MD">03/09</div>
                      <div class="year">2021</div>
                    </div>
                    <!-- 中线 -->
                    <div
                      style="
                        height: 84px;
                        width: 0px;
                        color: #b6bdc3;
                        border: 1px solid #b6bdc3;
                      "
                    ></div>
                    <!-- 右 -->
                    <a href="/ns104">
                      <div style="margin-left: 40px">
                        <div class="NSMT">
                          我司与国网许昌公司积极开展“智慧党建”解决方案交流会
                        </div>
                        <div class="NSMTS">
                          2021年3月5日上午，我司在国网河南许昌局协同市局相关领导，就华为“智慧党建”解决方案研讨，召开了技术交流会。参与本次交流会的有...
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 2 -->
                <div style="margin-top: 23px" class="NSMM">
                  <div style="display: flex">
                    <!-- 左 -->
                    <div>
                      <div class="MD">09/05</div>
                      <div class="year">2021</div>
                    </div>
                    <!-- 中线 -->
                    <div
                      style="
                        height: 84px;
                        width: 0px;
                        color: #b6bdc3;
                        border: 1px solid #b6bdc3;
                      "
                    ></div>
                    <!-- 右 -->
                    <a href="/ns106">
                      <div style="margin-left: 40px">
                        <div class="NSMT">
                          我司积极开展第三季度“技能深化训练”的系列培训
                        </div>
                        <div class="NSMTS">
                          2020年7月起，技术部、运维部、销售部、商务部、招投标管理部全部同事，共同参与了由工程技术部统一组织的“技能深化训练”系列课程......
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 3 -->
                <div style="margin-top: 23px" class="NSMM">
                  <div style="display: flex">
                    <!-- 左 -->
                    <div>
                      <div class="MD">06/28</div>
                      <div class="year">2021</div>
                    </div>
                    <!-- 中线 -->
                    <div
                      style="
                        height: 84px;
                        width: 0px;
                        color: #b6bdc3;
                        border: 1px solid #b6bdc3;
                      "
                    ></div>
                    <!-- 右 -->
                    <a href="/ns105">
                      <div style="margin-left: 40px">
                        <div class="NSMT">
                          全国首个F5G矿山商用发布会在永城召开
                        </div>
                        <div class="NSMTS">
                          经过几十年的发展，煤矿行业经历了机械化、信息化，现正迈入智能化，矿山的智能化，不仅要实现“安全、少人无人”，更要实现“增效”，而全光......
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="NSdiv2"
            style="width: 100%; display: flex; justify-content: center"
          >
            <div class="NSL">
              <div class="NSIL">
                <a href="/ns201">
                  <img class="NSimg" src="../../img/Home/NS1.png" alt="" />
                </a>
                <div class="NSILT">2023年6月26日</div>
              </div>
              <div>
                <a href="/ns201">
                  <div
                    style="
                      margin-top: 23px;
                      font-size: 16px;
                      color: #2b2b2b;
                      height: 19px;
                      width: 448px;
                    "
                  >
                    “聆听、合作、改进、发展”，华为举办第十五届全球用户大会
                  </div>
                  <div
                    style="
                      margin-top: 10px;
                      color: #808080;
                      font-size: 14px;
                      height: 34px;
                      width: 436px;
                    "
                  >
                    [中国，乌镇，2023年6月26日]
                    华为以“聆听、合作、改进、发展”为主题举办第十五届全球用户大会。在此次大会上，华为向...
                  </div>
                </a>

                <div
                  style="
                    margin-top: 39px;
                    font-size: 16px;
                    color: #b6bdc3;
                    height: 19px;
                    width: 70px;
                  "
                >
                  <a style="color: #b6bdc3" href="/news/newsIndustry">
                    MORE
                    <img
                      class="right9"
                      src="../../img/Home/right9.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="NSR">
              <!-- 上 -->
              <div class="F-2" style="display: flex">
                <div>
                  <a href="/ns202">
                    <img
                      class="NSimg"
                      src="../../img/News/Rectangle161.png"
                      alt=""
                    />
                  </a>
                </div>
                <div style="margin-left: 17px">
                  <a href="/ns202">
                    <div
                      style="
                        font-size: 16px;
                        color: #2b2b2b;
                        height: 19px;
                        width: 448px;
                      "
                    >
                      联合国工业发展组织宣布将与华为等企业成立AI联...
                    </div>
                    <div
                      style="
                        margin-top: 10px;
                        color: #808080;
                        font-size: 14px;
                        height: 51px;
                        width: 432px;
                      "
                    >
                      [匈牙利，费涅什利特凯，2023年6月15日]
                      今日，欧洲智慧铁路枢纽数字化转型论坛在匈牙利费涅什利特凯举行。会议期间，联合国工业发展组织宣布将在7月...
                    </div>
                  </a>
                  <div
                    style="
                      margin-top: 39px;
                      font-size: 16px;
                      color: #b6bdc3;
                      height: 19px;
                      width: 70px;
                    "
                  >
                    <a style="color: #b6bdc3" href="/news/newsIndustry">
                      MORE
                      <img
                        class="right9"
                        src="../../img/Home/right9.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <!-- 下 -->
              <div style="margin-top: 23px">
                <div class="NSMM">
                  <div style="display: flex">
                    <!-- 左 -->
                    <div>
                      <div class="MD">09/20</div>
                      <div class="year">2020</div>
                    </div>
                    <!-- 中线 -->
                    <div
                      style="
                        height: 84px;
                        width: 0px;
                        color: #b6bdc3;
                        border: 1px solid #b6bdc3;
                      "
                    ></div>
                    <!-- 右 -->
                    <a href="/ns203">
                      <div style="margin-left: 40px">
                        <div class="NSMT">
                          加速迈向5.5G时代，华为亮相2023中国国际信息通信展
                        </div>
                        <div class="NSMTS">
                          [中国，北京，2023年6月5日]
                          2023中国国际信息通信展览会于6月4日至6日在北京国家会议中心举办，华为以“数智领航
                          未来已来”为主题全面参...
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 2 -->
                <div style="margin-top: 23px" class="NSMM">
                  <div style="display: flex">
                    <!-- 左 -->
                    <div>
                      <div class="MD">04/01</div>
                      <div class="year">2020</div>
                    </div>
                    <!-- 中线 -->
                    <div
                      style="
                        height: 84px;
                        width: 0px;
                        color: #b6bdc3;
                        border: 1px solid #b6bdc3;
                      "
                    ></div>
                    <!-- 右 -->
                    <a href="/ns204">
                      <div style="margin-left: 40px">
                        <div class="NSMT">
                          北非首届IP GALA峰会，激发运营商业务新增长
                        </div>
                        <div class="NSMTS">
                          [摩洛哥，马拉喀什，2023年5月31日]
                          今日，华为携手行业组织IPv6
                          Forum、非洲电信联盟（ATU）、阿拉伯信息通信技术组织（AICTO）联合举办了......
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 3 -->
                <div style="margin-top: 23px" class="NSMM">
                  <div style="display: flex">
                    <!-- 左 -->
                    <div>
                      <div class="MD">12/34</div>
                      <div class="year">2019</div>
                    </div>
                    <!-- 中线 -->
                    <div
                      style="
                        height: 84px;
                        width: 0px;
                        color: #b6bdc3;
                        border: 1px solid #b6bdc3;
                      "
                    ></div>
                    <!-- 右 -->
                    <a href="/ns205">
                      <div style="margin-left: 40px">
                        <div class="NSMT">加速迈向Net5.5G，深耕产业数字化</div>
                        <div class="NSMTS">
                          [中国，深圳，2023年4月20日]
                          在2023华为全球分析师大会期间，华为举办“迈向Net5.5G，激发新增长”主题论坛，与产业伙伴、行业客户共同分享技术趋势和场景展望，探讨Net5.5G产业发展方向。......
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作企业 -->
    <div class="Dmain">
      <div v-if="showDiv3" style="width: 100%">
        <div class="MtxtB">
          <h3>Cooperative Enterprise</h3>
          <h1>合作企业</h1>
        </div>
        <div style="width: 100%; display: flex">
          <!-- 1 -->
          <div
            class="imgb1"
            style="
              margin-top: 89px;
              display: flex;
              width: 100%;
              justify-content: center;
            "
          >
            <div class="imgB">
              <a href="https://www.huawei.com/cn/" target="_blank">
                <img src="../../img/Home/huawei.png" alt="" />
              </a>
            </div>
            <div class="imgB">
              <a href="http://www.ha.sgcc.com.cn/" target="_blank">
                <img src="../../img/Home/2.png" alt="" />
              </a>
            </div>
            <div class="imgB">
              <a href="https://www.pinggao.com/" target="_blank">
                <img src="../../img/Home/3.png" alt="" />
              </a>
            </div>
            <div class="imgB">
              <a href="http://www.xjgc.com/" target="_blank">
                <img src="../../img/Home/4.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div
          class="imgb2"
          style="display: flex; width: 100%; justify-content: center"
        >
          <div class="imgB">
            <a href="https://zlgj.chinalco.com.cn/" target="_blank">
              <img src="../../img/Home/21.png" alt="" />
            </a>
          </div>
          <div class="imgB">
            <a href="https://www.hnecgc.com.cn/" target="_blank">
              <img src="../../img/Home/22.png" alt="" />
            </a>
          </div>
          <div class="imgB">
            <a href="http://www.zmjt.cn/index.htm" target="_blank">
              <img src="../../img/Home/23.png" alt="" />
            </a>
          </div>
          <div class="imgB">
            <a href="http://www.pmjt.com.cn/" target="_blank">
              <img src="../../img/Home/24.png" alt="" />
            </a>
          </div>
        </div>
        <!-- 3 -->
        <div
          class="imgb3"
          style="display: flex; width: 100%; justify-content: center"
        >
          <div class="imgC">
            <a href="https://www.clfg.com/" target="_blank">
              <img src="../../img/Home/31.png" alt="" />
            </a>
          </div>
          <div class="imgC">
            <a href="https://zjhfzx.chinawutong.com/" target="_blank">
              <img src="../../img/Home/32.png" alt="" />
            </a>
          </div>
          <div class="imgC">
            <a href="http://www.sgepri.sgcc.com.cn/" target="_blank">
              <img src="../../img/Home/33.png" alt="" />
            </a>
          </div>
          <div class="imgC">
            <a href="http://www.hnjttz.com/" target="_blank">
              <img src="../../img/Home/34.png" alt="" />
            </a>
          </div>
        </div>
        <!-- over -->
      </div>
    </div>
    <!-- 招聘信息 -->
    <div class="zpimg">
      <div style="display: flex">
        <div class="zpl">
          <p style="font-size: 30px">招聘信息</p>
          <p style="width: 90px; border: 1px solid #fff"></p>
          <p
            style="
              height: 36px;
              width: 434px;
              margin-top: 21px;
              font-size: 14px;
            "
          >
            公司重视人才培养及梯队建设，完善的培训体系，横纵向晋升，扁平管
            理，团队氛围轻松愉快。
          </p>
        </div>
        <div class="zpr">
          <div class="zpbl">
            <a href="/recruit">
              <img
                style="margin: 39px 0 0 121px"
                src="../../img/Home/L.png"
                alt=""
              />
              <p style="margin: 5px 0 0 121px; color: #fff; font-size: 18px">
                招聘信息
              </p>
            </a>
          </div>
          <div class="zpbr">
            <a href="/contact">
              <img
                style="margin: 23px 0 0 117px"
                src="../../img/Home/Lus.png"
                alt=""
              />
              <p style="margin: 5px 0 0 120px; color: #fff; font-size: 18px">
                联系我们
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showDiv: false,
      showDiv1: false,
      showDiv2: false,
      showDiv3: false,
      NSdiv2: false,
      NSdiv1: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {

    toguide(id) {
      let select = id;
      localStorage.setItem("port", select);
      // this.$router.push({path:'/about'})
      window.open("/about", "_blank");
    },
    showdiv1() {
      this.NSdiv1 = true;
      this.NSdiv2 = false;
    },
    showdiv2() {
      this.NSdiv1 = false;
      this.NSdiv2 = true;
    },
    handleScroll() {
      const scrollPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollPosition >= 1100) {
        this.showDiv1 = true;
      }
      if (scrollPosition >= 1900) {
        this.showDiv2 = true;
      }
      if (scrollPosition >= 3000) {
        this.showDiv3 = true;
      }
      if (scrollPosition >= 300) {
        this.showDiv = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(../../css/home.css);
@import url(../../css/homeanimate.css);
</style>