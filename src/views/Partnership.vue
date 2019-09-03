<template>
  <div class="partnership">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div id="index-banner" class="coop-banner">
        <div class="wrap">
            <!--<img src="/static/images/coopbanner.jpg" class="banner-bg">-->
            <img src="../assets/images/Partnership_icon_1.jpg" class="banner-bg">
        </div>
    </div>
    <div id="coopreason">
        <div id="coopreason">
          <div class="wrap">
            <h2>
              了解星尘实验室
            </h2>
            <h3>
           		星尘实验室通过整合仪器设备机时资源，甄选优质仪器，寻找优秀的专家学者，专注于为广大科研团队和科研人员提供测试
           		分析、微纳加工、计算模拟、实验耗材供应以及定制化研发解决方案等高效、专业、高性价比的科研服务。
            </h3>
            <div class="coopreason-wrap">
              <div class="coopreason-item">
                <div class="coopreason-pic">
                  <img src="../assets/images/Partnership_icon_2.jpg" title="coop1.jpg" alt="coop1.jpg" /> 
                </div>
                <h4>
                  专属伙伴支持
                </h4>
                <p>
                  专属的业务经理提供技术服务和商务支持，助您在互联网+时代铸造辉煌业绩。
                </p>
              </div>
              <div class="coopreason-item">
                <div class="coopreason-pic">
                  <img src="../assets/images/Partnership_icon_3.jpg" title="coop2.jpg" alt="coop2.jpg" /> 
                </div>
                <h4>
                  专属方案支持
                </h4>
                <p>
                  专属的市场拓展计划方案，助您在市场捷足先登。
                </p>
              </div>
              <div class="coopreason-item">
                <div class="coopreason-pic">
                  <img src="../assets/images/Partnership_icon_4.jpg" title="coop3.jpg" alt="coop3.jpg" /> 
                </div>
                <h4>
                  营销支持
                </h4>
                <p>
                  技术研讨会、行业展会、客户沙龙等丰富多样的市场营销机会。
                </p>
              </div>
              <div class="coopreason-item">
                <div class="coopreason-pic">
                  <img src="../assets/images/Partnership_icon_5.jpg" title="coop4.jpg" alt="coop4.jpg" /> 
                </div>
                <h4>
                  技术培训支持
                </h4>
                <p>
                 大量的技术培训机会，快速提升您的技术能力。
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div id="coopform" v-if="false">
        <div class="wrap">
            <h2>立即申请成为星尘实验室合作伙伴</h2>
            <form id="coop" method="post" class="form">
                <div class="coopwrap">
                    <input type="text" value="" name="join_cmpname" class="licit" data-rules="['单位名称',1,120]" data-show="tips" placeholder="单位名称：" >
                </div>
                <div class="coopwrap">
                    <input type="text" value="" name="join_name" class="licit" data-rules="['联系人',1,32]" data-show="tips"  placeholder="联系人：">
                </div>
                <div class="coopwrap">
                    <input type="text" value="" name="join_mobile" class="licit" data-rules="['联系电话',1,20,'phone']" data-show="tips"  placeholder="联系电话：">
                </div>
                <div class="coopwrap">
                    <textarea name="join_content" placeholder="备注内容："></textarea>
                </div>
                <div class="coopwrap" align="center" >
                    <p class="tips" id="tips"><span></span></p>
                </div>
                <input type="reset" style="display:none;" />
                <button type="button" id="coop_sub">提交</button>

            </form>
        </div>
    </div>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFooter from "../components/vFooter.vue";
export default {
  data () {
    return {
      
    }
  },
  components: {
      vHeader,
      vSider,
      vFooter
  },
}
</script>

