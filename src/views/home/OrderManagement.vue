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
    
				<div class="order-wrap" v-if="a">
						<div class="order-item" align="center" style="height: 60px;line-height: 60px">暂无数据!</div>        
				</div>
				<div v-else>
					<div class="clearfix" style="border-bottom: 1px solid #e3dfdf;">
							<div style="width:40%;" class="fl">
								<div class="fl tm-img">
										<img :src="HOST+data.orderInfo.imagesStr">
								</div>
								<div class="fl tm-txt">
									<div style="line-height:60px;">
										{{data.orderInfo.title}}
									</div>			
								</div>
							</div>
						</div>
					<v-Page :total.sync="totalElements" :current-page.sync='page.page+1' :display.sync = 'page.size' @pagechange="pagechange"></v-Page>
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
				status:''
			},
			a:true,
			current:0
		}
	},
	created () {
		this.initCar()
	},
	methods: {
		initCar(){
			webRpc.invoke('orderWebRpc.findPage',this.query,this.page).then(res=>{
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
		},
		onClick(data,num){
			this.current=num;
			this.query.status=data;
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
		}
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
.tm-img{
    width: 60px;
    height: 60px;
}
.tm-img img{
	  width: 100%;
    height: 100%;
    border: 1px solid #cbcbcbee;
}
.tm-txt{
    margin-left: 10px;
    /* padding-top: 20px; */
    /* width: 120px; */
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.tm-pri{
    margin-left: 2px;
    /* padding-top: 20px; */
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
    /* vertical-align: top; */
    border: 1px solid #ccc;
}

</style>

