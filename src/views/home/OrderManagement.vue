<template>
  <div>
    <div id="slide-main">
        <div class="order my-order">
        	<h2>我的订单</h2>
        	<div>
        		<div class="appoint-filter ">
            		<dl>
                		<dd class="clearfix ordertab">
                    		<a href="javascript:void(0)" @click="onClick('',0)" :class="{cur:0==current}">
                    			所有订单
                    		</a>
                     		<a href="javascript:void(0)" @click="onClick('1',1)" :class="{cur:1==current}">
                    			待平台确认
                    		</a>
                    		<a href="javascript:void(0)" @click="onClick('2',2)" :class="{cur:2==current}">
                    			待取样
                    		</a>
                    		<a href="javascript:void(0)" @click="onClick('3',3)" :class="{cur:3==current}">
                    			测试中
                    		</a>
                    		<a href="javascript:void(0)" @click="onClick('4',4)" :class="{cur:4==current}">
                    			已完成
                    		</a>
                    		<a href="javascript:void(0)" @click="onClick('-1',5)" :class="{cur:5==current}">
                    			已取消
                    		</a>
                		</dd>
            		</dl>
        		</div>
    		</div>
    		
			<div>
				<table>
					<thead>
						<tr>
							<td style="width:380px">实验</td>
							<td style="width:100px">费用</td>
							<td style="width:150px">下单时间</td>
							<td style="width:120px">订单状态</td>
							<td>操作</td>
						</tr>
					</thead>
					<tr v-for="(data, index) in dataList" :key="index">
						<td style="text-align: left;">
							<div class="fl">
								<div class="fl tm-img" style="width:15%" v-if="data.supType==1">
									<img :src="HOST+data.detail.productImg">
								</div>
								<div class="fl tm-img" style="width:15%" v-if="data.supType!=1">
									<!-- <img src="../../assets/images/subtype2.png"> -->
								</div>
								
								<div class="fl tm-text" style="width:65%" v-if="data.supType==1">
									{{data.detail.productName}}
								</div>			
								<div class="fl tm-text" style="width:65%" v-else>
									{{data.orderType}}
								</div>	
							</div>
						</td>
						<td>{{data.amountTotal}}</td>
						<td>{{data.dateCreated}}</td>
						<td>
							<span v-if="data.status==-1">已取消</span>
							<span v-if="data.status==1">待平台确认</span>
							<span v-if="data.status==2">待取样</span>
							<span v-if="data.status==3">测试中</span>
							<span v-if="data.status==4">已完成</span>
						</td>
						<td style="text-align: left;">
							<a class="detailbtn" @click="toDetail(data.id)">订单详情</a>
							<a v-if="data.status==1" class="cancel" @click="cancelOrder(data.id)">取消订单</a>
						</td>
					</tr>
				</table>
					
				<div v-if="isNo" class="order-item" align="center" style="height: 60px;line-height: 60px">暂无数据!</div>   
					
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
				memberId:''
			},
			isNo:false,
			current:0,
			dataList:[]
		}
	},
	created () {
		if(sessionStorage.currentMember!=null){
			this.currentMember = JSON.parse(sessionStorage.getItem('currentMember'))
            this.query.memberId = this.currentMember.id;
        }
		this.getData()
	},
	
	components: {
    	vPage
  	},
	methods: {
		getData(){
			webRpc.invoke('orderWebRpc.findMyPage',this.query,this.page).then(res=>{
				if(res.retCode==0){
					if(res.data.content.length==0){
						this.isNo=true;
					}else{
						this.isNo=false;
					}
					this.dataList=res.data.content;
					this.totalElements=res.data.totalElements;
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
			this.page.page = 0;
			this.getData()
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
		//取消订单
        cancelOrder(id){
	        	
	        webRpc.invoke("orderWebRpc.cancelOrderForMember",id).then(result=>{
	        	if(result.retCode==0){
	            	layer.msg('操作成功！');
	            	this.getData();
	           	}else{
	            	layer.msg(result.message);
	            }
	      	}).catch(error =>{});
	        
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

thead td{
    font-size: 14px;
    text-align: center;
    background-color: #dfdfdf;
    height: 50px;
}
td{
	height:70px;
	text-align: center;
}

.cancel{
	font-size: 12px;
	height: 30px;
    border: 1px solid #4444;
    padding: 5px 6px;
    background-color: #0684dae3;
    border-radius: 5px;
    color: #eee;
}

.detailbtn{
	font-size:12px;
	height: 30px;
    border: 1px solid #4444;
    padding: 5px 6px;
    background-color: #17bd40;
    border-radius: 5px;
    color: #eee;
    margin-right: 3px;
}
</style>

