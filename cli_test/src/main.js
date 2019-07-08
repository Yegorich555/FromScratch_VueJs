import "@csstools/normalize.css"; //such import creates chunk-vendors.[hash].css that is placed after app.[hash].css in dist/index.html
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
