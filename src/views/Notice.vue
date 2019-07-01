<template>
  <div class="partnership">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div id="index-banner">
        <div class="wrap"><img src="../assets/images/noticebanner.jpg" class="banner-bg">
        </div>
    </div>
    <div id="index-notice">
        <div class="wrap">
            <div class="notice-head">
                <div class="notice-item">
                        <div class="notice-pic fl">
                          <a>
                            <img src="http://pic.ceshigo.com//20181205/2018120516582111796948.jpg"></a>
                        </div>
                        <div class="notice-text">
                            <h3><a>预存活动</a></h3>
                            <p>预存便捷有好礼！！！</p>
                            <h4>
                                <router-link :to="{name:'NoticeFirst'}"><a href="javascript:void(0);">阅读全文</a></router-link>
                            </h4>
                            <div class="notice-tip">
                                <span>2018-06-06</span>
                                <span class="nitoce-read">12</span>
                            </div>
                        </div>
                </div>
                <div class="notice-item">
                        <div class="notice-pic fl">
                          <a><img src="http://pic.ceshigo.com//20190304/2019030415144024972246.jpg"></a>
                        </div>
                        <div class="notice-text">
                            <h3><a>发paper领红包</a></h3>
                            <p>发paper领红包</p>
                            <h4>
                                <router-link :to="{name:'NoticeFifth'}"><a href="javascript:void(0)">阅读全文</a></router-link> 
                            </h4>
                            <div class="notice-tip">
                                <span>2018-11-11</span>
                                <span class="nitoce-read">166</span>
                            </div>
                        </div>
                  </div>
            </div>
            <div class="notice-wrap">
                <div class="notice-item">
                        <h3>
                            <router-link :to="{name:'NoticeFirst'}"><a href="javascript:void(0)">预存活动</a></router-link>
                        </h3>
                        <div class="notice-tip">
                            <span>2018-06-06</span>
                            <span class="nitoce-read">12</span>
                        </div>
                        <p>预存便捷有好礼！！！</p>
                </div>
                <div class="notice-item">
                        <h3>
                            <router-link :to="{name:'NoticeFirst'}"><a href="javascript:void(0)">发paper领红包</a></router-link>
                        </h3>
                        <div class="notice-tip">
                            <span>2018-11-11</span>
                            <span class="nitoce-read">166</span>
                        </div>
                        <p>发paper领红包</p>
                </div>
                <div class="notice-item">
                        <h3>
                            <router-link :to="{name:'NoticeEighth'}"><a href="javascript:void(0)">双旦活动</a></router-link>
                        </h3>
                        <div class="notice-tip">
                            <span>2019-01-03</span>
                            <span class="nitoce-read">123</span>
                        </div>
                        <p>“双旦”将至，测试狗和“礼”一起“赢”新年！</p>
                </div>
                <div class="notice-item">
                        <h3>
                            <router-link :to="{name:'NoticeFourthly'}"><a href="javascript:void(0)">科研党也有双十一</a></router-link>
                        </h3>
                        <div class="notice-tip">
                            <span>2018-11-11</span>
                            <span class="nitoce-read">100</span>
                        </div>
                        <p>双十一来了，科研党们嗨起来！！！</p>
                </div>
                <div class="notice-item">
                        <h3>
                            <router-link :to="{name:'NoticeThirdly'}"><a href="javascript:void(0)">测试狗一直都在您身边</a></router-link>
                        </h3>
                        <div class="notice-tip">
                            <span>2018-11-11</span>
                            <span class="nitoce-read">100</span>
                        </div>
                        <p>其实，测试狗一直都在您身边！！！</p>
                </div>
                <div class="notice-item">
                        <h3>
                            <router-link :to="{name:'NoticeSecond'}"><a href="javascript:void(0)">微信版上线</a></router-link>
                        </h3>
                        <div class="notice-tip">
                            <span>2018-11-11</span>
                            <span class="nitoce-read">100</span>
                        </div>
                        <p>测试狗微信版网站正式上线啦！！！</p>
                </div>
                <div class="notice-item">
                        <h3>
                            <router-link :to="{name:'NoticeSeventh'}"><a href="javascript:void(0)">复测须知</a></router-link>
                        </h3>
                        <div class="notice-tip">
                            <span>2018-12-18</span>
                            <span class="nitoce-read">112</span>
                        </div>
                        <p>请大家在申请复测前仔细阅读下复测须知哦，谢谢！</p>
                </div>
                <div class="notice-item">
                        <h3>
                            <router-link :to="{name:'NoticeSixth'}"><a href="javascript:void(0)">取样时间表-成都地区</a></router-link>
                        </h3>
                        <div class="notice-tip">
                            <span>2018-12-17</span>
                            <span class="nitoce-read">128</span>
                        </div>
                        <p>为节约您和取样老师的时间， 请先准备好样品再下单哦</p>
                </div>
            </div>
            <ul class="pages index-pages">    
            </ul>    
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

