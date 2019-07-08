import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'animate.css'
import "./style/reset.css";
import "./fonts/font_/iconfont.css"
import "./style/style.css";
import $ from 'jquery';
import layer from "layui-layer";


layer.config({
  time: 2000, //设置两秒后默认关闭
});

//引入配置文件
import { RPCURL } from './config';
//引入 rpc 服务
import { rpc } from './rpc/index';
//设置 rpc 地址
rpc.setUrl(RPCURL);


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
	
	//如果要进行检查权限，且用户没有登陆 ，就跳转至登陆页
	if(to.meta.warn && sessionStorage.currentMember==null){
		next('/login');
		return
	}
	
	next();
})

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


