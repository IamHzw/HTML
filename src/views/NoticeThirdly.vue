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
                <h2>测试狗一直都在您身边</h2>
                <h3>2018-11-11 15:32:13  来源：本站  浏览：100次</h3>
                <div class="article-text">
                    <p>
                        <br />
                    </p>
                    <p>
                        亲爱的研友，测试狗一直都在您身边，目前测试狗已开通成都、武汉、重庆、昆明、长沙和太原等办事处。
                    </p>
                    <p>
                        <img src="http://pic.ceshigo.com/20190103/2019010311403670316359.jpg" title="测试狗海报-电脑端-公告.jpg" alt="测试狗海报-电脑端-公告.jpg" /> 
                    </p>
                    <p>
                        以上区域可免费上门取样，其他省市的分部正在积极筹建中，您可通过邮寄的方式将样品寄送给我们，我们承诺所有快递邮寄到付，不用您承担邮寄的费用！也许在不久的将来，您科研路上可靠的好伙伴——测试狗会悄悄来到您身边，敬请关注官网（www.ceshigo.com）、官微（测试GO）动态，期待在您的城市<span style="background-color:transparent;color:#000000;font-family:&amp;font-size:12px;font-style:normal;font-weight:400;line-height:18px;text-decoration:none;">遇见最可靠的测试狗</span>！
                    </p>            
                </div>
                <div class="article-btns">
                    <p>上一篇：<a href="index.php-m=&amp;c=Bulletin&amp;a=detail&amp;id=10007.html">微信版上线</a></p>                <p>下一篇：<a href="index.php-m=&amp;c=Bulletin&amp;a=detail&amp;id=10009.html">科研党也有双十一</a></p>                <a class="article-return" href="index.php-m=&amp;c=Bulletin&amp;a=index.html">返回列表》</a>
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

