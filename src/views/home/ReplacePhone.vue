<template>
  <div>
    <div id="slide-main">
        <div class="order change-phone">
            <h2>个人设置<span>更换认证手机</span></h2>
            <div class="phone-wrap">
                <form class="licitform">
                    <dl>
                        <dt>当前认证手机：</dt>
                        <dd>{{currentMember.mobile}}</dd>
                    </dl>
                    <dl>
                        <dt>更换认证手机：</dt>
                        <dd>
                            <div class="phone-change-box">
                                <input type="text" id="phone" name="phone" class="phone-input licit" data-rules="['手机号','1','11','phone']" data-show="tips">
                            </div>
                        </dd>
                    </dl>
                  <dl>
                        <dt>图文验证码：</dt>
                        <dd>
                            <div class="phone-change-box">
                                <input type="text" id="verify" name="verify" class="code-input licit" data-rules="['验证码','1','6']" data-show="tips">
                                <img id="verify_btn" :src="codeSrc" style="float:left;cursor: pointer;" @click="showCode()" class="codeimg">
                            </div>
                        </dd>
                    </dl>

                    <dl>
                        <dt>短信验证码：</dt>
                        <dd>
                            <div class="phone-change-box">
                                <input type="text" name="sms_code" class="code-input licit" data-rules="['短信验证码','1','6']" data-show="tips">
                                <button type="button" class="send-code" id="send_scode" data-beid="355785">获取验证码</button>
                            </div>
                        </dd>
                    </dl>
                    <dl>
                        <dt><p class="tips" id="tips"><img src="../../assets/images/error.png"><span></span></p></dt>
                        <dd><button type="submit" class="btn ticket-btn">提  交</button> </dd>
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
  
    }
}

</script> 
