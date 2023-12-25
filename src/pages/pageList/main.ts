import { createApp } from "vue";
import App from "./App.vue";
import "@/utils/rem";
import "@/global";
import index from "@/components/common/index.js";
if (process.env.VUE_APP_CURRENTMODE !== "prod") {
  // 非生产环境
  const VConsole = require("vconsole");
  new VConsole();
}
const app = createApp(App);
app.use(index);
app.mount("#app");
