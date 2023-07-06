import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/index.css";
import BaiduMap from 'vue-baidu-map-3x';

const app = createApp(App);
//小图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(BaiduMap, {
  ak: 'd1dUtLs1bZfBgGm3Wsp8ENVo4mRCTND2'
}).use(router).use(ElementPlus).mount("#app");
// createApp(App).mount('#app')
