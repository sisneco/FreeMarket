import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);

const app = createApp(App);
//コンポーネントの追加
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
