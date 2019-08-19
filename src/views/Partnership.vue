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
              星尘实验室致力于构建市场化运营的“互联网+科研”综合服务平台，聚集国内外著名高校、科研院所、
            </h3>
            <h3>
              第三方检测机构及科技服务企业等顶尖科研机构的科研资源 （包括：科学仪器、实验服务、专家学者、科技成果等），
            </h3>
            <h3>
              为广大企事业单位科研团队及工作人员提供仪器共享、实验外包、分析测试、计算模拟、 科研众包以及定制化研发解决方案。
            </h3>
            <div class="coopreason-wrap">
              <div class="coopreason-item">
                <div class="coopreason-pic">
                  <img src="../assets/images/Partnership_icon_2.jpg" title="coop1.jpg" alt="coop1.jpg" /> 
                </div>
                <h4>
                  业务支持
                </h4>
                <p>
                  专属合作伙伴拓展经理提供业务支持和商务支持，帮助您在云计算领域取得成功。
                </p>
              </div>
              <div class="coopreason-item">
                <div class="coopreason-pic">
                  <img src="../assets/images/Partnership_icon_3.jpg" title="coop2.jpg" alt="coop2.jpg" /> 
                </div>
                <h4>
                  市场与营销支持
                </h4>
                <p>
                  客户沙龙、研讨会，行业展会等丰富的市场和营销机会
                </p>
              </div>
              <div class="coopreason-item">
                <div class="coopreason-pic">
                  <img src="../assets/images/Partnership_icon_4.jpg" title="coop3.jpg" alt="coop3.jpg" /> 
                </div>
                <h4>
                  培训赋能支持
                </h4>
                <p>
                  大量的技术培训赋能机会，快速提升合作伙伴技术服务能力。
                </p>
              </div>
              <div class="coopreason-item">
                <div class="coopreason-pic">
                  <img src="../assets/images/Partnership_icon_5.jpg" title="coop4.jpg" alt="coop4.jpg" /> 
                </div>
                <h4>
                  专业技术支持
                </h4>
                <p>
                  专项技术领域获得星尘实验室专业团队的技术支持，在垂直市场获得领先优势。
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div id="coopform">
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

