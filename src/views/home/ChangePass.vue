<template>
  <div>
    <div id="slide-main">
        <div class="order change-phone">
            <h2>个人设置<span>修改密码</span></h2>
            <div class="phone-wrap">
                <form  class="licitform" @submit.native.prevent>
                    
                    <dl>
                        <dt>图文验证码：</dt>
                        <dd>
                            <div class="phone-change-box">
                                <input type="text" class="code-input licit" v-model="code" />
                                <img id="verify_btn" :src="codeSrc" style="float:left;cursor: pointer;" @click="showCode()" class="codeimg">
                            </div>
                        </dd>
                    </dl>

                    <dl>
                        <dt>短信验证码：</dt>
                        <dd>
                            <div class="phone-change-box">
                                <input type="text" v-model="smsCode"  class="code-input licit" />
                                <!-- <button type="button" @click="sendMsg()" class="send-code">获取验证码</button> -->
                                <div class="login-code-pic fr co" id="send_scode" @click="sendMsg()" v-show="Verification">发送短信</div>
								<div class="login-code-pic fr co" id="send_scode" v-show="!Verification"><span>{{timer}}</span>秒后重新获取</div>
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt>新密码：</dt>
                        <dd>
                            <div class="phone-change-box">
                                <input type="password" v-model="passWord" class="phone-input licit" >
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt>确认密码：</dt>
                        <dd>
                            <div class="phone-change-box">
                                <input type="password" v-model="passWord2" class="phone-input licit" >
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt> <p class="tips" id="tips"><img src="../../assets/images/error.png"><span></span></p></dt>
                        <dd><input type="buttom" @click="changePassWord()" class="btn ticket-btn" value="提  交" > </dd>
                    </dl>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery';
import { webRpc } from '../../rpc/index';
import { HOST } from '../../config';

export default {
    data () {
        return {
        	HOST:HOST,
            currentMember:{},
            codeSrc:'',
            passWord:'',
            code:'',
            smsCode:'',
            Verification:true,
		    timer:60,
        }
    },
    created () {
		if(sessionStorage.currentMember!=null){
			this.currentMember = JSON.parse(sessionStorage.getItem('currentMember'))
        }
        this.showCode();
    },
    methods: {
		//显示图片验证码
		showCode() {
			this.codeSrc = this.HOST+'common/code?t='+Math.random()      
		},
		//发送短信
		sendMsg(){
		
			if(this.code==null || this.code ==""){
				layer.msg("请输入图片验证码");
				this.showCode();
				return ;
            }
            this.Verification = false;
            let auth_timer = setInterval(()=>{  //定时器设置每秒递减
				this.timer--;        //递减时间
				if(this.timer<=0){  
					this.Verification = true;    //60s时间结束还原v-show状态并清除定时器
					clearInterval(auth_timer)
					this.timer=60
				}
			},1000)
			webRpc.invokeCross("shortMessageWebRpc.sendVerCode","PASSWORD",this.currentMember.mobile,this.code).then(result=>{
            	if(result.retCode==0){
            		layer.msg("手机验证码已发送，请注意查收");
      			}else{
        			layer.msg(result.message);
      			}
		   	}).catch(error =>{});
		},
		//发送短信
		changePassWord(){
		
			
			if(this.smsCode==null || this.smsCode ==""){
				layer.msg("请输入短信验证码")
				return ;
			}
			webRpc.invokeCross("memberWebRpc.changePassWord",this.currentMember.id,this.passWord,this.currentMember.mobile,this.smsCode).then(result=>{
            	if(result.retCode==0){
            		layer.msg("密码修改成功");
            		this.$router.push('/home/personal');
      			}else{
        			layer.msg(result.message);
      			}
		   	}).catch(error =>{});
		},
		
  
    }
}

</script> 

