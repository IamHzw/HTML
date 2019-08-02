<template>
  <div>
    <div id="slide-main">
        <div class="order my-order">
        	<h2>我的订单</h2>
        	<div >
        		<div class="appoint-filter ">
            		<dl>
                		<dd class="clearfix ordertab">
                    		<a href="javascript:void(0)" @click="onClick('',0)" :class="{cur:0==current}">
                    			所有订单
                    		</a>
                    	
                     		<a href="javascript:void(0)" @click="onClick('CONFIRM',1)" :class="{cur:1==current}">
                    			待平台确认
                    		</a>
                    	
                    		<a href="javascript:void(0)" @click="onClick('DAIQUYANG',2)" :class="{cur:2==current}">
                    			待取样
                    		</a>
                    	
                    		<a href="javascript:void(0)" @click="onClick('TAKESAMPLE',3)" :class="{cur:3==current}">
                    			测试中
                    		</a>
                    	
                    		<a href="javascript:void(0)" @click="onClick('SUCCESS',4)" :class="{cur:4==current}">
                    			已完成
                    		</a>
                    	
                    		<a href="javascript:void(0)" @click="onClick('CANCEL',5)" :class="{cur:5==current}">
                    			已取消
                    		</a>
                		</dd>
            		</dl>
           
        		</div>
    		</div>
    
				<div class="order-wrap" v-if="isNo">
					<div class="car-title">
						<span style="width:50%">商品信息</span>
						<span style="width:10%">数量</span>
						<span style="width:10%">单价</span>
						<span style="width:15%">送样方式</span>
						<span style="width:15%">支付方式</span>
					</div>
					<div class="order-item" align="center" style="height: 60px;line-height: 60px">暂无数据!</div>        
				</div>
				<div v-else>
					<div class="car-title">
						<span style="width:50%">商品信息</span>
						<span style="width:10%">数量</span>
						<span style="width:10%">单价</span>
						<span style="width:15%">送样方式</span>
						<span style="width:15%">支付方式</span>
					</div>
					<div v-for="(data, index) in dataList" :key="index">
						<div class="clearfix mglist" @click="toDetail(data.id)">
								<div class="fl" style="width:50%">
									<div class="fl tm-img" style="width:15%">
											<img :src="HOST+data.detail.productImg">
									</div>
									<div class="fl tm-text" style="width:65%">
										{{data.detail.productName}}
									</div>			
								</div>
								<div class="fl tm-txt" style="width:10%">
									<div style="line-height:60px;">
										{{data.detail.num}}
									</div>			
								</div>
								<div class="fl tm-txt" style="width:10%" v-if="data.detail.price===null">
									<div style="line-height:60px;">
										待定
									</div>			
								</div>
								<div class="fl tm-txt" style="width:10%" v-else>
									<div style="line-height:60px;">
										{{data.detail.price}}
									</div>			
								</div>
								<div class="fl tm-txt" style="width:15%">
									<div style="line-height:60px;">
										{{data.deliverWay}}
									</div>			
								</div>
								<div class="fl tm-txt" style="width:15%">
									<div style="line-height:60px;">
										{{data.payWay}}
									</div>			
								</div>
						</div>
					</div>
					<div id="index-class">
						<v-Page :total.sync="totalElements" :current-page.sync='page.page+1' :display.sync = 'page.size' @pagechange="pagechange"></v-Page>
					</div>
				</div>
      </div>
		</div>
  </div>
</template>

<script>
import { webRpc } from '../../rpc/index';
import { HOST } from '../../config';
import  vPage from "../../components/vPage.vue";
export default {
	data () {
		return {
			HOST:HOST,
			totalElements:0,
			page:{
				page:0,
				size:8
			},
			query:{
				
			},
			isNo:false,
			current:0,
			dataList:[]
		}
	},
	created () {
		this.initCar()
	},
	components: {
    vPage
  },
	methods: {
		initCar(){
			webRpc.invoke('orderWebRpc.findPage',this.query,this.page).then(res=>{
				if(res.retCode==0){
					if(res.data.content.length==0){
						this.isNo=true;
					}else{
						this.isNo=false;
						this.dataList=res.data.content;
						this.totalElements=res.data.totalElements;
					}
				}
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
		},
		onClick(data,num){
			if(data===''){
				delete this.query.status
			}else{
				this.query.status=data;
			}
			this.current=num;
			this.initCar()
		},
		getData() {
      webRpc.invoke("productWebRpc.findPage",this.query,this.page).then(result=>{
				this.datalist = result.data.content;
				this.totalElements = result.data.totalElements;
		  }).catch(error =>{});
		},
		pagechange(val){
			console.log(val);
			this.page.page = val-1;
			this.getData();
		},
		//去详情页
		toDetail(id){
			this.$router.push('/home/orderDetail?id='+id);
		},
	}
}
</script>

<style scoped>
 .ordertab{
 	    background-color: #ffffff;
    font-size: 15px;

 }
  .ordertab .cur{
    background-color: #c2c2c2;
    font-size: 16px;
 }
.commNum{
    margin-left: 5px;
    margin-bottom: 3px;
    border-bottom: 1px solid #eee;
    background-color: #edecec;
}
.tm-list{
  margin-top: 20px;
  width: 100%;

}

.tm-img img{
	  width: 100%;
    height: 100%;
    border: 1px solid #cbcbcbee;
}
.tm-text{
	padding-left: 20px;
	line-height:60px;
	overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.tm-txt{
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.tm-pri{
    margin-left: 2px;
    font-size: 14px;
    color: #1e1e1e;
}

.tm-del{
    margin-top: 10px;
    margin-right: 5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    line-height: 1;
    border: 1px solid #ccc;
}
.mglist{
	margin-bottom:10px;
	padding-bottom: 10px;
	border-bottom: 1px solid #e3dfdf;
	cursor: pointer;
}
.car-title{
	width: 100%;
	padding: 20px 0;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	margin-bottom: 20px;
}
.car-title span{
	display: inline-block;
}
</style>

