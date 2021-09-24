import { createApp } from "vue";
import App from "./App.vue";
import "ag-grid-enterprise";
import VueEllipseProgress from "vue-ellipse-progress";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

import router from "./router/index";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueEllipseProgress);
app.use(router);
app.mount("#app");
