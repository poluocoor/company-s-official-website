<template>
  <div class="all">
    <!-- 图片 -->
    <div class="picture">
      <img src="../../img/Recruit/Group6.png" alt="" />
    </div>
    <!-- 人才招聘 -->
    <div class="recruit">
      <!-- 标题 -->
      <div class="title">
        <div class="Recruitment">Recruitment</div>
        <h2 class="center">人才招聘</h2>
        <div class="money">
          公司重视人才培养及梯队建设，完善的培训体系，横纵向晋升，扁平管理，团队氛围轻松愉快。福利丰厚（五险一金，年底双薪，项目提成，餐补+话补+交通补助）;
          <br>每天八小时工作制+周末单、双轮休+节假日正常休息，行网驻地，工作轻松。简历投递邮箱：Lyuan@hnjeemao.com.以下岗位虚拟待位：
        </div>
      </div>
      <!-- 数通售前工程师 -->
      <recruitList>
        <template v-slot:jobTitle> 数通售前工程师 </template>
        <template v-slot:jobStatement>
          <ul>
            <li>1、就华为、华三数通设备组网及设备功能向项目方进行讲解。</li>
            <li>2、负责售前技术支持、解决方案输出、产品询价报价等售前工作。</li>
            <li>3、能够熟练使用华为报价工具，参与投标文件的编制 ，讲标等工作。</li>
            <li>4、为客户提供综合解决方案，提高客户满意度，促成销售。</li>
            <li>5、为客户及内部员工提供产品的售前培训。</li>
            <li>6、完成部门安排的其他售前支持的相关工作。</li>
          </ul>
        </template>
        <template v-slot:jobRequire>
          <ul>
            <li>1、大专及以上学历，计算机、通信、电子等相关专业。</li>
            <li>2、2年以上通信行业技术支持的相关工作经验。</li>
            <li>3、熟练掌握华为通信网及IT知识。</li>
            <li>4、熟悉通信行业投标流程，性格开朗，沟通能力强。</li>
            <li>5、熟练Office办公软件，具有较好的文案功底。</li>
            <li>6、具备良好的宣讲能力、沟通能力及团队合作精神。</li>
            <li>7、有传输、接入、数通、视讯等通信产品的招投标经 验者，优先考虑。</li>
            <li>8、有NA认证，有CCNP/IE认证者尤佳。</li>
          </ul>
        </template>
      </recruitList>
      <!-- 通信工程师 -->
      <recruitList>
        <template v-slot:jobTitle>
          通信工程师（数通、光传输、网络安全）
        </template>
        <template v-slot:jobStatement>
          <ul>
            <li>1、负责华为光传输、接入、数通、视讯等设备的安装、调试及维护。</li>
            <li>2、负责河南省区域内项目实施、技术支持和售后服务。</li>
            <li>3、负责河南省内各项工程项目的进度及管理，工程质量的监督与控制。</li>
            <li>4、按照项目工程规范要求与业主单位进行积极有效的沟通。</li>
            <li>5、负责工程项目流程的完善，对新进技术人员进行技术培训。</li>
          </ul>
        </template>
        <template v-slot:jobRequire>
          <ul>
            <li>1、大专及以上学历，通信、电子、计算机、自动化信息 技术等相关专业。</li>
            <li>2、熟悉通信设备的原理及应用，具有较强的动手操作能力。</li>
            <li>3、2年以上通信行业相关工作经验。</li>
            <li>4、较强的沟通、协调能力和语言表达能力。</li>
            <li>5、有电力和铁路行业工作经验、适应出差者优先考虑。</li>
          </ul>
        </template>
      </recruitList>
      <!-- 渠道经理 -->
      <recruitList>
        <template v-slot:jobTitle> 渠道经理（专员） </template>
        <template v-slot:jobStatement>
          <ul>
            <li>1、协助渠道经理进行客户拓展和维护工作。</li>
            <li>2、协助渠道经理定期走访目标客户，挖掘客户需求，制定个性化方案，实现业绩目标。</li>
            <li>3、维护、跟进现有客户，向客户提供更高价值的服务解决方案。</li>
            <li>4、了解信息化建设方向，协助经理或总监对项目的目标销售、进度控制等。</li>
          </ul>
        </template>
        <template v-slot:jobRequire>
          <ul>
            <li>1、大专及以上学历，计算机或市场营销专业优先。</li>
            <li>2、良好的职业技能、销售经验。</li>
            <li>3、有1年以上通信行业销售工作经验，综合素质高优先。</li>
            <li>4、良好的沟通能力，有不安于现状，通过努力改变自己人生高度的决心和勇气。</li>
          </ul>
        </template>
      </recruitList>
      <!-- 前端 -->
      <recruitList >
        <template v-slot:jobTitle> 前端开发工程师 </template>
        <template v-slot:jobStatement>
          <ul>
            <li>1、负责公司产品ui设计稿的界面还原。</li>
            <li>2、维护现有应用产品，按最新需求完成基本功能的实现。</li>
            <li>3、在开发过程中与开发人员沟通，完成前端与Java等后端数据交互联调。</li>
            <li>4、对页面进行优化，对代码进行优化，提高可维护性。</li>
          </ul>
        </template>
        <template v-slot:jobRequire>
          <ul>
            <li>1、熟悉前端界面的构建并持续优化前端体验和页面响应速度，并保证兼容性和执行效率。</li>
            <li>2、熟练使用vue及衍生框架（elementUI等）。</li>
            <li>3、熟悉echarts、v-charts，以及svg。</li>
            <li>4、熟悉es6语法、熟悉scss语法。</li>
            <li>5、熟悉团队开发流程，熟练使用webpack、npm、git/svn等工具链 </li>
            <li>6、有进取心，具有良好的沟通能力和团队合作精神，具有优秀的分析问题和解决问题的能力。</li>
          </ul>
        </template>
      </recruitList>
      <!-- 后端 -->
      <recruitList>
        <template v-slot:jobTitle> 后端开发工程师 </template>
        <template v-slot:jobStatement>
          <ul>
            <li>1、根据产品需求，任务分解，编码。</li>
            <li>2、负责项目的日常开发维护工作。</li>
            <li>3、参与核心代码的编写及维护，负责技术难题，疑难bug的公关和解决。</li>
            <li>4、高效组织项目研发，能分析项目研发中的低效环节，并调整开发流程，提高研发效率。</li>
          </ul>
        </template>
        <template v-slot:jobRequire>
          <ul>
            <li>1、扎实的计算机专业基础，包括算法和数据结构，操作系统，计算机网络，计算机体系结构，数据库等。</li>
            <li>2、具有扎实的Java编程基础，理解IO、多线程等基础框架，具有良好的编码习惯。</li>
            <li>3、熟悉Jvm原理及内存管理，对调优有一定的经验。</li>
            <li>4、熟悉Mysql/Oracle等关系型数据库，精通数据库设计及SQL语句编写和调优能力。</li>
            <li>5、精通SpringMvc/Springboot等分布式框架开发技术。</li>
            <li>6、熟悉面向对象设计开发，熟悉各种常用设计模式，并有在具体的应用场景落地经验。</li>
            <li>7、熟练缓存/管道/文件系统/主流软件负载等中间件。</li>
          </ul>
        </template>
      </recruitList>
    </div>
  </div>
</template>

<script>
import recruitList from "./recruitList.vue";
export default {
  components: { recruitList },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.all{
  .pre-sale:nth-child(2n+1){
  background: #F8F8F8;
}
.j{
  text-align: center;
  font-family: SimHei-Regular;
  font-weight: normal;
  font-size: 32px;
}
h3{
  color: #B6BDC3;
}
.picture {
  width: 100%;
  height: 1010px;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  img {
    width: 100%;
    height: 100%;
  }
}
.recruit {
  // margin-top: 20px;
  .title {
    padding: 0 250px;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    .Recruitment{
      color: #B6BDC3;
      font-size: 32px;
      font-weight: bold;
      font-family: Sitka-Banner Bold, Sitka;
    }
    .center {
      margin-top: 10px;
      margin-bottom: 30px;
      white-space:nowrap;
      font-size: 30px;
      font-family: SimHei-Regular, SimHei;
    }

    .money {
      white-space:nowrap;
      word-break: normal;
      word-spacing: pre-wrap;
      word-wrap: break-word;
      font-size: 20px;
      font-family: SimHei-Regular, SimHei;
    }
  }
  .pre-sale {
    // height: 809px;
    padding: 75px 0;
    box-sizing: border-box;
    .job {
      margin: 0 auto;
      width: 661px;
      height: 108px;
      background: #0034ab;
      text-align: center;
      line-height: 108px;
      font-size: 32px;
      color: #fff;
      margin-bottom: 140px;
      margin-top: 44px;
      font-family: SimHei-Regular, SimHei;
    }
    .content {
      width: 1355px;
      // height: 567px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .position{
        width: 584px;
      }
      .positionNav {
        width: 581px;
        font-size: 23px;
        font-family: SimHei-Regular, SimHei;
        font-weight: 400;
        color: #808080;
        
      }
      .positionNav2{
        width: 606px;
      }
    }
  }
}


li{
  height: 35px;
  line-height: 35px;
  display: inline-block;
  white-space:wrap;
  padding: 20px 10px;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  vertical-align:auto;
}
}

</style>
