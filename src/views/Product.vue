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
                <h2 style="overflow: hidden;  width: 350px; text-overflow: ellipsis; white-space: nowrap;">{{data.title}}</h2>
                <div class="detail-tip" style="margin-top: -10px">
                    <span>已预约<span>{{data.buyNum}}</span>次</span>
                    <span>平均<span>{{data.finishDayAvg}}天</span>完成</span>
                    <span><span>{{data.goodRate}}%</span>满意率</span>
                </div>
                <div class="detail-choose clearfix">
                    <span  v-for="(item,index) in dataList">{{item.title}}</span>
                </div>
                <div class="detail_des">{{data.subTitle}}</div>
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
                <p style="word-wrap:break-word; width:1100px;"> <span style="color: red ;font-size: 14px;font-weight: bold">
                	送样须知</span>:
                	<span v-html="data.attention"></span>
                </p>
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
                    <div class="detail-text11 detail-function" v-html="data.introduction">
                    </div>
                </div>
                <div>
                    <div id="case" class="href"></div>
                    <div class="detail-text"  v-html="data.caseInfo"> </div>
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
//import '../style/layer'; 这个引入有错
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc } from '../rpc/index';
import { HOST } from '../config';


export default {
	data () {
    	return {
      		HOST:HOST,
      		data: {},
      		dataList:{},
    	}
  	},
  components: {
      vHeader,
      vSider,
      vFootersimper
  },
  created () {
  	this.data.id = this.$route.query.id;
	this.getData();
		
    this.$nextTick(()=>{
      this.init()
    })
  },
  methods: {
  		getData() {
			webRpc.invoke("productWebRpc.findById",this.data.id).then(result=>{
				this.data = result.data;
				console.log(this.data);
		    }).catch(error =>{});
		    	
		    webRpc.invoke("productWebRpc.findSkuArr",this.data.id).then(result=>{
				this.dataList = result.data;
				console.log(this.dataList);
		    }).catch(error =>{});
		},
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

