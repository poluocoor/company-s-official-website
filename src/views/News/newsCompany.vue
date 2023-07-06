<template>
  <div>
    <newsList href="/ns102">
      <template v-slot:date>05/19</template>
      <template v-slot:year> 2021 </template>
      <template v-slot:image><img src="../../img/News/Rectangle61.png" alt="" /></template>
      <template v-slot:newsTitle>热烈祝贺中原区政府与华为办事处合作交流会在我司顺利举行！</template>
      <template v-slot:newsNav>
        2021年5月13日，由中原区区政府副区长樊立伟牵头，协同区政府办、区政务办、区科技局、区商务局等相关领导，<br>与华为河南省华为政企业务总经理石艳东带领的华为河南云计算业务部、郑州地市业务部、河南数字政府业务部、河<br>南泛大企业业务部相关领导在我司就进行了深入的交流，总经理高峰和公司相关部门负责人参加了交流会。
      </template>
    </newsList>
    <newsList href="/ns104">
        <template v-slot:date>03/09</template>
      <template v-slot:year> 2021 </template>
      <template v-slot:image><img src="../../img/News/Rectangle67.png" alt="" /></template>
      <template v-slot:newsTitle>我司与国网许昌公司积极开展“智慧党建”解决方案交流会</template>
      <template v-slot:newsNav>
        2021年3月5日上午，我司在国网河南许昌局协同市局相关领导，就华为“智慧党建”解决方案研讨，召开了技术交流会。<br>参与本次交流会的有我司电力事业部销售总监樊璐、许昌局副总叶东印及市局互联网部、调控中心、行政办公室以<br>及党建部全部同事，会议圆满完成。
        </template>
    </newsList>
    <newsList href="/ns106">
        <template v-slot:date>09/20</template>
      <template v-slot:year> 2020 </template>
      <template v-slot:image><img src="../../img/News/Rectangle70.png" alt="" /></template>
      <template v-slot:newsTitle>我司积极开展第三季度“技能深化训练”的系列培训</template>
      <template v-slot:newsNav>
        2020年7月起，技术部、运维部、销售部、商务部、招投标管理部全部同事，共同参与了由工程技术部统一组织的“技<br>能深化训练”系列课程培训，加强各个部门不同岗位对产品知识、解决方案的能力提升，促使各个环节更有机的结合。<br>自7月起，公司通过“华为合作伙伴APP”自主学习、内部组织和外部聘请等渠道；以线下+WELINK的方式
    </template>
    </newsList>
    <newsList href="/ns101">
        <template v-slot:date>04/01</template>
      <template v-slot:year> 2020 </template>
      <template v-slot:image><img src="../../img/News/Rectangle58.png" alt="" /></template>
      <template v-slot:newsTitle>郑州市人民政府副市长史占勇、市政协刘睿主席及市区各级领导莅临河南捷茂考察指导</template>
      <template v-slot:newsNav>
        2020年4月1日上午，郑州市人民政府副市长史占勇、市政协副主席刘睿带队，市资源规划局、市工信局、市科技局、<br>市交通局、市人社局相关负责同志一行来我司了解企业在复工复产过程中相关举措和待解决问题。中原区副区长樊立<br>伟、棉纺路街道主任李利军、棉...
    </template>
    </newsList>
    <newsList href="/ns103">
      <template v-slot:date>12/31</template>
      <template v-slot:year> 2019 </template>
      <template v-slot:image><img src="../../img/News/Rectangle64.png" alt="" /></template>
      <template v-slot:newsTitle>喜讯！祝贺我司顺利通过华为“接入&传输五钻”服务合作伙伴认证</template>
      <template v-slot:newsNav>
        12月30日，我司在技术服务能力方面又传来喜讯。凭借公司雄厚的工程技术服务能力、和业务的快速增长，2019年<br>尾又进一步突破，顺利通过华为“接入&传输五钻”服务合作伙伴认证。</template>
       </newsList>
  </div>
</template>

<script>
import newsList from "./newsList.vue";
export default {
  components: { newsList },
  setup() {},
};
</script>

<style lang="sass" scoped></style>
