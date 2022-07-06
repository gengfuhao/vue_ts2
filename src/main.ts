import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./store";
import router from "./router/router";
//引入element-ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

const app = createApp(App);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.use(ElementPlus);
app.use(store, key);
app.use(router);
app.use(VueViewer);
app.mount("#app");
