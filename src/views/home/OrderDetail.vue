<template>
	<div class="home">
		<div id="slide-main" class="slide-main">
        	<div class="order my-order">
        		<h2>订单详情</h2>
        	</div>

			<div class="order_detail_title" style="margin-top:0px;">
            	<span v-if="data.supType!=1">{{data.orderType}}</span>
            	<span v-else>a</span>
        	</div>
        
			<div class="order_schedule">
				<div class="l_box fl">
                	<p>订单号：{{data.orderNo}}</p>
                   	<p>下单时间：{{data.dateCreated}}</p>
            	</div>
            	
            	<div class="r_box fl">
                	<ul class="order_cur_schedule">
                		<li :class="{'cur': data.status == -1}">
                        	<!-- <img src="../../assets/images/icon-submit-active.png" alt="" /> -->
                        	<p>作废</p>
	                        <div class="dashed_dot">
	                            <div v-for="index of 5" class="dashed_dot_item"></div>
	                        </div>
                    	</li>
                    	<li :class="{'cur': data.status == 1}">
                        	<!-- <img src="../../assets/images/icon-submit-active.png" alt="" /> -->
                        	<p>提交订单</p>
	                        <div class="dashed_dot">
	                            <div v-for="index of 5" class="dashed_dot_item"></div>
	                        </div>
                    	</li>
                        <li :class="{'cur': data.status == 2}">
                        	<!-- <img src="../../assets/images/icon-pay.png" alt="" /> -->
                            <p>平台确认</p>
	                        <div class="dashed_dot">
	                            <div v-for="index of 5" class="dashed_dot_item"></div>
	                        </div>
	                    </li>
	                    <li :class="{'cur': data.status == 3}">
                       		<!-- <img src="../../assets/images/icon-exping.png" alt="" /> -->
                            <p>实验中</p>
	                        <div class="dashed_dot">
	                            <div v-for="index of 5" class="dashed_dot_item"></div>
	                        </div>
	                    </li>
	                    <li :class="{'cur': data.status == 4}">
                        	<!-- <img src="../../assets/images/icon-exped.png" alt="" /> -->
                            <p>实验完成</p>
                        </li>
               		</ul>
				</div>
        	</div>
        
        
			<div class="order_info ">
            	<div class="l_box fl">
                	<h1>寄样方式：{{data.deliverWay}}</h1>
                    <p>送样地址：{{data.receiverAddress}}</p>
                    <p>联系人：{{data.receiverName}}</p>
                    <p>联系电话：{{data.receiverPhone}}</p>
                </div>
                
                <div class="r_box fl" style="width:46%">
                	<ul class="fr">
                    	<li class="clearfloat">
                        	<label class="fl" for="">支付方式:</label>
                        	<div class="fl">{{data.payWay}}</div>
                    	</li>
                    	<li class="clearfloat">
                        	<label class="fl" for="">支付状态:</label>
                        	<div class="fl">{{data.payState | yesOrNo}}</div>
                    	</li>
                    	<li class="clearfloat">
                        	<label class="fl" for="">订单金额:</label>
                        	<div class="fl">
                            	￥{{data.amountTotal}}
                        	</div>
                    	</li>
                    	<li class="clearfloat">
                        	<label class="fl" for="">样品回收费:</label>
                        	<div class="fl">￥{{data.recycFee}}</div>
                    	</li>
                    	
					</ul>
                	<div class="total fr">
                    	实付款：<span>￥{{data.amountTotal}}</span>
                	</div>
            	</div>
            	
            </div>    
            
            
			<div class="sample_info clearfloat">
            	<h1 class="box_title">样品信息</h1>
            	<div class="sample_info_body" v-for="(sample,index) in sampleList">
					<table>
                    	<tr>
                        	<td class="col1">样品性质</td>
                            <td class="col2">{{sample.sampleDescribe}}</td>
                       	</tr>
                        <tr>
                        	<td class="col1">数量</td>
                            <td class="col2">{{sample.sampleNum}}</td>
                        </tr>
                        <tr>
                        	<td class="col1">测试要求</td>
                            <td class="col2">{{sample.requestMsg}}</td>
                        </tr>
                        <tr>
                        	<td class="col1">参考文件</td>
                            <td class="col2">
								<ul  style="font-size: 12px;">
						      		<li v-for="(rf,index) in sample.referenceFileArrs">
						      			附件{{index+1}}: <a target="_blank" :href="HOST+rf">{{rf}} <i class="el-icon-download"></i> </a>
						      		</li>
						      	</ul>
							</td>
                        </tr>
					</table>
				</div>
        	</div>
        
           
           <div class="order_record">
            	<h1 class="box_title" style="border-bottom: 1px solid #e0e3e2;">实验结果</h1>
            	<ul class="order_record_list">
			    	<li v-for="(item,index) in arracList">
			    		附件{{index+1}}: <a target="_blank" :href="HOST+item.fileUrl">{{item.fileName}}<i class="el-icon-download"></i> </a>
			    	</li>
                </ul>
            	<br />
           </div>
                                   
                                                
		</div>
	</div>
</template>

<script>
import { webRpc } from '../../rpc/index';
import { HOST } from '../../config';
export default {

	data () {
    	return {
      		HOST:HOST,
      		data:{},
      		arracList:{},
      		sampleList:{},
      		detailList:{}
    	}
  	},
	created () {
    	this.data.id=this.data.id = this.$route.query.id;
    	this.initData();
  	},
  	filters: {
			yesOrNo: function (value) {
				if (value === 'YES') {
			    	value = '是'
			    } else if (value === 'NO') {
			        value = '否'
			    }
			    return value
			}
  		},
  	methods: {
    	initData(){
      		webRpc.invoke('orderWebRpc.findById',this.data.id).then(res=>{
        		console.log(res)
        		if(res.retCode===0){
          			this.data=res.data
          			
          			webRpc.invoke("orderWebRpc.findSampleListByOrderNo",this.data.orderNo).then(result=>{
            			this.sampleList = result.data;
            		}).catch(error =>{});
            	
          			webRpc.invoke("orderWebRpc.findAttachmentListByOrderNo",this.data.orderNo).then(result=>{
            			this.arracList = result.data;
            		}).catch(error =>{});
            		
            		webRpc.invoke("orderWebRpc.findDetailListByOrderNo",this.data.orderNo).then(result=>{
	            		this.detailList = result.data;
	            	}).catch(error =>{});
            	
        		}
      		}).catch(err=>{})
    	}
  	}
}

</script>

<style scoped>

.cur{color:red}
.clearfloat{clear:both}
.order_detail_title{height:72px;line-height:76px;background:#e0f6ed;margin-top:20px;padding:0 30px;font-size:16px;color:rgba(0,0,0,.65);font-weight:700}
.order_schedule{width:100%;height:162px;background:#fff;padding:4px 0}
.order_schedule .l_box{width:372px;padding-top:26px;border-right:1px solid #e8e8e8;line-height:30px;font-size:16px}
.order_schedule .l_box p{line-height:22px;margin-bottom:20px;font-size:16px;color:rgba(0,0,0,.65);font-weight:700;padding-left:30px}
.fl{float:left}
.order_schedule .r_box{width:550px;height:100%}
.fl{float:left}
.order_cur_schedule{width:100%;height:100%}
.order_cur_schedule li{position:relative;float:left;width:18.66%;padding-top:26px}
.order_cur_schedule li img{display:block;margin:0 auto}
.order_cur_schedule li p{line-height:22px;margin-top:20px;font-size:16px;color:rgba(0,0,0,.45);font-weight:500;text-align:center}
.order_cur_schedule .dashed_dot{position:absolute;top:58px;right:-30px}
.order_cur_schedule .dashed_dot .dashed_dot_item{float:left;width:2px;height:2px;background:#8c8c8c;margin-right:5px}
.order_info{background:#fff;padding:30px;margin-top:20px;height:200px}
.order_info>div{width:50%;min-height:100px}
.order_info .l_box h1{line-height:22px;margin-bottom:20px;font-size:16px;color:rgba(0,0,0,.65);font-weight:700}
.order_info .l_box p{line-height:30px;font-size:14px;color:rgba(0,0,0,.65)}
.order_info .r_box ul{width:240px;padding-top:70px;border-bottom:1px solid #e8e8e8}
.order_info .r_box ul li{width:100%;line-height:30px}
.order_info .r_box ul li label{display:block;width:50%;line-height:30px;font-size:14px;color:rgba(0,0,0,.45);font-weight:500;text-align:right}
.order_info .r_box ul li div{width:50%;line-height:30px;font-size:14px;color:rgba(0,0,0,.75);font-weight:500;text-align:right}
.order_info .r_box .total{width:100%;line-height:45px;font-size:14px;color:rgba(0,0,0,.45);font-weight:500;text-align:right}
.order_info .r_box .total span{margin-left:28px;font-size:18px;color:#32d693}
.sample_info{background:#fff;margin-top:20px}
.sample_info_body table{width:100%;margin:0 0 36px 0}
.sample_info_body table .col1{width:180px}
.sample_info_body table td{line-height:22px;padding:10px 20px;font-size:14px;color:#424242;border:1px solid #e8e8e8}
.box_title{line-height:65px;padding-left:30px;font-size:16px;color:rgba(0,0,0,.75);font-weight:700}
.order_record{width:100%;background:#fff;margin-top:20px}
.order_record_list{padding:25px 0 0 30px}

</style>


