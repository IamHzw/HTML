<template>
  <div class="home">
    <header class="login-header">
        <a href="" id="logo" class="fl">
            <img src="../assets/images/logo.png">
        </a>
        <div id="place" class="fl">
            <span id="place-add"></span>
            <!-- <a id="place-change">切换</a>
            <div id="place-list">

            </div>-->
        </div>
        <div id="header-search" class="fl">
            <form action="" method="post">
                <input type="text" name="keywords" value="" placeholder="扫描电子显微镜">
                <button type="submit"></button>
            </form>
        </div>
        <div class="login-nav fl">
            <div>
                <a>所有测试</a>
                <div id="login-nav-list">
                </div>
            </div>
            <div>
                <a id="yjyy">一键预约</a>
                <div id="login-nav-list2" class="clearfix">

                </div>
                <form id="tempedit" action="">
                    <input type="hidden" id="tempid" name="tempid"/>
                    <input type="hidden" id="pid" name="pid"/>
                </form>
            </div>
            <div class="clearfix">
                <a href="">私人订制</a>
            </div>

        </div>
        <div class="l-phone fr" style="font-size: 18px;line-height: 30px">
          <div>400-152-6858</div>
        <div style="margin: 0 0 ">028-67872234</div></div>

        <div id="user-info" class="fr">
            <a href="" id="index-login">登录/注册</a>    
        </div>
        <div id="allmap" style="display: none;"></div>
    </header>
    <!-- <div id="mslide">
        <ul>
            <li>
                <a id="QQtent">
                  <i><img src="../assets/images/slideqq.png"></i>
                  <p>在线客服</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i><img src="../assets/images/slidep.png"></i>
                    <p>联系我们</p>
                    <div class="mslide"><h4>400-152-6858</h4></div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i><img src="../assets/images/slidewx.png"></i>
                    <p>关注微信</p>
                    <div class="mslide"><img src="../assets/images/ewm.png"></div>
                </a>
            </li>
        </ul>
        <div id="goTop"></div>
    </div> -->
    <div class="detail-login">
        为方便您预约，请提前登录<a class="detail-login-btn" href="#">立即登录</a><a class="detail-login-close">x</a>
    </div>
    <div class="detail-main">
        <div class="wrap">
            <div class="detail-swiper fl">
                <div class="swiper-container detail-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="width: 400px!important;height: 400px !important;">
                              <!--  <img src="http://pic.ceshigo.com/olddata/2017081421445194798.jpg" style="height: 100%;max-width: 100%; max-height: 100%;">-->
                                <div style="width: 400px;height: 400px; margin: 0 auto; background-image: url('http://pic.ceshigo.com/olddata/2017081421445194798.jpg');background-repeat: no-repeat;background-size: contain;overflow: hidden"></div>
                            </div>                </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="detail-prev"></div>
                <div class="detail-next"></div>
            </div>
            <div class="detail-wrap">
                <h2 style="    overflow: hidden;  width: 350px; text-overflow: ellipsis; white-space: nowrap;">X射线衍射仪（XRD）</h2>
                <!-- <h3>掠入射、小角XRD</h3>-->
                <div class="detail-tip" style="margin-top: -10px">
                    <span>已预约<span>1652</span>次</span>
                    <span>平均<span>2.5天</span>完成</span>
                    <span><span>100%</span>满意率</span>
                </div>
                <div class="detail-choose clearfix">
                    <!--  <span data-id="497">广角衍射（5-85°）<br/>￥50.00/样 </span>-->
                        <span data-id="497">广角衍射（5-85°）<br/> </span><!--  <span data-id="498">掠入射GIXRD<br/>￥200.00/样 </span>-->
                        <span data-id="498">掠入射GIXRD<br/> </span><!--  <span data-id="499">二维衍射（德拜环）<br/>面议 </span>-->
                        <span data-id="499">二维衍射（德拜环）<br/> </span><!--  <span data-id="500">摇摆曲线<br/>面议 </span>-->
                        <span data-id="500">摇摆曲线<br/> </span><!--  <span data-id="501">极图（织构）<br/>￥200.00/晶面 </span>-->
                        <span data-id="501">极图（织构）<br/> </span><!--  <span data-id="502">变温测试<br/>￥400.00/小时 </span>-->
                        <span data-id="502">变温测试<br/> </span><!--  <span data-id="504">旋转测试<br/>面议 </span>-->
                        <span data-id="504">旋转测试<br/> </span><!--  <span data-id="505">残余应力<br/>面议 </span>-->
                        <span data-id="505">残余应力<br/> </span><!--  <span data-id="506">透射测试<br/>面议 </span>-->
                        <span data-id="506">透射测试<br/> </span><!--  <span data-id="507">微区(最小0.5X0.5mm)<br/>面议 </span>-->
                        <span data-id="507">微区(最小0.5X0.5mm)<br/> </span><!--  <span data-id="561">小角衍射（0.2-5°）<br/>￥200.00/样 </span>-->
                        <span data-id="561">小角衍射（0.2-5°）<br/> </span><!--  <span data-id="604">精修<br/>面议 </span>-->
                        <span data-id="604">精修<br/> </span><!--  <span data-id="646">位错密度<br/>￥1200.00/样 </span>-->
                        <span data-id="646">位错密度<br/> </span><!--  <span data-id="814">全反射（XRR）<br/>面议 </span>-->
                        <span data-id="814">全反射（XRR）<br/> </span><!--  <span data-id="1020">倒易空间 RSM<br/>￥400.00/小时 </span>-->
                        <span data-id="1020">倒易空间 RSM<br/> </span>            </div>
                <!--            <div style="display: inline-block;margin:10px 0 15px 0px;white-space:normal; width:500px;word-wrap: break-word ">广角衍射、掠入射GIXRD、全反射、变温测试、微区（最小0.5X0.5 mm）、小角衍射、二维衍射、精修、摇摆曲线</div>-->
                <div class="detail_des">掠入射、小角XRD</div>
                <div class="detail-btns clearfix">
                    <a id="checkids" href="#">立即预约</a>
                    <a id="collection" class="iconfont  detail_xin_font" data-id="137"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="detail-data">
    <div class="wrap">
        <div class="detail-require">
            <p style="word-wrap:break-word; width:1100px;"> <span style="color: red ;font-size: 14px;font-weight: bold">送样须知</span>:金属样品如块状、板状、圆拄状要求磨成一个平面,面积不小于10X10毫米,如果面积太小可以用几块粘贴一起。 对于片状、圆拄状样品会存在严重的择优取向,衍射强度异常。因此要求测试时合理选择响应的方向平面。 粉末样品要求磨成320目的粒度,约40微米。粒度粗大衍射强度底,峰形不好,分辨率低。要了解样品的物理化学性质,如是否易燃,易潮解,易腐蚀、有毒、易挥发。 粉末样品要求在30毫克。 样品可以是金属、非金属、有机、无机材料粉末。</p>
        </div>
        <div class="detail-nav-wrap">
            <div class="detail-nav clearfix">
                <a href="#function">功能介绍</a>
                <a href="#case">测试案例</a>
                <a href="#latest">最近预约</a>
                <a href="#about">相关资料</a>
            </div>
        </div>
        <div class="detail-tabList">
            <div>
                <div id="function" class="href"></div>
                <div class="detail-text11 detail-function" >
                    广角衍射、掠入射GIXRD、全反射、变温测试、微区（最小0.5X0.5 mm）、小角衍射、二维衍射、精修、摇摆曲线                </div>
            </div>
            <div>
                <div id="case" class="href"></div>
                <div class="detail-text"><img title="测试案例-20190328-XRD-logo.jpg" alt="测试案例-20190328-XRD-logo.jpg" src="http://pic.ceshigo.com/20190328/2019032817263262979854.jpg" /></div>
            </div>
            <div>
                <div id="latest" class="href"></div>
                <div class="detail-text detail-table">

                    <div class="table_box">

                        <div class="table_row clearfix">
                                <div>*霁</div>
                                <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
        white-space: nowrap;" title="中国工程物理研究院">中国工程物理研究院</div>
                                <div>186****5803</div>
                                <div>2019-06-05 16:15:32</div>
                            </div><div class="table_row clearfix">
                                <div>*霁</div>
                                <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
        white-space: nowrap;" title="中国工程物理研究院">中国工程物理研究院</div>
                                <div>186****5803</div>
                                <div>2019-06-05 15:27:57</div>
                            </div><div class="table_row clearfix">
                                <div>*铭洋</div>
                                <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
        white-space: nowrap;" title="四川纳创时代新能源科技有限公司">四川纳创时代新能源科技有限公司</div>
                                <div>187****2682</div>
                                <div>2019-06-05 15:23:25</div>
                            </div><div class="table_row clearfix">
                                <div>*雨</div>
                                <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
        white-space: nowrap;" title="电子科技大学">电子科技大学</div>
                                <div>184****5428</div>
                                <div>2019-06-05 07:58:16</div>
                            </div><div class="table_row clearfix">
                                <div>*燕茹</div>
                                <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
        white-space: nowrap;" title="四川大学">四川大学</div>
                                <div>182****0110</div>
                                <div>2019-06-04 17:56:50</div>
                            </div><div class="table_row clearfix">
                                <div>*康</div>
                                <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
        white-space: nowrap;" title="四川大学">四川大学</div>
                                <div>151****2991</div>
                                <div>2019-06-04 16:18:44</div>
                            </div><div class="table_row clearfix">
                                <div>*铭洋</div>
                                <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
        white-space: nowrap;" title="四川纳创时代新能源科技有限公司">四川纳创时代新能源科技有限公司</div>
                                <div>187****2682</div>
                                <div>2019-06-04 15:53:26</div>
                            </div><div class="table_row clearfix">
                                <div>*宇程</div>
                                <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
        white-space: nowrap;" title="西南石油大学">西南石油大学</div>
                                <div>135****8326</div>
                                <div>2019-06-04 12:46:27</div>
                            </div>

                    </div>
                </div>
            </div>
            <div>
                <div id="about" class="href"></div>
                <div class="detail-text weixin_box clearfix">

                    <div class="weixin_app">
                        <img src="static/images/weixin.png">
                    </div>
                    <div class="weixin_bus">
                        <p>第一步，扫码关注测试GO微信公众号，</p>
                        <p>第二步，在公众号内留言“<span>XRD</span>”即可获取相关资料</p>
                        <p>若您觉得我们的经验资料分享有意思，或者发现有哪些资料不完善</p>
                        <p>欢迎联系我们的客服微信（goxiaomei666）进行投稿，用您的知识和经验帮助其他人。</p>
                        <p>若您的经验得到我们的采纳，即可获取<span>精美礼品以及京东购物</span>卡奖励。</p>
                        <p>
                            邮箱投稿：<span class="detail_toEmail">kf01@ceshigo.com</span>，电话咨询：400-152-6858
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<footer style="bottom: 0" class="foots">
    @2018 测试狗  All Rights Reserved  成都世纪美扬科技有限公司 蜀公网安备11010802021135号  蜀ICP备150033号<img src="static/images/footer.jpg">
</footer>
  </div>
</template>

<script>
import $ from "jquery";
// import "./style/swiper.css";
// import "../components/swiper.js";
export default {
  data () {
    return {
      
    }
  },
  
};
</script>

<style scoped>
  
</style>
