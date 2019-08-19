<template>
	<div class="home">
    	<v-Header></v-Header>
    	<v-Sider></v-Sider>

    	<div id="login-content" class="login_back">
      		<div class="login loginCAdd" style="margin: 0 auto">
          		<h2>星尘实验室账号登录</h2>
          		<div>
	            	<!-- 密码登录 -->
	              	<form class="login-name licitform" ref="data" :model="data" :rules="rules"  v-if="loginType==1" @submit.native.prevent>
	                  	<div class="login-input" prop="categoryId">
	                      	<input type="text" placeholder="手机号"  class="licit" v-model="data.mobile"  data-show="acctips">
	                  	</div>
	                  	<div class="login-input">
	                      	<input type="password" placeholder="登录密码" v-model="data.passWord" class="licit"  data-show="acctips">
	                      	<a href="javascript:;">忘记密码</a>
	                  	</div>
	                  	<div class="login-input clearfix">
	                      	<input type="text" placeholder="验证码" class="login-code fl licit" v-model="data.code" data-show="acctips">
	                      	<div class="login-code-pic fr">
	                          	<img id="verify_btn" :src="codeSrc" style="float:left;cursor: pointer;" @click="showCode()" class="codeimg">
	                      	</div>
	                  	</div>
	                  	<div class="login-remember">
	                      	<label for="save">&nbsp;</label>
	                      	<a href="javascript:;" class="login-change fr" @click="changeLoginType(2)"><span>手机动态密码登录</span></a>
	                  	</div>
	                  	<div  class="login-btn" @click="login()" style="cursor:pointer">登  录</div>
	                  	<div class="login-out clearfix">
	                      	<router-link :to="{name:'register'}"><a href="javascript:;" >免费注册</a></router-link>
	                  	</div>
	              	</form>

              		<!-- 手机验证码登录 -->
              		<form class="login-phone licitform" v-if="loginType==2" @submit.native.prevent>
	                  	<div class="login-input">
	                      	<input type="text" v-model="data.mobile"  placeholder="手机号" class="licit"  data-show="tips">
	                  	</div>
	
	                  	<div class="login-input clearfix">
	                  		<input type="text" placeholder="验证码" class="login-code fl licit" v-model="data.code" data-show="tips">
	                      	<div class="login-code-pic fr">
	                          	<img id="verify_btn" :src="codeSrc" style="float:left;cursor: pointer;" @click="showCode()" class="codeimg">
	                      	</div>
	                  	</div>
	
	                  	<div class="login-input clearfix">
	                      	<input type="text" v-model="data.smsCode" placeholder="短信动态码" class="login-code fl" >
	                      	<div class="login-code-pic fr co" id="send_scode" @click="sendMsg()" v-show="Verification">发送短信</div>
													<div class="login-code-pic fr co" id="send_scode" v-show="!Verification"><span>{{timer}}</span>秒后重新获取</div>
	                  	</div>
	                  	<p class="tips" id="tips"><img src="../assets/images/error.png"><span></span></p>
	                  	
	                  	<div class="login-btn" @click="loginForPhone()" style="cursor:pointer">登  录</div>
	                  	
	                  	<div class="clearfix">
	                     	<a class="back-login" href="javascript:;"  @click="changeLoginType(1)"> < 返回账号登录</a>
	                  	</div>
              		</form>
          		</div>
      		</div>
    	</div>

    	<v-footersimper></v-footersimper>
	</div>
</template>

<script>
// import $ from "jquery";
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc,token } from '../rpc/index';
import { HOST } from '../config';
   
export default {
  data () {
    return {
      	HOST:HOST,
      	codeSrc:'',
      	data:{
      		mobile:'15119276805',
      		passWord:'123456',
      		code:'',
      		smsCode:'',
				},
				Verification:true,
				timer:60,
      	loginType:1,
      	rules: {
					mobile: [
						{ required: true, message: '手机号码不能为空', trigger: 'blur' }
					],
					passWord: [
						{ required: true, message: '密码不能为空', trigger: 'blur' }
					],
					code: [
						{ required: true, message: '验证码不能为空', trigger: 'blur' }
					],
        },
      	
    }
  },
  components: {
      vHeader,
      vSider,
      vFootersimper
  },
  	created() {
  		this.showCode();
 	},
  	methods: {
  		//显示图片验证码
		showCode() {
			this.codeSrc = this.HOST+'common/code?t='+Math.random()      
			console.log(this.codeSrc);
		},
		//切换登陆
		changeLoginType(type){
			this.loginType = type;
		},
		//发送短信
		sendMsg(){
			if(this.data.code==null || this.data.code ==""){
				layer.msg("请输入图片验证码")
				return ;
			}
			this.Verification = false;      //点击button改变v-show的状态
			let auth_timer = setInterval(()=>{  //定时器设置每秒递减
				this.timer--;        //递减时间
				if(this.timer<=0){  
					this.Verification = true;    //60s时间结束还原v-show状态并清除定时器
					clearInterval(auth_timer)
					this.timer=60
				}
			},1000)
			webRpc.invokeCross("shortMessageWebRpc.sendVerCode","LOGIN",this.data.mobile,this.data.code).then(result=>{
            if(result.retCode==0){
            		layer.msg("手机验证码已发送，请注意查收");
      			}else{
        			layer.msg(result.message);
      			}
		   	}).catch(error =>{});
		},
		//普通登陆
		login(){
			webRpc.invokeCross("memberWebRpc.login",this.data.mobile,this.data.passWord,this.data.code).then(result=>{
				if(result.retCode==0){
                	token.setAuthToken(result.data);
                	this.getCurrentMemeber();
				}else{
					layer.msg(result.message);
				}
		    }).catch(error =>{});
		},
		//手机登陆
		loginForPhone(){
			webRpc.invokeCross("memberWebRpc.loginForPhoneCode",this.data.mobile,this.data.smsCode).then(result=>{
				console.log(result);
				if(result.retCode==0){
                token.setAuthToken(result.data);
                this.getCurrentMemeber();
				}else{
					layer.msg(result.message);
				}
		    }).catch(error =>{});
		},
		//获取当前用户
		getCurrentMemeber(){
			webRpc.invokeCross("memberWebRpc.currentMember").then(result=>{
            	console.log("-----------------------"+result);
                sessionStorage.setItem('currentMember',JSON.stringify(result.data));
                //清空购物车
                sessionStorage.removeItem("car");
                console.log("清空car");
                this.$router.push('/index');
		   	}).catch(error =>{});
		}
	}
};
</script>
