<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div class="detail-main">
        <div class="wrap">
            <div class="detail-swiper fl">
                <div class="swiper-container detail-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="width: 400px!important;height:400px !important;">
                                <div style="width: 400px;height: 400px; margin: 0 auto; background-image: url('http://pic.ceshigo.com/20190318/2019031813145493666788.png');background-repeat: no-repeat;background-size: contain;overflow: hidden"></div>
                        </div>                
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="detail-prev"></div>
                <div class="detail-next"></div>
            </div>
            <div class="detail-wrap">
                <h2 style="overflow: hidden;  width: 350px; text-overflow: ellipsis; white-space: nowrap;">聚焦离子束（FIB）</h2>
                <div class="detail-tip" style="margin-top: -10px">
                    <span>已预约<span>115</span>次</span>
                    <span>平均<span>7天</span>完成</span>
                    <span><span>100%</span>满意率</span>
                </div>
                <div class="detail-choose clearfix">
                    <span data-id="592">制备SEM样品</span>
                    <span data-id="593">制备TEM样品</span>
                    <span data-id="594">其他加工要求</span>
                    <span data-id="831">制备EBSD样品</span>
                    <span data-id="832">制备3DAP样品</span>
                    <span data-id="833">三维重构</span>            
                </div>
                <div class="detail_des">最快可一周内出数据</div>
                <div class="detail-btns clearfix">
                    <span id="checkids">立即预约</span>
                    <span id="checkids">购物车</span>
                    <a id="collection" class="iconfont detail_xin_font" data-id="161" @click="collection"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="detail-data">
        <div class="wrap">
            <div class="detail-require">
                <p style="word-wrap:break-word; width:1100px;"> <span style="color: red ;font-size: 14px;font-weight: bold">送样须知</span>:1. 请注明样品导电性，成分和类型；2.  请注明加工目的，或需要获得的样品尺寸</p>
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
                        TEM透射样品制备：特别是对于表面薄膜、涂层、微米级大颗粒TEM样品；焊接界面TEM样品，晶界界面以及相界面等TEM样品的制备具有强大优势；SEM扫描电子显微镜结构分析：可进行二次电子形貌分析且图像分辨率高、背散射电子衬度分析、EDS能谱分析；EBSD电子背散射衍射分析：可进行晶体取向成像、显微织构、界面等分析，分析速度快，标定准确度高；微纳结构加工：在微纳结构操作机械手、Omniprobe操作探针、离子束切割等的配合下，可以进行各种微纳结构的搬运、各种显微结构形状或图案的加工；力学及电学性能测试：通过相应的附件，可以实现微纳结构的力学和电学性能测试；三维重构分析：AutoSlice and View 自动连续磨削和观察，采集系列切片图像，获得三维重构图像                </div>
                </div>
                <div>
                    <div id="case" class="href"></div>
                    <div class="detail-text"><img src="http://pic.ceshigo.com/20190327/2019032717011821229266.jpg" title="测试案例-20190327-FIB-logo.jpg" alt="测试案例-20190327-FIB-logo.jpg" /></div>
                </div>
                <div>
                    <div id="latest" class="href"></div>
                    <div class="detail-text detail-table">
                        <div class="table_box">
                            <div class="table_row clearfix">
                                    <div>*音</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
            white-space: nowrap;" title="清华大学化工系">清华大学化工系</div>
                                    <div>182****5629</div>
                                    <div>2019-06-03 14:41:53</div>
                            </div>
                            <div class="table_row clearfix">
                                    <div>*弛</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
            white-space: nowrap;" title="吉林大学">吉林大学</div>
                                    <div>188****7695</div>
                                    <div>2019-05-28 18:12:49</div>
                            </div>
                            <div class="table_row clearfix">
                                    <div>*甲鹏</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
            white-space: nowrap;" title="河海大学江宁校区">河海大学江宁校区</div>
                                    <div>133****4178</div>
                                    <div>2019-05-28 14:31:14</div>
                            </div>
                            <div class="table_row clearfix">
                                    <div>*可荆</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
            white-space: nowrap;" title="四川大学">四川大学</div>
                                    <div>135****0279</div>
                                    <div>2019-05-28 10:57:54</div>
                            </div>
                            <div class="table_row clearfix">
                                    <div>*雪</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
            white-space: nowrap;" title="湘潭大学">湘潭大学</div>
                                    <div>157****2201</div>
                                    <div>2019-05-20 11:56:44</div>
                            </div>
                            <div class="table_row clearfix">
                                    <div>*笑乙</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
            white-space: nowrap;" title="中南大学">中南大学</div>
                                    <div>159****2787</div>
                                    <div>2019-05-15 09:56:26</div>
                            </div>
                            <div class="table_row clearfix">
                                    <div>*奇</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
            white-space: nowrap;" title="激光聚变研究中心">激光聚变研究中心</div>
                                    <div>158****7300</div>
                                    <div>2019-05-13 12:04:17</div>
                            </div>
                            <div class="table_row clearfix">
                                    <div>*明胜</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;
            white-space: nowrap;" title="华中科技大学机械科学与工程学院">华中科技大学机械科学与工程学院</div>
                                    <div>180****3075</div>
                                    <div>2019-05-06 21:35:43</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="about" class="href"></div>
                    <div class="detail-text weixin_box clearfix">

                        <div class="weixin_app">
                            <img src="../assets/images/weixin.png">
                        </div>
                        <div class="weixin_bus">
                            <p>第一步，扫码关注测试GO微信公众号，</p>
                            <p>第二步，在公众号内留言“<span></span>”即可获取相关资料</p>
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
    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
import $ from "jquery";
import '../style/layer';
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
  created () {
    this.$nextTick(()=>{
      this.init()
    })
  },
  methods: {
    collection(){
    //   var $self = $(this);
    //   console.log($self)
    //   var pid = $self.attr('data-id');
    //    this.$layer.alert("找不到对象！");
            layer.msg('hello');
    //   $.ajax({
    //       url: "/index.php?m=&c=Collection&a=coll_sub",
    //       type: 'post',
    //       data: {pid: pid},//
    //       success: function (data) {
    //           console.log(data);
    //           layer.tips(data.message, $self, {
    //               tips: [1, '#9C9FA6'] //还可配置颜色
    //           });
    //       }
    //   });
    },
    init(){
      var changeTab = {
            xinFlag: false,
            init: function () {
                this.change('.detail-nav a', '.detail-tabList');
                this.changeXin('.detail-btns')
            },
            change: function (cli, tab) {
                cli && tab && (function () {
                    $(cli).click(function () {
                        var index = $(this).index();
                        $(cli).each(function () {
                            $(this).css({
                                backgroundColor: '#F2F2F2'
                            });
                        });
                        $(this).css({
                            backgroundColor: '#fff'
                        });
                        if (index !== null && index !== 'undefined' && index !== '') {
                            $(tab + '>div').each(function () {
                                $(this).css({
                                    display: 'none',
                                });
                            })
                            $(tab + '>div').eq(index).css('display', 'block');

                        }
                    })
                }())
            },
            changeXin: function (ele) {
                if (ele) {
                    $(ele + '>a').eq(1).click(function () {
                        if (!changeTab.xinFlag) {
                            $(this).removeClass('icon-xin1')
                            $(this).addClass('icon-xin')
                        } else {
                            $(this).removeClass('icon-xin')
                            $(this).addClass('icon-xin1')
                        }
                        changeTab.xinFlag = !changeTab.xinFlag;
                    })
                }
            }
      };
        changeTab.init();
        $('.detail-choose span').click(function () {
            $(this).toggleClass('ac');
            var ids = '';
            $('.detail-choose span').each(function () {
                if ($(this).attr('class') == 'ac') {
                    ids += $(this).attr("data-id") + ',';
                }
            });

            var href = "/index.php?m=Home&c=Project&a=order&pid=161&ids=";
            $('#checkids').attr("href", href + ids);
        });
        //  收藏改变图标
        var isisCollection = "0";
        if (isisCollection > 0) {
            $("#collection").addClass('icon-xin')
        } else {
            $("#collection").addClass('icon-xin1')
        }
    }
  }
}
</script>

<style scoped>

</style>

