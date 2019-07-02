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

//引入配置文件
import { RPCURL } from './config';
//引入 rpc 服务
import { rpc } from './rpc/index';
//设置 rpc 地址
rpc.setUrl(RPCURL);


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

