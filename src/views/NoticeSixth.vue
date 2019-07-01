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
                <h2>取样时间表-成都地区</h2>
                <h3>2018-12-17 14:39:18  来源：本站  浏览：128次</h3>
                <div class="article-text">
                    <p class="MsoNormal" align="center" style="text-align:center;">
                        <img src="http://pic.ceshigo.com/20181217/2018121714391061756666.png" title="取样时间.png" alt="取样时间.png" /> 
                    </p>
                    <p class="MsoNormal" align="center" style="text-align:center;">
                        <strong>其它分部的取样以与取样老师的协商时间为准，谢谢大家的关注和支持！</strong> 
                    </p>            
                </div>
                <div class="article-btns">
                    <p>上一篇：<a href="index.php-m=&amp;c=Bulletin&amp;a=detail&amp;id=10010.html">发paper领红包</a></p>                <p>下一篇：<a href="index.php-m=&amp;c=Bulletin&amp;a=detail&amp;id=10012.html">复测须知</a></p>                <a class="article-return" href="index.php-m=&amp;c=Bulletin&amp;a=index.html">返回列表》</a>
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

