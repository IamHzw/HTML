<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>

    <div id="banner">
      <div class="swiper-container index-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/images/side1.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/side2.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/side3.jpg"/>
          </div>
          <div class="swiper-slide">
            <img src="../assets/images/side4.jpg"/>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

     <div class="section" id="service">
        <h2>我们的服务</h2>
        <h3>Our service</h3>
        <h4>星尘实验室持续努力，为您的科研事业提供周到、高效、准确的服务</h4>
        <div class="wrap clearfix">
            <div class="service-item wow fadeInUp ac">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser1.png"></i>
                        <h5>测试分析</h5>
                        <h6>Micromorphology</h6>
                        <div class="service-cont">
                        
                            <p v-for="s in serverlist.wgxm"><a href="javascript:void(0)"  @click="toproduct(s[0])">{{s[1]}}</a></p>
                                    
                            <a href="#/project">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="2s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser2.png"></i>
                        <h5>微纳加工</h5>
                        <h6>Material properties</h6>
                        <div class="service-cont">
                        	<p v-for="s in serverlist.wnjg"><a href="javascript:void(0)" @click="toproduct(s[0])">{{s[1]}}</a></p>
                                         
                                <a href="#/biologys">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="1s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser3.png"></i>
                        <h5>模拟计算</h5>
                        <h6>Composition&structure</h6>
                        <div class="service-cont">
                        	<p>
                            	<router-link  :to="{path:'/simulate'}" >
                            		<a href="javascript:void(0)">几何构型</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/simulate'}" >
                            		<a href="javascript:void(0)">电子相关性质</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/simulate'}" >
                            		<a href="javascript:void(0)">动力/热力学相关性质</a>
                            	</router-link>
                            </p> 
                           
                            <a href="#/simulate">更多</a>
                            
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="4s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser4.png"></i>
                        <h5>科研作图</h5>
                        <h6>Simulation&calculation</h6>
                        <div class="service-cont">
                        	<p>
                            	<router-link  :to="{path:'/drafting'}" >
                            		<a href="javascript:void(0)">SCI期刊封面</a>
                            	</router-link>
                            </p> 
                          	<p>
                            	<router-link  :to="{path:'/drafting'}" >
                            		<a href="javascript:void(0)">论文摘要图</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/drafting'}" >
                            		<a href="javascript:void(0)">论文插图</a>
                            	</router-link>
                            </p> 
                            <a href="#/drafting">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="5s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser5.png"></i>
                        <h5>翻译润色</h5>
                        <h6>Overseas testing</h6>
                        <div class="service-cont">
                            <p>
                            	<router-link  :to="{path:'/scipolishen'}" >
                            		<a href="javascript:void(0)">英文论文润色</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/translate'}" >
                            		<a href="javascript:void(0)">中英学术翻译</a>
                            	</router-link>
                            </p> 
                            <p>
                            	<router-link  :to="{path:'/scisupport'}" >
                            		<a href="javascript:void(0)">SCI论文投稿支持</a>
                            	</router-link>
                            </p>                 
                            <a href="#/scipolish">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
            <div class="service-item wow fadeInUp ac" data-wow-delay="6s">
                <div class="service-wrap">
                    <div class="service-main">
                        <i><img src="../assets/images/ser6.png"></i>
                        <h5>失效分析</h5>
                        <h6>Biogeology&Geological</h6>
                        <div class="service-cont">
                        	<p v-for="s in serverlist.sxfx"><a href="javascript:void(0)"  @click="toproduct(s[0])">{{s[1]}}</a></p>
                            <a href="#/project">更多</a>
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                            <div class="line4"></div>
                            <div class="line5"></div>
                        </div>
                    </div>
                </div>
                <div class="service-after"></div>
                <div class="service-before"></div>
            </div>
        </div>
     </div>



     <div class="section" id="product">
        <h2>特色项目</h2>
        <h3>&nbsp;</h3>
        <h4>&nbsp;</h4>

        <div class="wrap" style="padding-left:50px;padding-right:50px">
	        <swiper2 :options="swiperFeature" ref="myFeature" v-if="productlist.length>1">
                    <swiper-slide v-for="item in productlist" @click="toproduct(item.id)">
                        <div class="product-box" @click="toproduct(item.id)">
                            <div class="product-pic"><a><img :src="HOST+item.imagesStr"></a>
                            </div>
                        </div>
                        <div class="product-title">
                        	{{item.title}}
                        </div>
                    </swiper-slide>
            </swiper2>
            <div class="prev swiper-button-black" slot="button-prev"><img src="../assets/images/right.png" alt=""></div>
            <div class="next swiper-button-black" slot="button-next"><img src="../assets/images/left.png" alt=""></div>
        </div>
     </div>

     <div class="section" id="paper">
        <h2>论文成功展示</h2>
        <h3>Paper demonstration</h3>
        <h4>星尘实验室助您发表经典论文、共创辉煌</h4>
        <div class="wrap" style="padding-left:50px;padding-right:50px">
	        <swiper1 :options="swiperOption" ref="mySwiper" v-if="anlist.length>1">
                    <swiper-slide v-for="item in anlist">
                        <div class="paper-box">
                            <div class="paper-pic"><a><img :src="HOST+item.imgUrl"></a>
                            </div>
                        </div>
                    </swiper-slide>
            </swiper1>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
     </div>

     <div class="section" id="choose">
        <h2>我们的优势</h2>
        <h3>Our advantage</h3>
        <h4>自有仪器，专业的技术团队，让星尘实验室的服务高效便捷</h4>
        <div class="wrap">
            <div class="choose-item">
                <div class="choose-top">
                    <i><img src="../assets/images/choose1.png"></i>
                    <h5>高效</h5>
                    <p>到样当天测</p>
                    <p>高效且准确</p>
                </div>
                <div class="choose-bot">
                    <h6>3.5天</h6>
                    <p>平均测试周期</p>
                </div>
            </div>
            <div class="choose-item">
                <div class="choose-top">
                    <i><img src="../assets/images/choose2.png"></i>
                    <h5>专业</h5>
                    <p>追求工匠精神</p>
                    <p>合作顶尖机构</p>
                </div>
                 <div class="choose-bot">
                    <h6>300+</h6>
                    <p>顶尖合作机构</p>
                </div>
            </div>
            <div class="choose-item">
                <div class="choose-top">
                	<i><img src="../assets/images/choose4.png"></i>
                    
                    <h5>物美</h5>
                    <p>异地邮寄包邮</p>
                    <p>同城上门取样</p>
                </div>
                <div class="choose-bot">
                    <h6>99.8%<sup style="font-size: 14px;">以上</sup></h6>
                    <p>客户满意度</p>
                </div>
            </div>
            <div class="choose-item">
                <div class="choose-top">
                   	<i><img src="../assets/images/choose3.png"></i> 
                    <h5>价廉</h5>
                    <p>互联网平台的加持</p>
                    <p>测试费用降低50%以上</p>
                </div>
                <div class="choose-bot">
                    <h6>87800+</h6>
                    <p>测试样品</p>
                </div>
            </div>
            <div class="c-dot">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="c-dot c-dot2">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
     </div>

	
     <div class="sci-user section" v-if="false">
        <h2>部分用户致谢论文</h2>
        <h4>科研，我要发CNS</h4>   
        <div class="img-box-hide">
              <div id="img-box" class="img-box" style="height: 408px;">
                 <div class="thanks-list-box">
                
                    <table class="thanks-list">
                        <thead>
                            <tr>
                                <th class="col1">编号/测试项目</th>
                                <th class="col2">致谢人/单位</th>
                                <th class="col3">致谢内容</th>
                                <th class="col4">发表文章</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in articlelist">
                                <td class="col1">
                                    <h1>{{index+1}}</h1>
									{{item.title}}
                                </td>
                                <td class="col2">
									{{item.createUser}}<br>
                                    {{item.createUnit}}
                                </td>
                                <td class="col3">
                                   <img :src="HOST+item.imgUrl" alt="" style="max-width: 332px;">
                                </td>
                                <td class="col4">
                                    <p v-html = 'item.content'></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>                
        </div>
     </div>
   
     
    <div class="section" id="agency">
        <h2>合作机构</h2>
        <h3>Cooperation agencies</h3>
        <h4>星辰实验室与众多知名单位，包括业内顶尖机构合作，不断优化服务流程和提升服务质量，持续为您提供高效、专业的科研服务</h4>

        <div class="img-box-hide">
              <div id="img-box" class="img-box" style="height: 408px;">
                 <div class="thanks-list-box">
                	<ul>
                		<li v-for="item in linklist">
                			 <img :src="HOST+item[0]" alt="" >
                		</li>
                	</ul>
                </div>
            </div>                
        </div>
    </div>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
// import $ from "jquery";
import { WOW } from 'wowjs';
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFooter from "../components/vFooter.vue";
import { webRpc } from '../rpc/index';
import { HOST } from '../config';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide }  from 'vue-awesome-swiper'

export default {
  data () {
    return {
    	HOST:HOST,
    	linklist: {},
    	articlelist:{},
    	anlist:{},
    	productlist:{},
    	serverlist:{},
        query:{
        	categoryCode:'thesis',
        	disabled:false
        },
        top:35,

        swiperOption: {
            //设定初始化时slide的索引
            initialSlide: 0,
            //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
            direction: 'horizontal',
            autoplay: {
                delay: 2500, //1秒切换一次
                disableOnInteraction: false,
            },
            //环状轮播
            loop: true,
            slidesPerView: 'auto',
            loopedSlides: 3,
            loopAdditionalSlides: 0,
            //一个屏幕展示的数量
            slidesPerView: 3,
            //间距
            spaceBetween: 20,
            //修改swiper自己或子元素时，自动初始化swiper
            observer: true,  
            //修改swiper的父元素时，自动初始化swiper 	
            observeParents: true,
            //左右点击
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        swiperFeature:{
             //设定初始化时slide的索引
            initialSlide: 0,
            //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
            direction: 'horizontal',
            autoplay: {
                delay: 2500, //1秒切换一次
                disableOnInteraction: false,
            },
            //环状轮播
            loop: true,
            slidesPerView: 'auto',
            loopedSlides: 3,
            loopAdditionalSlides: 0,
            //一个屏幕展示的数量
            slidesPerView: 4,
            //间距
            spaceBetween: 120,
            //修改swiper自己或子元素时，自动初始化swiper
            observer: true,  
            //修改swiper的父元素时，自动初始化swiper 	
            observeParents: true,
            //左右点击
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
        },
        
    }
  },
    components: {
        vHeader,
        vSider,
        vFooter,
        swiper1:swiper, 
        swiper2:swiper,
        swiperSlide
    },
	created () {
		this.getData();
    },
    computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
            },
            swiper() {
				return this.$refs.myFeature.swiper
			}
		},
  methods: {
  		
  		getData() { 
  		
  		
  		var categoryCodes =["wgxm","sxfx","wnjg"]
  		//我们的服务
          webRpc.invoke("productWebRpc.findTopByCategoryCodes",categoryCodes,3).then(result=>{
            this.serverlist = result;
          }).catch(error =>{});
          
  		
  		 //友情链接
          webRpc.invoke("linkWebRpc.findTopList",this.query,this.top).then(result=>{
            this.linklist = result.data;
          }).catch(error =>{});
          
          //案例
          var anquery ={
          	categoryCode:'anli',
          	disabled:false
          }
          webRpc.invoke("articleWebRpc.findTopFullList",anquery,10).then(result=>{
            this.anlist = result.data;
          }).catch(error =>{});

         
          //特色
          var productQuery ={
          	disabled:false,
          	saleable:1,
          	favorite:1,
          }
          webRpc.invoke("productWebRpc.findTop",productQuery,10).then(result=>{
            this.productlist = result.data;
          }).catch(error =>{});
          
          
          //webRpc.invoke("articleWebRpc.findTopFullList",this.query,this.top).then(result=>{
          //  this.articlelist = result.data;
          //}).catch(error =>{});
          
		},
        init(){
            $(window).scroll(function(e){
                e.stopPropagation();
                var scrollTop = $(window).scrollTop();
                if(scrollTop > 2000){
                    var innerWindowHeight = $(window).height();                     // 浏览器视口的高度
                    var scrollHeight = 4401-innerWindowHeight+200                  // 图片滚动的距离
                    
                    $(".sci-user").css({height:innerWindowHeight});
                    $(".img-box").css({height:innerWindowHeight-200});
                    $(".img-box").animate({scrollTop: scrollHeight}, 80000, 'linear'); 
                    $(".img-box").mouseenter(function(){
                    
                        $(this).stop(true);
                    }).mouseleave(function(){
                    
                        var top = parseInt($(".img-box").scrollTop());                              // 鼠标移出时scrollTop
                        var time = parseInt( (scrollHeight - top) / (scrollHeight / 80000) );       // 重新计算运动时间
                        $(".img-box").animate({scrollTop: scrollHeight}, time, 'linear');
                    });
                }
            });
            document.getElementById('img-box').onmousewheel = function(e){                
                this.scrollTop = this.scrollTop - (event.wheelDelta ? event.wheelDelta : -event.detail * 10);//直接设置滚动条高度

                return false;//取消滚动条的默认行为，就是不让他执行默认的滚动
                
            };
        },
        //跳转
  		toproduct(id){
  			console.log(1);
  			 this.$router.push('/product?id='+id);
  		},
        
  },
  mounted(){
      
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
    })
    wow.init();
    // this.init();
    var mySwiper = new Swiper('.index-container', {
        // autoplay:true,
        loop:true,
        pagination:{
          el:".swiper-pagination",
          clickable:true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
        },
    });
  
  },
  destroyed(){
      //mySwiper,
      //bswiper
  }
};
</script>

<style>

.swiper-button-black{position:absolute;top:30%}
.prev{right:0px}
.next{left:0px}
.index-container{height:663px}
.index-container img{width:100%;height:100%}
.section .img-box-hide{overflow:hidden;margin:0 auto}
.section .img-box{overflow-y:auto;position:relative;text-align:center;-ms-overflow-style:none;overflow:-moz-scrollbars-none}
.section .img-box:after{content:"";display:block;clear:both}
.thanks-list-box{width:1200px;margin:24px auto 0;height:auto;padding:0 30px;background:#FFF;box-shadow:0px 0px 30px 4px #D6E2DD}
.section .img-box::-webkit-scrollbar{width:0 !important}
.thanks-list{width:100%}
.thanks-list tr{border-bottom:1px solid rgba(187,151,79,0.5)}
.thanks-list .imgstr{border-bottom:0}
.thanks-list td{height:80px;font-size:16px;color:rgba(0,0,0,.85);font-weight:bold;text-align:left}
.thanks-list .col1{width:230px}
.thanks-list .col2{width:220px;padding-right:15px;line-height:22px}
.thanks-list .col3{width:332px;padding:5px 30px 5px 0}
.thanks-list .col4{width:358px;padding:20px 12px 20px 0}
.thanks-list td{min-height:100px;font-size:14px;color:rgba(0,0,0,.65)}
.thanks-list-box ul{list-style-type:none}
.thanks-list-box li{float:left;width:14%}
.product-box{border:1px solid #4994bb}
.product-pic{height:200px;width:100%;overflow:hidden}
.product-slide{width:300px !important;float:left;margin-bottom:55px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 55px}
.product-pic img,.product-spic img{width:100%;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;height:100%}
.product-title{text-align:center;margin-top:10px}

</style>
