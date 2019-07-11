<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider :obj="carObj" :arr="carArr"></v-Sider>
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
                    <span  v-for="(item,index) in dataList" @click="addCar(data,item)">{{item.title}}</span>
                </div>
                <div class="detail_des">{{data.subTitle}}</div>
                <div class="detail-btns clearfix">
                    <span id="checkids" @click="onSubscribe()">立即预约</span>
                    <span id="checkids" @click="onShopping()">购物车</span>
                    <a id="collection" class="iconfont detail_xin_font"  :class="{'icon-xin': iscollection,'icon-xin1': !iscollection}"  @click="collection()"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="detail-data">
        <div class="wrap">
            
            <div class="detail-nav-wrap">
                <div class="detail-nav clearfix">
                	<a :class="{ 'cur': tabValue == 'attention'}"  @click="changeTab('attention')">送样须知</a>
                    <a :class="{ 'cur': tabValue == 'function'}"  @click="changeTab('function')">功能介绍</a>
                    <a :class="{ 'cur': tabValue == 'case'}"  @click="changeTab('case')">测试案例</a>
                    <a :class="{ 'cur': tabValue == 'latest'}" @click="changeTab('latest')">最近预约</a>
                    <a :class="{ 'cur': tabValue == 'about'}" @click="changeTab('about')">相关资料</a>
                </div>
            </div>
            <div class="detail-tabList">
            	<div v-if="tabValue=='attention'">
                    <div id="attention" class="href"></div>
                    <div class="detail-text11 detail-function" v-html="data.attention">
                    </div>
                </div>
                <div v-if="tabValue=='function'">
                    <div id="function" class="href"></div>
                    <div class="detail-text11 detail-function" v-html="data.introduction">
                    </div>
                </div>
                <div v-if="tabValue=='case'">
                    <div id="case" class="href"></div>
                    <div class="detail-text"  v-html="data.caseInfo"> </div>
                </div>
                <div v-if="tabValue=='latest'">
                    <div id="latest" class="href"></div>
                    <div class="detail-text detail-table">
                        <div class="table_box">
                            <div class="table_row clearfix">
                                    <div>*音</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" title="清华大学化工系">
                                    	清华大学化工系
                                    </div>
                                    <div>182****5629</div>
                                    <div>2019-06-03 14:41:53</div>
                            </div>
                            <div class="table_row clearfix">
                                    <div>*弛</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" title="吉林大学">
                                    	吉林大学
                                    </div>
                                    <div>188****7695</div>
                                    <div>2019-05-28 18:12:49</div>
                            </div>
                      
                        </div>
                    </div>
                </div>
                <div v-if="tabValue=='about'">
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
      		tabValue:'attention',
      		iscollection:false,
            currentMember:{},
            // 父传子
            carObj:{},
            carArr:[],
      		car:[]
    	}
  	},
	components: {
      	vHeader,
      	vSider,
      	vFootersimper
  	},
  	created () {
  		this.data.id = this.$route.query.id;
		this.initData();
	
		//看看用户是否已登陆,已登陆，则初始化是否收藏
		if(sessionStorage.currentMember!=null){
			this.currentMember = JSON.parse(sessionStorage.getItem('currentMember'))
	
			this.checkCollection();
 		}
        
        if(sessionStorage.car!=null){
			this.car = JSON.parse(sessionStorage.getItem('car'))
        }
        
  	},
  	methods: {
  		
  		initData() {
			webRpc.invoke("productWebRpc.findById",this.data.id).then(result=>{
				this.data = result.data;
				console.log(this.data);
		    }).catch(error =>{});
		    	
		    webRpc.invoke("productWebRpc.findSkuArr",this.data.id).then(result=>{
				this.dataList = result.data;
				console.log(this.dataList);
		    }).catch(error =>{});
        },
        // 添加购物车
        onShopping(){
            if(this.currentMember.id ==null || this.currentMember.id ==""){
				layer.msg("请先登陆");
				return;
            }
            this.carArr=this.dataList
            this.carObj=this.data
            // console.log(this.carArr,this.carObj)
        },
        // 立即预约
        onSubscribe(){
            if(this.currentMember.id ==null || this.currentMember.id ==""){
				layer.msg("请先登陆");
				return;
			}
        },
		//检查收藏情况
		checkCollection(){
			webRpc.invoke("collectWebRpc.findByProductIdAndMemberId",this.data.id,this.currentMember.id).then(result=>{
				console.log(result);
				if(result.retCode==0){
                	this.iscollection = result.data;
				}else{
					alert(result.message);
				}
				
		    }).catch(error =>{});
        },
		//收藏或取消
    	collection(){
			if(this.currentMember.id ==null || this.currentMember.id ==""){
				layer.msg("请先登陆");
				return;
			}
			if(this.iscollection){
				//已收藏
				webRpc.invoke("collectWebRpc.delete",this.data.id,this.currentMember.id).then(result=>{
					console.log(result);
					if(result.retCode==0){
	                	this.iscollection = false;
					}else{
						alert(result.message);
					}
					
			    }).catch(error =>{});
			}else{
				//未收藏
				webRpc.invoke("collectWebRpc.save",this.data.id).then(result=>{
					console.log(result);
					if(result.retCode==0){
	                	this.iscollection = true;
					}else{
						alert(result.message);
					}
				
			    }).catch(error =>{});
			}
   	 	},
   	 	//切换Tab
   	 	changeTab(val){
   	 		this.tabValue = val;
   	 	},
   	 	addCar(key,item){
   	 	
   	 		//是否全新 商品+属性
   	 		var flag = true;
   	 		//循环购物车上
   	 		for(var i = 0;i<this.car.length;i++){
	  			//判断商品是否存在购物车上(不同属生的商品都算是同一个)
	  			if(this.car[i].key.id==key.id){
	  				//设置购物车存在该商品
	  				flag = false;
	  				//判断这个商品的该属性是否已存在
	  				if(this.car[i].val.indexOf(item)!=-1){
	  					//如果已存在，则不做操作
   	 					return;
   	 				}
   	 				//不存在，则加入属性数组
	  				this.car[i].val.push(item);
	  				//退出
	  				break;
	  			}
   	 		}
   	 		
   	 		//判断是否全新，全新的则新增一项
  			if(flag){
  				var itemArr = [];
  				itemArr.push(item);
  				var caritem ={
   	 				key:key,	//以商品为KEY
   	 				val:itemArr		//值为对应选中的属性（数组）
   	 			}
   	 			this.car.push(caritem);
  			}
  	
  			//更瓣sessionStorage
  			sessionStorage.setItem('car',JSON.stringify(this.car));
  			console.log(this.car);
  			return;
   	 	}
   	 	

  	}
}
</script>

<style scoped>

</style>

