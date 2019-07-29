<template>
  <div class="home">
    <v-Header></v-Header>
    <div id="content" class="edit-content">
        <div class="wrap">
            <div id="edit-slide" style="position: relative; top: 0px; left: 0px; margin-left: 0px;padding-left: 10px;" >
                <div>
                    <h2 style="background-color: #edecec;">当前预约</h2>
                    <div class="edit-slide-cont">
                    	<div v-for="(data, index) in datalist" :key="index">
                        	<div  v-for="(subItem, i) in data.orderDetails" :key="i">
                        		<dl >
                            		<dt v-if="index == 0 && i==0">商品名称：</dt>
                            		<dt v-else></dt>
                            		<dd>{{data.orderInfo.title}}-{{subItem.productSkuName}}</dd>
                            	</dl>
                            	<dl >
                            		<dd style="float: left;width: 150px;">( {{subItem.num}} )</dd>
                            		<dd >
                            			<span v-if="subItem.calAble==1">￥{{subItem.price * subItem.num}}</span>
                                        <span v-if="subItem.calAble!=1">面议</span>
                            		</dd>
                            	</dl>
                        	</div>
                       	</div>
                        
                        <dl>
                            <dt>送样方式：</dt>
                            <dd class="syfs">{{commonData.deliverWay}}</dd>
                        </dl>
                        <dl>
                            <dt>样品回收：</dt>
                            <dd class="yphs">{{commonData.recovery}}</dd>
                        </dl>
                         <dl>
                            <dt>支付方式：</dt>
                            <dd class="payment">{{commonData.payWay}}</dd>
                        </dl>
                    </div>
                    <h3>费用总计：</h3>
                    <h4>
                    	￥ <strong>{{commonData.preAmountTotal}}</strong>
                    	<span v-if="commonData.calAble==2">(面议)</span>
                    </h4>
                    <p><label><input type="checkbox" id="templateInput">创建预约模板，添加至“一键预约”</label></p>
                    <button type="button" @click="save()" >确认并预约</button>
                </div>
            </div>
            <div id="edit-wrap">
            
                <ul class="tm-list carContent">
                    <li v-for="(data, index) in datalist" :key="index" class="clearfix caritem" style="margin-bottom:10px">
                  
                            <div class="commNum clearfix" >
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

                                <div class="edit-top">
                                   	平均5天完成测试,100%好评，请放心下单
                                </div>
                                
                                <div id="slide-main" style="padding-left:0; padding-top: 10px;">
                                    <div class="order">
                                        <div class="appoint-edit">
                                            <form id="order-info">
                                                <dl>
                                                    <dt>选择子项：</dt>
                                                    <dd>
                                                        <div class="edit-list">
                                                        	<div class="edit-item" v-for="(subItem, i) in data.orderDetails">

                                                				<div class="edit-name">
                                                					<span class="subTitle" >
                                                						{{subItem.productSkuName}}
                                                					</span>

                                                				</div>

				                                                <div class="edit-num">
				                                                    <a class="decrement" @click="changeProductNum(subItem,'-',data.orderDetails)">-</a>
				                                                    <input type="text" class="itxt" v-model="subItem.num">
				                                                    <a class="increment" @click="changeProductNum(subItem,'+',data.orderDetails)">+</a>
				                                                </div>

                                            				</div>
                                            
                                                        </div>
                                                        <div class="appoint-select">
                                                            <p @click="findSkuArr(data.orderInfo.productId)">+ 增加其他子项</p>
                                                            <div v-if="data.orderInfo.productId == currentProductId && isShow" class="appoint-option" style="width: 400px;">
                                                                <a v-for="puk in moreProductList" @click="selectProduct(puk,data.orderDetails)">
                                                                	<em>{{puk.title}}</em>
                                                                	<span v-if="puk.calAble==1">{{puk.price}}</span>
                                                                	<span v-else>面议</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl class="add_pos">
                                                    <dt>测试要求：</dt>
                                                    <dd class="clearfix add_rePos">
                                                        <span style="word-wrap:break-word; width:1100px; color: #01707A">
                                                         	注明样品在真空以及处理温度下是否稳定
                                                        </span>
                                                        <textarea class="edit-aim" style="width:646px;" v-model="data.orderSample.requestMsg"></textarea>
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>参考文件：</dt>
                                                    <dd class="clearfix">
                                                        <div id="uploader" class="wu-example clearfix">
                                                            <div id="thelist" class="uploader-list fl">
                                                            </div>
                                                            <div class="btns">
                                                                <div id="picker" class="webuploader-container">
                                                                	<div class="webuploader-pick" style="position: absolute; top: 0px; left: 0px; width: 111px; height: 37px; overflow: hidden; bottom: auto; right: auto;">
                                                                		<input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept=""  @change="upload($event.target.files,'requestFile')">
                                                                		<label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);">恭恭敬敬</label>
                                                                	</div>
                                                                </div>
                                                                
                                                                <button id="ctlBtn" style="display: none;">开始上传</button>
                                                                <span style="height: 40px;line-height: 40px">(不超过20M,可上传多个文件)</span>
                                                            </div>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>样品数量：</dt>
                                                    <dd class="clearfix data-num">
                                                        <div class="edit-num">
                                                            <a class="decrement" href="javascript:;" @click="changeSampleNum(data.orderSample,'-')">-</a>
                                                            <input type="text"  class="itxt" v-model="data.orderSample.sampleNum">
                                                            <a class="increment" href="javascript:;" @click="changeSampleNum(data.orderSample,'+')">+</a>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl>
                                                    <dt>样品照片：</dt>
                                                    <dd class="clearfix">
                                                        <div id="uploader-demo" class="clearfix">
                                                            <!--用来存放item-->
                                                            <div id="fileList" class="uploader-list fl">
                                                                <!--                 -->
                                                            </div>
                                                            <div id="filePicker" class="webuploader-container">
	                                                            <div class="webuploader-pick"></div>
	                                                            <div style="position: absolute; top: 0px; left: 0px; width: 87px; height: 87px; overflow: hidden;">
	                                                            	<input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/*">
	                                                            	<label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label>
	                                                            </div>
                                                            </div>
                                                        </div>
                                                    </dd>
                                                </dl>
                                                <dl class="add_pos">
                                                    <dt>样品性质：</dt>
                                               
                                                    <dd class="clearfix add_rePos">
                                                        <span style="word-wrap:break-word; width:1100px; color: #01707A">
                                                        	注明样品在真空以及处理温度下是否稳定</span>
                                                        <textarea class="edit-aim" style="width:646px;" v-model="data.orderSample.sampleDescribe"></textarea>
                                                    </dd>
                                                </dl>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </li>
                </ul>
                
                
				<div  class="tm-list carContent caritem" style="padding-left:0; padding-top: 10px;">
            		<div class="appoint-edit">
            			<dl>
                        	<dt>联系人：</dt>
                            <dd>
                            	<div class="clearfix" id="payment">
                                	<input type="text"  v-model="commonData.receiverName"/>
                               	</div>
                            </dd>
                        </dl>
                        <dl>
                        	<dt>联系电话：</dt>
                            <dd>
                            	<div class="clearfix" id="payment">
                                	<input type="text" v-model="commonData.receiverPhone"/>
                               	</div>
                            </dd>
                        </dl>
                        <dl>
                        	<dt>地址：</dt>
                            <dd>
                            	<div class="clearfix" id="payment">
                                	<input type="text" v-model="commonData.receiverAddress" style="width: 400px;"/>
                               	</div>
                            </dd>
                        </dl>
                        <dl>
                        	<dt>送样方式：</dt>
                           	<dd>
                              	<div class="clearfix" id="syfs">
                                 	<span class="edit-pick zffs" @click="selectType(i,'deliverWay')" :class="{ 'clColor': i===commonData.deliverWay}" v-for="(i, m) in sendArr" :key="m">{{i}}</span>
                               	</div>
                            </dd>
                       </dl>
                       <dl>
                       		<dt>样品回收：</dt>
                            <dd>
                            	<div class="clearfix" id="yphs">  
                               		<span class="edit-pick zffs" @click="selectType(i,'recovery')" :class="{ 'clColor': i===commonData.recovery}" v-for="(i, n) in isTrue" :key="n">{{i}}</span>
                                </div>
                            </dd>
                       </dl>
                		<dl>
                        	<dt>支付方式：</dt>
                            <dd>
                            	<div class="clearfix" id="payment">
                                	<span class="edit-pick zffs" @click="selectType(i,'payWay')" :class="{ 'clColor': i===commonData.payWay}"  v-for="(i, j) in list" :key="j">{{i}}</span>
                               	</div>
                                <p class="edit-tip" id="yphsmsg">
                                	（亲，您每月可享受2次免费回收，超过2次，平台将额外收取23元/次回收费用，请珍惜免费次数哦~）
                                </p>
                            </dd>
                        </dl>
                        
                     </div>
       			</div>
       			
       			
       			
            </div>
        </div>
    </div>
    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc,token } from '../rpc/index';
import { HOST } from '../config';

export default {
  data () {
    return {
      HOST:HOST,
      datalist:[ ],
      carData:[],
      moreProductList:[],
      commonData:{
      		receiverName :'',
			receiverAddress :'',
			receiverPhone : '',
			payWay:'现金支付',
			recovery : '否',
			deliverWay : '邮寄到付',
			preAmountTotal:0,
			calAble:1	//计算
      },
      list:['开票转账','预付卡支付','现金支付'],
      sendArr:['上门取样','邮寄到付'],
      isTrue:['是','否'],
      currentProductId:'',
      isShow:false,
    }
  },
  components: {
    vHeader,
    vSider,
    vFootersimper
  },
  created () {
    this.carData=JSON.parse(sessionStorage.getItem('car'))
    var city = sessionStorage.city;
    
	//循环购物车数据
    for(var i = 0;i<this.carData.length;i++){
	  		//定义
	  		var item ={
	  			orderInfo:{
	  				area :city,
					orderType : '测试分析',	  		
					imagesStr : this.carData[i].key.imagesStr,
					title : this.carData[i].key.title,
					productId:this.carData[i].key.id,
	  			},
	      		orderSample:{
	      			share :'NO',
	  				requestMsg:'',
	  				referenceFile :"",
	  				requestFile :"",
	  				sampleNum :1,
	  				sampleImg :"",
	  				sampleDescribe :"",
	      		},
	      		orderDetails:[]
	  		};
	  		
	  		var curItems = this.carData[i].val;
	  		for(var j=0; j<curItems.length;j++){
	  			var detail = {
	  				productSkuId:curItems[j].id,
	  				productSkuName:curItems[j].title,
	  				price:curItems[j].price,
	  				num:1,
	  				subTotal:curItems[j].price,
	  				calAble:curItems[j].calAble,
	  			};
	  			item.orderDetails.push(detail);
	  			
	  			if(curItems[j].calAble==1){
	  				this.commonData.preAmountTotal+=curItems[j].price;
	  			}else{
	  				this.commonData.calAble=2;
	  			}
	  			
	  		}
	  		
	  		this.datalist.push(item);
   	 	}
   	 	
   	 	console.log(this.data);
  },
  
  methods: {
    changeProductNum(subItem,op,details){
    	var that = this;

    	if(op=="+"){
    		subItem.num = subItem.num+1;
    	}else{
    		if(subItem.num==1){
    			
    			layer.msg('确定要删除吗？', {
  					time: 0, //不自动关闭
  					btn: ['是', '取消'] ,
 					yes: function(index){
    					layer.close(index);
    					for(var j=0; j<details.length;j++){
	  						if(details[j].productSkuId==subItem.productSkuId){
	  							details.splice(j,1);
	  						}
	  					}
	  					that.sumTotal();
  					}
				});
    		}else{
    			subItem.num = subItem.num-1;
    		}
    	}
        
        this.sumTotal();
    },
    changeSampleNum(subItem,op){
  
    	if(op=="+"){
    		subItem.sampleNum = subItem.sampleNum+1;
    	}else{
    		if(subItem.sampleNum==1){
    			layer.msg("数量不能小于1");
    		}else{
    			subItem.sampleNum = subItem.sampleNum-1;
    		}
    		
    	}
    },
    selectType(i,type){
    	console.log(i);
    	this.commonData[type] = i;
    },
   	sumTotal(){
   		console.log("sum");
   		this.commonData.preAmountTotal = 0;
   		this.commonData.calAble=1;
   	 	for(var i = 0;i<this.datalist.length;i++){
	  		var curItems = this.datalist[i].orderDetails;
	  		for(var j=0; j<curItems.length;j++){
	  			if(curItems[j].calAble==1){
	  				this.commonData.preAmountTotal+=curItems[j].price * curItems[j].num;
	  			}else{
	  				this.commonData.calAble=2;
	  			}
	  		}
   	 	}
   	},
   	save(){
   		console.log(this.datalist);
   		webRpc.invoke("orderWebRpc.saveOrder",this.datalist,this.commonData).then(result=>{
   			console.log(result);
			if(result.retCode==0){
	        	//清购物车
	        	//跳转至成功页
	        	
			}else{
				
	  					
			}
		}).catch(error =>{});
   	},
   	findSkuArr(productId){
   		this.currentProductId = productId;
   		this.isShow = true;
   		this.moreProductList =[];
   		webRpc.invoke("productWebRpc.findSkuArr",productId).then(result=>{
   			console.log(result);
			this.moreProductList = result.data;
		}).catch(error =>{});
   		
   	},
   	selectProduct(data,details){
   		this.isShow = false;
   		
   		for(var i = 0;i<details.length;i++){
			if(details[i].productSkuId===data.id){
				layer.msg("测试项目已存在");
				return;
			}
   	 	}
   	 	
   	 	var detail = {
			productSkuId:data.id,
	  		productSkuName:data.title,
	  		price:data.price,
	  		num:1,
	  		subTotal:data.price,
	  		calAble:data.calAble,
	  	};
	  			
	  	details.push(detail);
	  	this.sumTotal();
   	},
   		upload(files,arg) {
	        if(!files.length) {
	          return ;
	        }
	        
	        let text= files[0].name.split(".")[1].toUpperCase();
            let html = "";
            html += "<a href='javascript:;' style=' -o-text-overflow: ellipsis; text-overflow: ellipsis; overflow: hidden;white-space: nowrap;margin-left: 10px;display:block;width:180px;height:45px;padding-top: 10px;line-height:20px;background:#fff;border:1px solid #ccc;text-align:center;font-size:14px;color:#7b7d88;font-weight:bold;position:relative'>";
            html += text;
            html += "<br/>";
            html += files[0].name.split(".")[0];
            html += "";
            html += "</a>";
            $('.'+arg).html(html);
            
        	let [file] = files;
        	upload.uploadFile(file, 'order').then(path => {
        		//this.data.requestFile = path;
        		this.data[arg] = path
        		console.log(this.data);
          	}).catch(err => {
            	layer.msg(err);
           	 	console.error(err);
          	});
      	},
   	
   	
  }
}
</script>

<style scoped>


.commName{
    margin-bottom: 5px;
    margin-left: 5px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
}

.commNum{
    margin-left: 5px;
    margin-bottom: 3px;
    border-bottom: 1px solid #eee;
    background-color: #edecec;
}
.caritem{
	  margin-bottom: 10px;
    width: 100%;
    border: 1px solid #d4d1d1;
    padding-bottom: 5px;
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

.clColor{
  background: #01707A;
  color:#fff;
}

.subTitle{
loat: left;overflow: hidden;width: 250px;text-overflow:ellipsis; white-space:nowrap;
}
</style>


