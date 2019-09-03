<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider :obj="car"></v-Sider>
    <div class="detail-main">
        <div class="wrap">
            <div class="detail-swiper fl">
                <div class="swiper-container detail-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="width: 400px!important;height:400px !important;text-align:center" v-for="(i, j) in data.imagesArr" :key="j">
														<img :src="HOST+i" alt="" style="width: 400px;height: 400px; margin: 0 auto">
                        </div>      
												<!-- <div class="swiper-slide" style="width: 400px!important;height:400px !important;text-align:center">
														<img src="http://pic.ceshigo.com/olddata/2017080321431380898.png" alt="" style="width: 400px;height: 400px; margin: 0 auto">
                        </div>
												<div class="swiper-slide" style="width: 400px!important;height:400px !important;text-align:center">
														<img src="http://pic.ceshigo.com/olddata/2017080321491326899.png" alt="" style="width: 400px;height: 400px; margin: 0 auto">
                        </div>            -->
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
                    <span  v-for="(item,index) in dataList" @click="selectProduct(item)" :class="{ 'clColor': item.ischeck == true}" >{{item.title}}</span>
                </div>
                <div class="detail_des">{{data.subTitle}}</div>
                <div class="detail-btns clearfix">
                    <span id="checkids" @click="onSubscribe()">立即预约</span>
                    <span id="checkids" @click="addCar()">购物车</span>
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
                            <div class="table_row clearfix" v-for="item in orderList">
                                    <div>{{item[0]}}</div>
                                    <div style=" width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" >
                                    	{{item[2]}}
                                    </div>
                                    <div>{{item[1]}}</div>
                                    <div>{{item[5] | formatDate}}</div>
                            </div>
                      
                        </div>
                    </div>
                </div>
                <div v-if="tabValue=='about'">
                    <div id="about" class="href"></div>
                    <div class="detail-text weixin_box clearfix">

                        <div class="weixin_app">
                          <!--  <img src="../assets/images/weixin.png"> -->
                        </div>
                        <div class="weixin_bus">
                            
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
// import $ from "jquery";
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc } from '../rpc/index';
import { HOST } from '../config';
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';

export default {
	data () {
    	return {
      		HOST:HOST,
      		data: {},
      		dataList:{},
      		orderList:{},
      		tabValue:'attention',
      		iscollection:false,
          currentMember:{},
            // 父传子
          car:[],
    	}
  	},
  	filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
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
		mounted(){
			var mySwiper = new Swiper('.detail-container', {
					// autoplay:true,
					loop:true,
					pagination:{
						el:".swiper-pagination",
						clickable:true
					},
					paginationClickable: true,
					navigation:{
						prevEl: '.detail-prev',
						nextEl: '.detail-next',
					},
					autoplay: {
							delay: 5000,
							disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
					},
					observer:true,
          observeParents:true
			});
		},
  	methods: {
  		
  		initData() {
			webRpc.invoke("productWebRpc.findById",this.data.id).then(result=>{
				this.data = result.data;
		    }).catch(error =>{});
		    	
		    webRpc.invoke("productWebRpc.findSkuArr",this.data.id).then(result=>{
				this.dataList = result.data;
		    }).catch(error =>{});
		    
		    webRpc.invoke("orderWebRpc.findTop",this.data.id,5).then(result=>{
		    	console.log("预约");
		    	console.log(result);
				this.orderList = result.data;
		    }).catch(error =>{});
		    
        },
		//检查收藏情况
		checkCollection(){
			webRpc.invoke("collectWebRpc.findByProductIdAndMemberId",this.data.id,this.currentMember.id).then(result=>{
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
					if(result.retCode==0){
	                	this.iscollection = false;
					}else{
						alert(result.message);
					}
			    }).catch(error =>{});
			}else{
				//未收藏
				webRpc.invoke("collectWebRpc.save",this.data.id).then(result=>{
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
   	 	selectProduct(item){
   	 		
   	 		if(item.ischeck!=null && item.ischeck == true){
   	 			this.$set(item, 'ischeck', false);
   	 		}else{
   	 			this.$set(item, 'ischeck', true);
   	 		}
   	 		
   	 		
   	 	},
   	 	// 立即预约
        onSubscribe(){
            if(this.currentMember.id ==null || this.currentMember.id ==""){
				layer.msg("请先登陆");
				return;
			}
			
			var buyFlag = false;
			//先清空
			this.car = [];
			sessionStorage.removeItem('car');
			
			//再加入
			this.dataList.forEach((n)=>{
	    		if(n.ischeck!=null && n.ischeck == true){
	   	 			this.addCarData(n);
	   	 			buyFlag = true;
	   	 		}else{
	   	 		}
　　　　　　		})
			//跳转
			if(buyFlag){
				this.$router.push('/order');
			}else{
				layer.msg("请选择测试项目");
			}
			
        },
   	 	addCar(){
   	 		if(this.currentMember.id ==null || this.currentMember.id ==""){
				layer.msg("请先登陆");
				return;
			}
			var buyFlag = false;
			this.dataList.forEach((n)=>{
	    		if(n.ischeck!=null && n.ischeck == true){
	   	 			buyFlag = true;
	   	 			this.addCarData(n);
	   	 		}else{
	   	 		}
　　　　　　		})


			if(buyFlag){
				layer.msg("已加入购物车,请点击右边购物车进行查看");
			}else{
				layer.msg("请选择测试项目");
			}
			
			
   	 	},
   	 	addCarData(item){
       		var key = this.data;
   	 		//是否全新 商品+属性
   	 		var flag = true;
   	 		//循环购物车上
   	 		for(var i = 0;i<this.car.length;i++){
	  			//判断商品是否存在购物车上(不同属生的商品都算是同一个)
	  			if(this.car[i].key.id==key.id){
	  		 		//设置购物车存在该商品
	  		 		flag = false;
	  		 		//判断这个商品的该属性是否已存在
	  		 		for(var j = 0;j<this.car[i].val.length;j++){
	  		 			if(this.car[i].val[j].id ==item.id){
	  						//如果已存在，则不做操作
   	 		 				return;
   	 		 			}
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
  			return;
   	 	}
   	 	

  	}
}
</script>

<style scoped>
.clColor{
    background: #01707A;
    color:#fff;
}
</style>

