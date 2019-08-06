<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    
    <div id="content" class="edit-content">
        <div class="wrap">
            <div id="slide-main">
                <h2>私人订制</h2>
            </div>
            <div id="edit-wrap">
                <div id="slide-main" style="padding-left:0" class="slide-main-bg">
                    <div class="order">
                        <div class="appoint-edit">
                            <form id="order-info">
                                <input type="hidden" name="info[isagain]" value="0">
                                <dl>
                                    <dt>选择子项：</dt>
                                    <dd class="clearfix">
                                        <input type="text" name="info[projectName]" placeholder="请准确填写测试项目或仪器名称" class="licit" data-rules="['测试名称','1','32']">
                                        <span class="must">*</span>
                                    </dd>
                                </dl>
                                <dl class="add_pos">
                                    <dt>测试要求：</dt>
                                    <dd class="clearfix add_rePos">
                                        <span style="word-wrap:break-word; width:1100px; color: #01707A">
                                            注明样品在真空以及处理温度下是否稳定</span>
                                        <textarea class="edit-aim" style="width:646px;" name="info[content]"></textarea>
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
                                                        开始上传
                                                        <input type="file" class="uploadFile webuploader-element-invisible" name="file"  multiple="multiple" accept="image/*" @change="upload($event.target.files)">
                                                    </div>
                                                </div>
                                                
                                                <button id="ctlBtn" style="display: none;">开始上传</button>
                                                <span style="height: 40px;line-height: 40px">(不超过20M,可上传多个文件)</span>
                                            </div>
                                        </div>
                                        <input type="hidden" id="projectName" name="info[projectName]" value="智能重量分析仪（IGA）">
                                        <input type="hidden" id="projectId" name="info[projectId]" value="154">
                                        <input type="hidden" id="projectImages" name="info[projectImages]" value="olddata/2017080713162122719.png">
                                        <input type="hidden" id="accountNo" name="info[accountNo]" value="">
                                        <input type="hidden" id="accountId" name="info[accountId]" value="">
                                        <input type="hidden" id="isFreeMailing" name="info[isFreeMailing]" value="1">
                                        <input type="hidden" id="isIntegral" name="info[isIntegral]" value="0">
                                        <input type="hidden" id="useCoupon" name="info[useCoupon]" value="0">
                                        <input type="hidden" id="couponid" name="info[couponid]" value="0">
                                        <input type="hidden" id="cpid" name="info[cpid]" value="0">
                                        <!-- TODO 是否使用积分抵扣 -->
                                        <input type="hidden" id="integralToMoeny" name="info[integralToMoeny]" value="0.00">
                                        <!-- TODO 积分抵扣金额 -->
                                        <div id="c-item" style="display: none;">
                                        </div>
                                        <!--//支付类型-->
                                        <input type="hidden" id="payType" name="info[payType]" value="xyk">
                                        <!--//邮寄方式-->
                                        <input type="hidden" id="emsType" name="info[emsType]" value="smqy">
                                        <!--//样品回收-->
                                        <input type="hidden" id="isNeedReturn" name="info[isNeedReturn]" value="0">
                                        <!--是否创建预约模板-->
                                        <input type="hidden" id="isTemplate" name="info[isTemplate]" value="0">
                                        <!--金额-->
                                        <input type="hidden" id="prePrice" name="info[prePrice]" value="0">
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>样品数量：</dt>
                                    <dd class="clearfix data-num">
                                        <div class="edit-num">
                                            <a class="decrement" href="javascript:;" @click="changeSampleNum('-')">-</a>
                                            <input type="text"  class="itxt" v-model="num">
                                            <a class="increment" href="javascript:;" @click="changeSampleNum('+')">+</a>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
								    <dt>样品照片：</dt>
									<dd class="clearfix">
									    <div id="uploader-demo" class="clearfix">
									        <div id="fileList" class="uploader-list fl">
										<!--                 -->
											</div>
											<div id="filePicker" class="webuploader-container">
                                                <div class="webuploader-pick"></div>
                                                <div id="rt_rt_1df40cnnd1kfu1k8uoua1vvr5ud4" style="position: absolute; top: 0px; left: 0px; width: 107px; height: 107px; overflow: hidden;">
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
                                        <textarea class="edit-aim" style="width:646px;" name="info[sampleNature]"></textarea>
                                    </dd>
                                </dl>
                            </form>
                            <div class="edit-check">
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
                                <dl>
                                    <dt></dt>
                                    <dd>        
                                        <p>
                                            <label>
                                                <input type="checkbox" id="templateInput">创建预约模板，添加至“一键预约”
                                            </label>
                                        </p>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt></dt>
                                    <dd class="clearfix">
                                        <button type="button" class="btn" id="order-sub">提交</button>
                                    </dd>
                                </dl>
                            </div>
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
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc,token,upload } from '../rpc/index';
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
        oneClick:false,
        calAble:1	//计算
      },
      list:['开票转账','预付卡支付','现金支付'],
      sendArr:['上门取样','邮寄到付'],
      isTrue:['是','否'],
      currentProductId:'',
      isShow:false,
      num:1
    }
  },
  components: {
    vHeader,
    vSider,
    vFootersimper
  },
  created () {
    
  },
  
  methods: {
    changeSampleNum(op){
    	if(op=="+"){
    		this.num = this.num+1;
    	}else{
    		if(this.num==1){
    			layer.msg("数量不能小于1");
    		}else{
    			this.num = this.num-1;
    		}
    	}
    },
    selectType(i,type){
    	console.log(i);
    	this.commonData[type] = i;
    },
 
    upload(files) {
        if(!files.length) {
            return ;
        }
        
        
        let [file] = files;
        upload.uploadFile(file, 'order').then(path => {
            var fileItem = {
                path:this.HOST+path,
                fileName : file.name.split(".")[0],
                type : file.name.split(".")[1].toUpperCase(),
            }
    
            detail[arg].push(fileItem);
            
            detail[arg2] = detail[arg2]+path+";";
            
                }).catch(err => {
                    layer.msg(err);
                    console.error(err);
                });
    
            console.log(this.datalist);
    
    },
   	
   	
  }
}
</script>

<style scoped>

.clColor{
  background: #01707A;
  color:#fff;
}

.uploadFile{
	opacity: 0;
    filter: alpha(opacity=0);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    padding: 0px;
    margin: 0px;
    display: block;
}
</style>

