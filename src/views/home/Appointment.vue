<template>
  <div>
    <div id="slide-main">
        <div class="order appoint">
            <h2>我的模板</h2>
            <div class="appoint-wrap clearfix" style="padding-top: 50px;">
                <div class="order-item" align="center" >
	                <div class="appoint-item" v-for="(item,index) in dataList">
	                	<div class="appoint-pic">
	                    	<a><img :src="HOST+item[0].key.imagesStr"> </a>
	                    </div>
	                    <h3><a>{{item[0].key.title}}</a></h3>
	                   	<div class="appoint-btn">
	                    	<a @click="cancelTemp(ids[index])">删除</a>
	                    	<a @click="totempOrder(item)">立即预约</a>
	                    </div>
	                 </div>
                </div>
                
                <div v-if="isNo" class="order-item" align="center" style="height: 60px;line-height: 60px">暂无数据!</div>                
            </div>
		</div>
	</div>
  </div>
</template>

<script>
import $ from 'jquery';
import { webRpc } from '../../rpc/index';
import { HOST } from '../../config';

export default {
    data () {
        return {
			HOST:HOST,
			totalElements:0,
			page:{
				page:0,
				size:10
			},
			query:{
				memberId:''
			},
			isNo:false,
			current:0,
			dataList:[],
			ids:[]
		}
    },
    created () {
		
		if(sessionStorage.currentMember!=null){
			this.currentMember = JSON.parse(sessionStorage.getItem('currentMember'))
            this.query.memberId = this.currentMember.id;
            this.getData();
           
        }
       
    },
    methods: {
		getData(){
			
			webRpc.invoke('orderTemplateWebRpc.findPage',this.query,this.page).then(res=>{
				if(res.retCode==0){
					if(res.data.content.length==0){
						this.isNo=true;
					}else{
						this.isNo=false;
					}
					this.dataList=res.data.content;
					this.totalElements=res.data.totalElements;
					this.dataList = [];
					this.ids = [];
					res.data.content.forEach((c)=>{
						  var obj = JSON.parse(c.templateStr);
						  this.dataList.push(obj);
						  this.ids.push(c.id);
					})
					
				}
				
			}).catch(err=>{
				console.log(err)
			})
		},
		totempOrder(carStr){
			//清空
           	sessionStorage.removeItem("cartemp");
            sessionStorage.setItem('cartemp',JSON.stringify(carStr));
           	this.$router.push('/order?temp=y');
		},
		cancelTemp(id){
	        webRpc.invoke("orderTemplateWebRpc.deleteById",id).then(result=>{
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
