<template>
  <div class="partnership">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div id="index-banner">
        <div class="wrap"><img src="../assets/images/noticebanner.jpg" class="banner-bg"></div>
    </div>
    <div id="index-article">
        <div class="wrap clearfix">
            <div class="article-cont fl">
                <h2>微信版上线</h2>
                <h3>2018-11-11 15:31:33  来源：本站  浏览：100次</h3>
                <div class="article-text">
                    <p style="text-indent:32pt;">
                        <span>测试狗移动端微信官网与大家见面啦！</span> 
                    </p>
                    <p style="text-indent:32pt;">
                        <img title="微信图片_20181112020047_meitu_7.png" alt="微信图片_20181112020047_meitu_7.png" src="http://pic.ceshigo.com/20181112/2018111203102291593133.png" /> 
                    </p>
                    <p style="text-indent:32pt;">
                        <span>全新的内容设计，全新的视觉表达，我们的目标就是提升用户体验感，有没有很期待呢！进入测试狗公众号（测试GO）即可体验。</span> 
                    </p>
                    <p style="text-indent:32pt;">
                        <img title="微信图片_20181112030807_meitu_17.jpg" alt="微信图片_20181112030807_meitu_17.jpg" src="http://pic.ceshigo.com/20181112/2018111203114008593173.jpg" /> 
                    </p>
                    <p style="text-indent:32pt;">
                        <span>用户可以直接在测试狗微信公众号（微信号：测试GO）进行注册、预约下单、审批测试订单（预存用户）、查看测试动态等操作。</span> 
                    </p>
                    <p style="text-indent:32pt;">
                        <span>如有任何疑问，可以致电400-152-6858或添加负责人微信：GO17318936377（GO三思）咨询。</span> 
                    </p>
                    <p style="text-indent:32pt;">
                        <span>感谢大家对平台的支持与信任，祝大家生活愉快！</span> 
                    </p>
                    <p style="text-indent:32pt;">
                        <span> </span> 
                    </p>
                    <p align="center" class="MsoNormal" style="text-align:center;">
                        <span></span> 
                    </p>
                    <br />
                    <p>
                        <br />
                    </p>            
                </div>
                <div class="article-btns">
                    <p>下一篇：<a href="index.php-m=&amp;c=Bulletin&amp;a=detail&amp;id=10008.html">测试狗一直都在您身边</a></p>                <a class="article-return" href="index.php-m=&amp;c=Bulletin&amp;a=index.html">返回列表》</a>
                </div>
            </div>
            <div class="article-slide fr">
                <h2>相关公告</h2>
                <ul>
                    <li>
                        <span>01</span>
                        <router-link :to="{name:'NoticeEighth'}"><a href="javascript:void(0);">双旦活动</a></router-link>
                    </li>
                    <li>
                        <span>02</span>
                        <router-link :to="{name:'NoticeSeventh'}"><a href="javascript:void(0)">复测须知</a></router-link>
                    </li>
                    <li>
                        <span>03</span>
                        <router-link :to="{name:'NoticeSixth'}"><a href="javascript:void(0)">取样时间表-成都地区</a></router-link>
                    </li>
                    <li>
                        <span>04</span>
                        <router-link :to="{name:'NoticeFifth'}"><a href="javascript:void(0)">发paper领红包</a></router-link>
                    </li>
                    <li>
                        <span>05</span>
                        <router-link :to="{name:'NoticeFourthly'}"><a href="javascript:void(0)">科研党也有双十一</a></router-link>
                    </li>
                    <li>
                        <span>06</span>
                        <router-link :to="{name:'NoticeThirdly'}"><a href="javascript:void(0)">测试狗一直都在您身边</a></router-link> 
                    </li>
                    <li>
                        <span>07</span>
                        <router-link :to="{name:'NoticeSecond'}"><a href="javascript:void(0)">微信版上线</a></router-link>
                    </li>
                    <li>
                        <span>08</span>
                        <router-link :to="{name:'NoticeFirst'}"><a href="javascript:void(0)">预存活动</a></router-link>
                    </li>
                </ul>
            </div>
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

