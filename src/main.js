import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBoGhyNIYwFAHx9EjjvdfL5SeWdv6p41a4",
  },
});
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
