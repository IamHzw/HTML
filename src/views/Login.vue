<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>

    <div id="login-content" class="login_back">
      <div class="login loginCAdd" style="margin: 0 auto">
          <h2>测试狗账号登录</h2>
          <div>
              <!-- 密码登录 -->
              <form class="login-name licitform" id="acc-form" action="index.php-m=&amp;c=User&amp;a=login.html" method="post">
                  <div class="login-input">
                      <input type="text" placeholder="手机号" id="username" name="username" class="licit" data-rules="['用户名','1']" data-show="acctips">
                  </div>
                  <div class="login-input">
                      <input type="password" placeholder="登录密码" id="userpwd" name="userpwd" class="licit" data-rules="['密码','1']" data-show="acctips">
                      <a href="index.php-m=&amp;c=User&amp;a=forget.html">忘记密码</a>
                  </div>
                  <div class="login-input clearfix">
                      <input type="text" name="verify" placeholder="验证码" class="login-code fl licit" data-rules="['验证码','1']" data-show="acctips">
                      <div class="login-code-pic fr">
                          <img id="verify_btn" src="index.php-m=&amp;c=Public&amp;a=verify&amp;ajax=t.png" style="float:left;cursor: pointer;" onclick="this.src='/index.php?m=&c=Public&a=verify&ajax=_verify&t='+Math.random();" class="codeimg">
                      </div>
                  </div>
                  <div class="login-remember">
                      <input type="checkbox" name="rememberUser"  checked="true" id="save"/><label for="save">30天内自动登录</label>
                      <a class="login-change fr"><span>手机动态密码登录</span></a>
                  </div>
                  <p class="tips" id="acctips"><img src="static/images/cha.png">
                      <span></span>
                  </p>
                  <input type="hidden" name="login_way" value="account">
                  <button type="submit" class="login-btn">登  录</button>
                <!--  <p><a onclick="retest()">服务协议</a>和<a onclick="conceal()">隐私政策</a></p>-->
                  <div class="login-out clearfix">
                  <!--   <a><img src="/static/images/qql.png"></a>
                      <a><img src="/static/images/bdl.png"></a>
                      <a><img src="/static/images/wbl.png"></a>
                      <a><img src="/static/images/wxl.png"></a>-->
                      <a href="index.php-m=&amp;c=User&amp;a=register.html">免费注册</a>
                  </div>
              </form>

              <!-- 手机验证码登录 -->
              <form class="login-phone licitform" action="index.php-m=&amp;c=User&amp;a=login.html" style="display: none" method="post">
                  <div class="login-input">
                      <input type="text" id="phone" name="phone" placeholder="手机号" class="licit" data-rules="['手机号','1','11','phone']" data-show="tips">
                  </div>

                  <div class="login-input clearfix">
                      <input type="text" placeholder="验证码" id="verify" name="verify" class="login-code fl licit" data-rules="['验证码','1']" data-show="tips">
                      <div class="login-code-pic fr">
                          <img src="index.php-m=&amp;c=Public&amp;a=verify&amp;ajax=t.png" style="float:left;cursor: pointer;" onclick="this.src='/index.php?m=&c=Public&a=verify&ajax=_verify&t='+Math.random();" class="codeimg"></div>
                  </div>

                  <div class="login-input clearfix">
                      <input type="text" placeholder="短信动态码" class="login-code fl" name="sms_code">
                      <div class="login-code-pic fr co" id="send_scode" data-beid="355782">发送短信</div>
                  </div>
                  <input type="hidden" name="login_way" value="mobile">
                  <p class="tips" id="tips"><img src="static/images/error.png"><span></span></p>
                  <button type="submit" class="login-btn">登  录</button>
                  <!--<p><a onclick="retest()">服务协议</a>和<a onclick="conceal()">隐私政策</a></p>-->
                  <div class="clearfix">
                      <a class="back-login"> < 返回账号登录</a>
                  </div>
              </form>
          </div>
      </div>
    </div>

    <!-- <div id="apply" >
      <h2>服务协议</h2>
      <div class="read-cont">
          <h1 align="center" style="text-align:center;">
            <b>注册协议</b><b></b>
          </h1>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            <b>【审慎阅读】</b>事关您与本平台发生业务往来时的权利义务及切身利益，请您在申请注册流程中点击同意前，认真阅读以下协议。<b><u>请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</u></b>
          </p>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            1、<b><u>与您约定免除或限制责任的条款；</u></b>
          </p>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            2、<b><u>与您约定法律适用和管辖的条款；</u></b>
          </p>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            3、<b><u>其他以粗体下划线标识的重要条款。</u></b>
          </p>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            如您对协议有任何疑问，可向平台客服咨询。
          </p>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            <b>【特别提示】</b>当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与测试狗发生争议的，适用《测试狗平台服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。
          </p>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            <b><u>阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</u></b>
          </p>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            本注册协议包含内容如下：
          </p>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            <b>《测试狗平台服务协议》</b><b></b>
          </p>
          <p class="MsoNormal" style="margin-left:3.75pt;background:#FFFFFF;">
            <b>《法律声明及保密政策》</b><b></b>
          </p>     
      </div>
      <a class="close"></a>
    </div> -->
    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
import $ from "jquery";
// import "./style/swiper.css";
// import "../components/swiper.js";
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
export default {
  data () {
    return {
      
    }
  },
  components: {
      vHeader,
      vSider,
      vFootersimper
  },
};
</script>

<style scoped>
/* .home{
  width: 100%;
  height: 100%; 
  overflow: hidden;
} */
</style>
