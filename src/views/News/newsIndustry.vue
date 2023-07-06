<template>
    <div>
      <newsList href="/ns201">
        <template v-slot:date>06/26</template>
        <template v-slot:year> 2023 </template>
        <template v-slot:image><img src="../../img/News/Rectangle158.png" alt="" /></template>
        <template v-slot:newsTitle>“聆听、合作、改进、发展”，华为举办第十五届全球用户大会</template>
        <template v-slot:newsNav>
            [中国，乌镇，2023年6月26日] 华为以“聆听、合作、改进、发展”为主题举办第十五届全球用户大会。在此次大会<br>上，华为向全球400多位与会运营商客户汇报了2022年TOP问题的改进成果，并邀请领先运营商分享商业成功实践，<br>探讨5G业务发展和数智化转型等话题，面向未来持续改进。</template>
      </newsList>
      <newsList href="/ns202">
          <template v-slot:date>03/09</template>
        <template v-slot:year> 2021 </template>
        <template v-slot:image><img src="../../img/News/Rectangle161.png" alt="" /></template>
        <template v-slot:newsTitle>联合国工业发展组织宣布将与华为等企业成立AI联盟，助力工业制造数字化</template>
        <template v-slot:newsNav>
            [匈牙利，费涅什利特凯，2023年6月15日] 今日，欧洲智慧铁路枢纽数字化转型论坛在匈牙利费涅什利特凯举行。会议期间，联合<br>国工业发展组织宣布将在7月份与华为等国际企业成立全球工业和制造业人工智能联盟，致力于构建共同协作、知识共享的平台，<br>推动人工智能技术在工业与制造领域的创新和应用，促进数字经济发展。
        </template>
      </newsList>
      <newsList href="/ns203">
          <template v-slot:date>09/20</template>
        <template v-slot:year> 2020 </template>
        <template v-slot:image><img src="../../img/News/Rectangle164.png" alt="" /></template>
        <template v-slot:newsTitle>加速迈向5.5G时代，华为亮相2023中国国际信息通信展</template>
        <template v-slot:newsNav>
            [中国，北京，2023年6月5日] 2023中国国际信息通信展览会于6月4日至6日在北京国家会议中心举办，华为以“数智<br>领航 未来已来”为主题全面参与本次盛会。在大会主论坛上，华为高级副总裁、运营商BG总裁李鹏发表了“5G+AI持续<br>创新, 拥抱数智经济新时代”主题发言。
        </template>
      </newsList>
      <newsList href="/ns204">
          <template v-slot:date>04/01</template>
        <template v-slot:year> 2020 </template>
        <template v-slot:image><img src="../../img/News/Rectangle167.png" alt="" /></template>
        <template v-slot:newsTitle>北非首届IP GALA峰会，激发运营商业务新增长</template>
        <template v-slot:newsNav>
            [摩洛哥，马拉喀什，2023年5月31日] 今日，华为携手行业组织IPv6 Forum、非洲电信联盟（ATU）、阿拉伯信息通信<br>技术组织（AICTO）联合举办了以“智能IP网络，激发新增长”为主题的首届非洲IP GALA峰会。来自政府监管部门、运<br>营商、行业组织及咨询机构的嘉宾围绕全球IP产业发展趋势，运营商IP业务成功实践，IP技术演进与创新等热点话题展<br>开了交流。旨在助力运营商实现全业务新增长，加速区域IPv6产业升级节奏，释放非洲数字生产力。</template>
      </newsList>
      <newsList href="/ns205">
        <template v-slot:date>12/31</template>
        <template v-slot:year> 2019 </template>
        <template v-slot:image><img src="../../img/News/Rectangle170.png" alt="" /></template>
        <template v-slot:newsTitle>加速迈向Net5.5G，深耕产业数字化</template>
        <template v-slot:newsNav>
            [中国，深圳，2023年4月20日] 在2023华为全球分析师大会期间，华为举办“迈向Net5.5G，激发新增长”主题论坛，<br>与产业伙伴、行业客户共同分享技术趋势和场景展望，探讨Net5.5G产业发展方向。
        </template>
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
  