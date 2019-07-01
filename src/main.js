import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'animate.css'
import "./style/reset.css";
import "./fonts/font_/iconfont.css"
import "./style/style.css";
//import $ from 'jquery';
// import layer from 'vue-layer'

// Vue.prototype.$layer = layer(Vue);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// new Vue({
//   el: '#app',
//   router: router,
//   store: store,
//   template: '<App/>',
//   components: { App }
// })

