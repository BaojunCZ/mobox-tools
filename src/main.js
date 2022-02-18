import { createApp } from "vue";
import App from "./App.vue";
import getStore from "./store/store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(getStore());
app.use(Antd);
app.mount("#app");
