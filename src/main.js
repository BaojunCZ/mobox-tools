import { createApp } from "vue";
import App from "./App.vue";
import getStore from "./store/store";
const app = createApp(App);
app.use(getStore());
app.mount("#app");
