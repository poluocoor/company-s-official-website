<template>
  <div>
    <div class="nav">
      <img class="nav-img" src="../../img/About/img.png" alt="" />
      <div class="nav-text">
        <img src="../../img/About/img1.png" alt="" />
      </div>
    </div>
    <div class="about">
      <div class="title">
        <div class="about-e">About Us</div>
        <div class="about-c">关于我们</div>
      </div>
      <div class="text">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河南捷茂电子科技有限公司成立于2011年7月，是一家集通信设备销售、技术服务、智能通信系统技术研发为一体的ICT整体解决方案供应商。业务范围涵盖光传输、语音、数据通信、高清视讯、网络安全、数据存储、USP电源等核心通信设备，以及光缆、光纤、配线等能基通信配套设备材料，并自主打造智能运维平台、智能交互通信软件研发的信息化产品，为现代智能通信提供一体化解决方案，最终打造以ICT软、硬兼程自主研发为核心竞争力的集成平台。公司目前员工50余人，其中研发人员10余人，中、高层管理均为通信行业积累多年的实干家与管理专业人才。设立总经办、人力资源部、销售部、商务部、工程技术部、研发部、财务部7大部门，并通过科学的人力管理、销售管理、供应链管理、项目管理、研发管理制度建设，保证公司全体系高效稳固发展。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司主要服务于电力、煤矿、交通、铁路、政府、金融等行业用户，为用户提供全方位的通信产品方案及售后服务，成立至今陆续通过华为体系中金牌核心经销商认证、传输&接入五钻服务商认证、数通三钻服务商认证、云软件三钻服务商认证等等印证高质量售前、售后技术能力的相关认证，及ITSS、风险评估等级、质量管理等等多项国家级行业资质认证，通过高性价比的设备及高水准的技术服务，获得了用户的一致好评。每年业绩销售额呈直线上升高速发展，2018年度销售额过5000万元；2019年度中标销售额突破10000万元。公司业务已覆盖河南省内多个地市电力公司和五大发电集团在河南的下属发电企业，同时在政府、交通等行业取得了突破，与中铝国际、许继集团、南瑞集团、平煤、平高、洛玻、富士康等省内大型企业建立了良好的合作关系。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;截止目前，公司已相继获得10多项ICT软件著作自主知识产权及10多项行业及华为资质认证，以设备销售及服务为业务资金基础，以政府工业互联网平台中新基建资源为依托，不断加强研发投入，特别是在政府数字化平台、电力、铁路系统目前已经进行中的开发项目加大投入力度和深度，并对拥有重大贡献的研发人员给予现金、股权激励、购房支持等各种福利措施，保证核心人才的稳定。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河南捷茂电子科技有限公司始终秉承“感恩守信”“协作进取”“敬业奉献”的文化理念来经营管理公司团队，打造“学习型组织”，以“关注客户需求，创造客户价值”为使命，在前进的道路上专心、专业、专注，与所有的合作伙伴共同分享价值！
      </div>
    </div>

    <!-- 公司大事记 -->
    <div class="company">
      <div class="title">
        <div class="company-e">Company Memorabilia</div>
        <div class="company-c">公司大事记</div>
      </div>
      <div class="time">
        <!-- 加这个吗，应该是那个ul吧？ -->
        <!-- 按钮 -->
        <div class="time-left" @click="scrollLeft()">
          <img src="../../img/About/img14.png" alt="" />
        </div>
        <div class="time-right" @click="scrollRight()">
          <img src="../../img/About/img15.png" alt="" />
        </div>

        <ul class="timeline-wrapper" ref="xxxRef">
          <!-- <li class="long-line" ></li> -->
          <li class="timeline-item" v-for="item in timelineList" :key="item.id">
            <div class="timeline-box">
              <div class="out-circle">
                <div class="in-circle"></div>
                <div class="timeline-date"></div>
              </div>
              <div
                class="long-line"
                v-show="item.isShow"
                :style="`width:${
                  item.children ? (item.children.length + 1) * 100 : 1 * 100
                }px`"
              >
                <div
                  v-for="(subItem, index) in item.children"
                  :key="subItem.id"
                >
                  <div
                    class="content"
                    :class="`children-box ${
                      item.id % 2 === 0
                        ? 'top-children-box'
                        : 'bottom-children-box'
                    }`"
                  >
                    <div class="content-title">{{ subItem.time }}</div>
                    <div class="text">{{ subItem.content }}</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 资质荣誉 -->
    <div id="port" class="honors">
      <div class="title">
        <div class="honors-e">Qualifications And Honors</div>
        <div class="honors-c">资质荣誉</div>
      </div>
      <div class="img">
        <img src="../../img/About/img3.png" alt="" />
      </div>
    </div>

    <!-- 合作伙伴 -->
    <div class="partners">
      <div class="title">
        <div class="partners-e">Partners</div>
        <div class="partners-c">合作伙伴</div>
      </div>

      <div class="swiper"></div>
    </div>

    <!-- 公司地址 -->
    <div class="address">
      <div class="title">
        <div class="address-e">Company Address</div>
        <div class="address-c">公司地址</div>
      </div>
      <div class="map">
        <div class="left">
          <baidu-map
            :center="{ lng: 113.60810279302, lat: 34.760389240871 }"
            :zoom="20"
            :scroll-wheel-zoom="true"
            style="width: 100%; height: 100%"
          >
            <bm-overlay
              pane="labelPane"
              @draw="draw"
              :class="{ sample: true, active }"
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
        <div class="right">
          <div class="right-text">
            <div class="right-text-title">郑州</div>
            <div class="right-text1">
              <div class="right-text1-title">电话</div>
              <div class="right-text1-text">0371-8603875</div>
            </div>
            <div class="right-text1">
              <div class="right-text1-title">地址</div>
              <div class="right-text1-text">郑州市中原区华山路105号</div>
            </div>
          </div>
          <div class="right-name">河南捷茂电子科技有限公司</div>
        </div>
      </div>
    </div>

    <!-- 留言咨询 -->
    <div class="consultation">
      <div class="consultation-title">
        <div class="title">Leave A Eessage For Consultation</div>
        <div class="text">留言咨询</div>
      </div>
      <div class="message">
        <form action="" :model="form">
          <input
            type="text"
            v-model="form.name"
            style="width: 420px; height: 54px; border-radius: 5px"
            placeholder="姓名"
          />
          <input
            type="text"
            v-model="form.tel"
            style="
              width: 420px;
              height: 54px;
              margin-left: 16px;
              border-radius: 5px;
              margin-bottom: 21px;
            "
            placeholder="联系电话"
          />
          <div class="radio">
            <span>咨询事宜：</span>
            <label>
              <input
                type="radio"
                v-model="form.resource1"
                label="项目合作"
              />项目合作</label
            >
            <label>
              <input
                type="radio"
                v-model="form.resource2"
                label="人才投递"
              />人才投递</label
            >
          </div>

          <textarea
            v-model="form.desc"
            type=""
            placeholder="留下您的需求"
            style="
              width: 856px;
              height: 131px;
              line-height: 20px;
              border-radius: 5px;
            "
          ></textarea>

          <div class="button" @click="onSubmit()">立即咨询</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, reactive } from "vue";

onMounted(() => {
    nextTick(() => {
      getlocal();
    });
  });
  onMounted(() => {
    nextTick(() => {
      // window.addEventListener('scroll', handleScroll);
    });
  });
  const getlocal = () => {
    let select = localStorage.getItem('port');
    let elm = document.getElementById(select);
    if (select) {
      elm.scrollIntoView(true);
    }
  };

const timelineList = ref([
  {
    id: 1,
    date: "2019",
    isShow: true,
  },
  {
    id: 2,
    date: "2019",
    isShow: true,
    children: [
      {
        time: "2011年",
        content: "正式成立",
      },
    ],
  },
  {
    id: 3,
    date: "2020",
    isShow: true,
    children: [
      {
        time: "2014年",
        content: "7月8日公司正式成为华为认证经销商，当年完成销售额600万。",
      },
    ],
  },

  {
    id: 4,
    date: "2021",
    isShow: true,
    children: [
      {
        time: "2015年",
        content:
          "销售额突破700万，获得华为传输接入银牌经销商，通过系统集成四级认证，注册资金1107万，员工12人",
      },
    ],
  },
  {
    id: 5,
    date: "2022",
    isShow: true,
    children: [
      {
        time: "2016年",
        content:
          " 销售额突破1000万，获得华为多产品银牌经销商，传输&接入CSP四钻认证服务商，员工19人。",
      },
    ],
  },
  {
    id: 6,
    date: "2022",
    isShow: true,
    children: [
      {
        time: "2017年",
        content: "销售额近3000万；成功入围许继集团IT供应商，员工29人。",
      },
    ],
  },
  {
    id: 7,
    date: "2022",
    isShow: true,
    children: [
      {
        time: "2018年",
        content: "获得华为多产品金牌经销商；获得ITSS三级资格认证；员工33人。",
      },
    ],
  },
  {
    id: 8,
    date: "2022",
    isShow: true,
    children: [
      {
        time: "2019年",
        content:
          "注册资金5000万，销售额突破1亿元；获得华为传输&接入CSP五钻认证，数通三钻、云软件三钻服务认证，员工50人；成立宁夏办事处。",
      },
    ],
  },
  {
    id: 9,
    date: "2022",
    isShow: true,
    children: [
      {
        time: "2020年",
        content:
          "销售额持续增长，通过8项实用新型专利认证；通过ISO/IEC 20000信息技术服务管理体系、三级信息安全风险评估服务资质认证；入库高新科技企业；认定为“专精特新企业”；入驻中原区芝麻街公园里企业园区。",
      },
    ],
  },
  {
    id: 10,
    date: "2022",
    isShow: true,
    children: [
      {
        time: "2021年",
        content:
          " 通过“高新科技型企业”认证；通过超聚变金牌经销商认证；员工65人。",
      },
    ],
  },
  {
    id: 11,
    date: "2022",
    isShow: true,
    children: [
      {
        time: "2022年",
        content:
          "成立河南捷茂电子科技有限公司党支部;荣获创新型高成长中小企业。",
      },
    ],
  },
  {
    id: 12,
    date: "2022",
    isShow: true,
    children: [
      {
        time: "2023年",
        content:
          "通过电子与智能化工程专业承包贰级认证；通过安全生产许可证认证；申请通过软件企业，公司研发中心正式成立。",
      },
    ],
  },
]);

//时间线
const scrollLeft = () => {
  document.querySelector(".timeline-wrapper").scrollLeft -= 700;
};
const scrollRight = () => {
  document.querySelector(".timeline-wrapper").scrollLeft += 700;
};

//地图
const active = ref(false);

const draw = ({ el, BMap, map }) => {
  const pixel = map.pointToOverlayPixel(
    new BMap.Point(113.60810279302, 34.760389240871)
  );
  el.style.left = pixel.x - 130 + "px";
  el.style.top = pixel.y - 100 + "px";
};

//留言咨询
const form = reactive({
  name: "",
  tel: "",
  resource1: "",
  resource2: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!", form);
};

//荣誉
// created(() => {
//   this.$nextTick(() => {
//     this.getlocal();
//   });
// });
// onMounted(() => {
//   this.$nextTick(() => {
//     window.addEventListener("scroll", this.handleScroll);
//   });
// });

// const getlocal = () => {
//   let select = localStorage.getItem("id");
//   let elm = document.getElementById(select);
//   if (select) {
//     elm.scrollIntoView(true);
//   }
// };

// const destroyed = () => {
//   localStorage.setItem("id", "");
// };
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  position: relative;
  .nav-img {
    width: 100%;
    height: 827px;
  }
  .nav-text {
    position: absolute;
    top: 28%;
    left: 15%;
    animation: myfirst 2s;
  }
}
@keyframes myfirst {
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
}
.about {
  margin-top: 70px;
  margin-bottom: 76px;
  .title {
    margin-bottom: 55px;
    .about-e {
      width: 144px;
      height: 40px;
      font-size: 32px;
      font-weight: normal;
      color: #b6bdc3;
      line-height: 38px;
      margin: auto;
    }
    .about-c {
      width: 120px;
      height: 36px;
      font-size: 30px;
      font-weight: 900;
      color: #2b2b2b;
      margin: auto;
      line-height: 35px;
    }
  }
  .text {
    width: 1200px;
    height: 390px;
    font-size: 16px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #aeafb5;
    line-height: 26px;
    margin: auto;
  }
}
.company {
  width: 100%;
  height: 739px;
  background-color: #0034ab;
  margin-bottom: 80px;
  .title {
    padding-top: 62px;
    margin-bottom: 56px;
    .company-e {
      width: 349px;
      height: 40px;
      font-size: 32px;
      font-family: Sitka-Banner Bold, Sitka;
      font-weight: normal;
      color: #b6bdc3;
      line-height: 38px;
      margin: auto;
    }
    .company-c {
      width: 150px;
      height: 36px;
      font-size: 30px;
      font-family: Inter-Black, Inter;
      font-weight: 900;
      color: #ffffff;
      line-height: 35px;
      margin: auto;
    }
  }
  .time {
    width: 1365px;
    margin: auto;
    position: relative;
    .time-left {
      position: absolute;
      top: 44%;
    }
    .time-right {
      position: absolute;
      top: 44%;
      right: 0;
    }
    .content {
      // background: url("../../img/About/img10.png");
      width: 293px;
      height: 172px;
      margin-left: -226px;
      padding-left: 30px;

      .content-title {
        // width: 81px;
        height: 29px;
        font-size: 24px;
        font-weight: 400;
        color: #2b2b2b;
        line-height: 28px;
        padding-top: 15px;
      }
      .text {
        width: 231px;
        margin-top: 15px;
        white-space: normal;
        width: 237px;
        height: 32px;
        font-size: 14px;
        font-weight: 400;
        color: #808080;
        line-height: 16px;
      }
    }
  }
}
.honors {
  margin-bottom: 127px;
  .title {
    margin-bottom: 64px;
    .honors-e {
      width: 404px;
      height: 40px;
      font-size: 32px;
      font-weight: normal;
      color: #b6bdc3;
      line-height: 38px;
      margin: auto;
    }
    .honors-c {
      width: 120px;
      height: 36px;
      font-size: 30px;
      font-weight: 900;
      color: #2b2b2b;
      line-height: 35px;
      margin: auto;
    }
  }
  .img {
    width: 1202px;
    height: 495px;
    margin: auto;
  }
}
.partners {
  margin-bottom: 142px;
  .title {
    margin-bottom: 64px;
    .partners-e {
      width: 120px;
      height: 40px;
      font-size: 32px;
      font-weight: normal;
      color: #b6bdc3;
      line-height: 38px;
      margin: auto;
    }
    .partners-c {
      width: 120px;
      height: 36px;
      font-size: 30px;
      font-weight: 400;
      color: #000000;
      line-height: 35px;
      margin: auto;
    }
  }
  .swiper {
    width: 1368px;
    height: 125px;
    .swiper-slide {
      width: 177px;
      height: 125px;
    }
  }
}
.address {
  width: 100%;
  height: 739px;
  background: #f7fafd;
  .title {
    padding-top: 56px;
    margin-bottom: 64px;
    .address-e {
      width: 279px;
      height: 40px;
      font-size: 32px;
      font-weight: normal;
      color: #b6bdc3;
      line-height: 38px;
      margin: auto;
    }
    .address-c {
      width: 120px;
      height: 36px;
      font-size: 30px;
      font-weight: 400;
      color: #000000;
      line-height: 35px;
      margin: auto;
    }
  }
  .map {
    width: 1200px;
    margin: auto;
    display: flex;
    .left {
      width: 683px;
      height: 460px;
      .sample {
        position: absolute;
        font-size: 16px;
        color: #fff;
        background-color: #0a69d6;
        border: 0;
        width: 257px;
        height: 51px;
        line-height: 51px;
        text-align: center;
        border-radius: 5px;
      }
      .bd {
        width: 50px;
        height: 50px;
        background-color: #f6f6f6;
        border-radius: 0 0 5px 5px;
        overflow: hidden;
        box-shadow: -5px 5px 4px #ccc;
        .bda {
          display: block;
          width: 50px;
          height: 50px;
          padding: 9px;
          .bdel {
            font-size: 32px;
          }
        }
      }
    }
    .right {
      width: 517px;

      .right-text {
        height: 355px;
        width: 100%;
        padding-top: 143px;
        padding-left: 106px;
        .right-text-title {
          width: 48px;
          height: 27px;
          font-size: 24px;
          font-weight: 400;
          color: #000000;
          line-height: 27px;
          margin-bottom: 8px;
        }
        .right-text1 {
          margin-bottom: 26px;
          .right-text1-title {
            width: 40px;
            height: 23px;
            font-size: 20px;
            font-weight: 400;
            color: #808080;
            line-height: 23px;
          }
          .right-text1-text {
            width: 236px;
            height: 23px;
            font-size: 20px;
            font-weight: 400;
            color: #2b2b2b;
            line-height: 23px;
          }
        }
      }
      .right-name {
        height: 105px;
        width: 100%;
        background-color: #0034ab;
        font-size: 24px;
        text-align: center;
        line-height: 105px;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}
.consultation {
  width: 856px;
  margin: auto;
  .consultation-title {
    margin-top: 42px;
    margin-bottom: 82px;
    .title {
      width: 514px;
      height: 40px;
      font-size: 32px;
      font-weight: normal;
      color: #b6bdc3;
      line-height: 38px;
      margin: auto;
    }
    .text {
      width: 120px;
      height: 36px;
      font-size: 30px;
      font-weight: 400;
      color: #000000;
      line-height: 35px;
      margin: auto;
    }
  }
  .message {
    width: 856px;
    form {
      width: 100%;
      font-size: 16px;
      font-weight: 400;
      color: #000;
      .radio {
        margin-bottom: 21px;
        span {
          display: inline-block;
          width: 82px;
          height: 18px;
          font-size: 16px;
          font-weight: 400;
          color: #2b2b2b;
          line-height: 19px;
        }
        label {
          width: 64px;
          height: 18px;
          font-size: 16px;
          font-weight: 400;
          color: #808080;
          line-height: 19px;
          margin-right: 20px;
        }
      }
      input::placeholder,
      textarea::placeholder {
        width: 200px;
        height: 18px;
        font-size: 16px;
        font-weight: 400;
        color: #aeafb5;
        line-height: 19px;
        padding-left: 27px;
      }
      textarea::placeholder {
        padding-top: 10px;
      }
      .button {
        width: 143px;
        height: 50px;
        background: url("../../img/About/img16.png");
        margin: 33px auto;
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}

// //时间线样式
ul.timeline-wrapper {
  // DS-Digital该字体样式为自定义
  width: 1140px;
  margin: auto;
  font-family: DS-Digital;
  list-style: none;
  padding: 200px 20px;
  white-space: nowrap;
  overflow: hidden;
  scroll-behavior: smooth;
}
.timeline-item {
  position: relative;
  display: inline-block;
}
.timeline-item .timeline-box {
  display: flex;
  align-items: center;
}
.timeline-item .timeline-box .out-circle {
  width: 30px;
  height: 30px;
  background: #39c1e0;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.timeline-item .timeline-box .out-circle .in-circle {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
}
.timeline-item .timeline-box .out-circle .timeline-date {
  margin-top: 55px;
}
.timeline-item .timeline-box .out-circle .timeline-date .father-text {
  font-weight: 900;
  font-size: 16px;
  margin-left: -15px;
}
.long-line {
  height: 2px;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: revert;
  justify-content: space-around;
}
.long-line .top-children-box {
  margin-top: -200px;
  background: url("../../img/About/img10.png");
  border-radius: 5px;
  width: 100px;
}
.long-line .bottom-children-box {
  background: url("../../img/About/img11.png");
  border-radius: 5px;
  width: 150px;
  margin-top: 37px;
  padding-top: 15px;
}
.long-line .top-children-box:hover {
  background: url("../../img/About/img12.png");
  .content-title {
    color: #fff;
  }
  .text {
    color: #fff;
  }
}
.long-line .bottom-children-box:hover {
  background: url("../../img/About/img13.png");

  .content-title {
    color: #fff;
  }
  .text {
    color: #fff;
  }
}
</style>
