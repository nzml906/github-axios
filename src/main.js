import Vue from "vue";
import VueLazyload from "vue-lazyload";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import Ads from "vue-google-adsense";
import Simplert from "vue2-simplert-plugin";

Vue.use(require("vue-script2"));
Vue.use(Ads.Adsense);
Vue.use(Ads.InArticleAdsense);
Vue.use(Ads.InFeedAdsense);
Vue.use(Simplert);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: "assets/icons/android-icon-36x36.png",
  loading: "assets/images/loading.gif",
  attempt: 1
});
if (process.env.NODE_ENV === "production") {
  require("./pwa");
} else {
  Vue.config.devtools = true;
}

require("octicons/build/build.css");

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  store,
  components: { App }
});
