<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div class="banner">
        <div class="banner-cont">
            <h1>中美学术翻译</h1>
            <p>针对欲投稿高影响因子期刊的科研作者设计。每份稿件均由专业领域的学科专家翻译，双语校对、英文母语编辑润色修改，翻译后的文稿达到国际接收标准。四轮反复的质量把关，帮助研究人员跨越语言障碍，准确表达您的研究成果，实现稿件在高影响因子期刊的顺利发表。</p>
            <a  @click="returnCom('progress')">立即下单</a>
            <img src="../assets/images/Translate_icon_1.png" alt="" />
        </div>
    </div>
    <div class="tr-list">
        <div class="tr-list-cont">
            <div class="list-item even">专有名词及技术<br />表达精确</div>
            <div class="list-item odd">合乎学科<br />学术写作惯例</div>
            <div class="list-item even">结构优化</div>
            <div class="list-item odd">逻辑强化</div>
            <div class="list-item even">文风一致</div>
            <div class="list-item odd">表达简明</div>
        </div>
    </div>

    <div class="tr-progress">
        <div class="tr-progress-cont">
            <h1>翻译稿件四轮质量监控</h1>
            <h2>您的稿件将由专精于您论文领域的语言专家翻译、精校、润稿</h2>
            <ul class="pro-list">
                <li class="pro-item pro-item_1 fl">
                    <div class="tr-hide transition">
                        <p>
								<span>
									翻译
									<img src="../assets/images/Translate_icon_2.png" alt="">
								</span>
                        </p>
                    </div>
                    <div class="tr-cont">
                        <h3 class="transition">由学科锲合的翻译师翻译，确保技术内涵精准、表述专业</h3>
                    </div>
                    <div class="border transition"></div>
                </li>
                <li class="pro-item pro-item_2 fl marginLeft26">
                    <div class="tr-hide transition">
                        <p>
								<span>
									校对
									<img src="../assets/images/Translate_icon_2.png" alt="">
								</span>
                        </p>
                    </div>
                    <div class="tr-cont">
                        <h3 class="transition">双语专家对照原文进行校对，搭配中文母语和英文母语的专家处理同一份稿件，零失误地传递作者意愿</h3>
                    </div>
                    <div class="border transition"></div>
                </li>
                <li class="pro-item pro-item_3 fl marginLeft26">
                    <div class="tr-hide transition">
                        <p>
								<span>
									编辑格式
									<img src="../assets/images/Translate_icon_2.png" alt="">
								</span>
                        </p>
                    </div>
                    <div class="tr-cont">
                        <h3 class="transition">英文母语编辑检查语法、调整整体风格，并根据期刊投稿规定编排格式</h3>
                    </div>
                    <div class="border transition"></div>
                </li>
                <li class="pro-item pro-item_4 fl marginLeft26">
                    <div class="tr-hide transition">
                        <p>
								<span>
									质量监控
									<img src="../assets/images/Translate_icon_2.png" alt="">
								</span>
                        </p>
                    </div>
                    <div class="tr-cont">
                        <h3 class="transition">内部质量监控团队监控每一步骤、杜绝疏漏</h3>
                    </div>
                    <div class="border transition"></div>
                </li>
            </ul>
        </div>
    </div>


    <div class="progress" id="progress">
        <div class="progress-box clearfix">
            <div class="progress-item">
                <img class="progress-item_1" src="../assets/images/Scipolishen_icon_7.png" alt="">
                <div>
                    <h1>1.在线提交订单</h1>
                    <p>介绍服务需求并提交订单</p>
                </div>
            </div>
            <div class="progress-item">
                <img class="progress-item_1" src="../assets/images/Scipolishen_icon_7.png" alt="">
                <div>
                    <h1>2·沟通细节</h1>
                    <p>与老师对接，沟通需求细节<br />确认报价、时间等信息</p>
                </div>
            </div>
            <div class="progress-item">
                <img class="progress-item_1" src="../assets/images/Scipolishen_icon_7.png" alt="">
                <div>
                    <h1>3·付款确认</h1>
                    <p>登录个人中心-我的预约确定<br />订单报价并付款</p>
                </div>
            </div>
            <div class="progress-item">
                <img class="progress-item_1" src="../assets/images/Scipolishen_icon_7.png" alt="">
                <div>
                    <h1>4·投稿服务</h1>
                    <p>协助投稿过程，与您保持紧<br />密交流</p>
                </div>
            </div>
            <div class="progress-item">
                <div>
                    <h1>5·确认评价</h1>
                    <p>稿件正式被接收或投稿后服<br />务完成时，确认结果并评价</p>
                </div>
            </div>
        </div>
    </div>

    <div id="form" class="form">
        <p class="tips">下单过程中，有任何需求可咨询客服经理：刘*（153******），收到文稿后我们会在1个工作日与您联系</p>
        <form id="form1" class="layui-form">
            <div class="layui-form-item">
                <label for="" class="layui-form-label" >选择服务：</label>
                <div class="layui-input-block">
                    <div class="service-sel fl form_elem" style="width: auto; padding: 0 20px;">简体中文到英文（论文投稿即翻译）</div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label">研究领域：</label>
                <div class="layui-input-block">
                    <div class="area-search clearfix">
                        <input v-model="data.domain" class="form-input fl form_elem" type="text" placeholder="请输入中/英文学科名称关键词" />
                    </div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label">时间要求：</label>
                <div class="layui-input-block">
					<div class="time-demand form_elem fl"  @click="selectExpress('正常')">正常</div>
                    <div class="time-demand form_elem fl"  @click="selectExpress('加急')">加急</div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label">期刊名称：</label>
                <div class="layui-input-block">
                    <input type="text" class="form-input form_elem" v-model="data.periodicalName"/>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label" >投稿连接：</label>
                <div class="layui-input-block">
                    <input type="text" class="form-input form_elem" v-model="data.periodicalUrl"/>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label" >英文风格：</label>
                <div class="layui-input-block">
                    <div class="en-style form_elem fl" @click="selectTranslationStyle('美式英语')">美式英语</div>
                    <div class="en-style form_elem fl" @click="selectTranslationStyle('英式英语')">英式英语</div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label">待翻译文件：</label>
                <div class="layui-input-block">
                    <div class="file-box fl">
                        <input type="file" style="display:block" @change="upload($event.target.files,'requestFile')">
                    </div>
                    <div class="file-list fl requestFile"></div>
                    <div class="file-desc fl">为便于美籍专家准确理解文章原意，请尽可能将所有图表插入到文章中，可去除<br />参考文献列表和作者信息，最终提交一个待编辑的Word文档</div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label">参考文件：</label>
                <div class="layui-input-block">
                    <div class="upload-file fl">
                        <input type="file"  class="form_elem"  style=" display: block;position:absolute;top:0;width:100px;height:33px;opacity:0;filter:alpha(opacity:0);cursor:pointer;"  @change="upload($event.target.files,'referenceFile')">
                        点击上传
                    </div>
                    <div class="file-list fl referenceFile"></div>
                    <div class="upload-file-desc fl">如果有期刊的回复意见，请在这里上传。如有多个文件上传，请压缩打包成一个文件上传</div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label">需求描述：</label>
                <div class="layui-input-block">
                    <textarea class="form_elem" v-model="data.requestMsg"></textarea>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label">联系邮箱：</label>
                <div class="layui-input-block">
                    <input  class="email form_elem" type="text"  v-model="data.receiverEmail"/>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label"></label>
                <div class="layui-input-block marginTop40">
                    <input type="checkbox" id="chkagree" name="chkagree" value="1" lay-skin="primary" title="" />
                    <a class="secret" href="scisecrecyagree.html" target="_blank">阅读并同意《科学指南针保密协议》</a>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label"></label>
                <div class="layui-input-block">
                    <input class="submit-btn" type="button" @click="save()"  value="提交文稿" />
                </div>
            </div>
        </form>
    </div>
    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc,upload } from '../rpc/index';
import { HOST } from '../config';

export default {
  data () {
    return {
      	HOST:HOST,
      	data:{
      		orderType:'中英学术翻译',
      		type:'简体中文到英文（论文投稿即翻译）',
    		requestFile:'',
      	},
    	isLogin:false
    }
  },
  components: {
      vHeader,
      vSider,
      vFootersimper
  },
  	created () {
		//看看用户是否已登陆,已登陆，则初始化是否收藏
		if(sessionStorage.currentMember!=null){
			this.isLogin = true;
 		}
 		this.data.area = sessionStorage.city;
  	},
   methods: {
   		//锚点
	   returnCom(id) {
	   		const returnEle = document.querySelector("#"+id);
	   		console.log(returnEle)
	    	if (!!returnEle) {
	      		returnEle.scrollIntoView(true);
	    	}
	  	},
	  	selectExpress(express){
	  		this.data.express=express;
	  	},
	  	selectTranslationStyle(st){
	  		this.data.translationStyle = st;
	  	},
	  	save(){
	  		if(!this.isLogin){
	  			layer.msg("请先登陆");
	  			return;
	  		}
	  		
	  		webRpc.invoke("orderWebRpc.saveSimpleOrder",this.data).then(result=>{
				if(result.retCode==0){
                	layer.msg("提交成功");
                	this.$router.push('/ordersucess');
				}else{
					layer.msg(result.message);
				}
		    }).catch(error =>{});
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
*{
  box-sizing: border-box;
}
@font-face {
    font-family:'zongYW';
    /* src: url('../../fonts/zongYiW7.TTF'); */
}
.marginLeft26 {
    margin-left: 26px;
}
.marginTop40 {
    margin-top: 40px;
}
.banner {
    width: 100%;
    height: 400px;
    background: url('../assets/images/banner_translate.png');
}
.banner-cont {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0 0 102px;
}
.banner-cont h1 {
    position: relative;
    line-height: 48px;
    font-family:'zongYW';
    font-size: 48px;
    color: #FFF;
}
.banner-cont h1:after {
    position: absolute;
    bottom: -10px;
    content:'';
    display: block;
    width: 92px;
    height: 4px;
    background: #32D693;
}
.banner-cont p {
    max-width: 340px;
    line-height: 24px;
    margin-top: 22px;
    font-size: 15px;
    color: #FFF;
}
.banner-cont a {
    display: block;
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: #32D693;
    margin-top: 25px;
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
    text-align: center;
    border-radius: 100px;
}
.banner-cont a:hover {
    color: #FFF;
}
.banner-cont img {
    position: absolute;
    right: 0;
    top: 60px;
}
.tr-list {
    width: 100%;
    height: 100px;
    background: #FFF;
}
.tr-list-cont {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 17px 0;
}
.list-item {
    display: table-cell;
    vertical-align: middle;
    width: 200px;
    height: 66px;
    line-height: 26px;
    font-size: 16px;
    color: #333;
    text-align: center;
}
.list-item.odd {
    background: url('../assets/images/list_1.png') no-repeat;
}
.list-item.even {
    background: url('../assets/images/list_2.png') no-repeat;
}
.tr-progress {
    width: 100%;
    height: 400px;
    background: rgba(96, 141, 247, .1);
}
.tr-progress-cont {
    width: 1200px;
    margin: 0 auto;
    padding: 36px 0 30px 0;
}
.tr-progress h1 {
    line-height: 28px;
    font-size: 20px;
    color: #333;
    font-weight: bold;
    text-align: center;
}
.tr-progress h2 {
    line-height: 22px;
    margin-top: 7px;
    font-size: 16px;
    color: #333;
    text-align: center;
}
.pro-list {
    margin-top: 27px;
}
.pro-item {
    position: relative;
    transform: perspective(500px);
    perspective-origin: left top;
    transform-origin: center top;
    width: 280px;
    height: 250px;
}
.pro-item .tr-hide {
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
}
.pro-item .tr-cont {
    position: absolute;
    z-index: 9;
    width: 100%;
    height: 100%;
}
.pro-item:hover > .tr-hide {
    transform: rotateX(90deg);
}
.pro-item:hover .border {
    top: 10px;
    left: 10px;
}
.pro-item_1 .tr-hide {
    background: url('../assets/images/pro_1.png') no-repeat;
}
.pro-item_1 .tr-cont {
    background: url('../assets/images/pro_1-active.png') no-repeat;
}
.pro-item_2 .tr-hide {
    background: url('../assets/images/pro_2.png') no-repeat;
}
.pro-item_2 .tr-cont {
    background: url('../assets/images/pro_2-active.png') no-repeat;
}
.pro-item_3 .tr-hide {
    background: url('../assets/images/pro_3.png') no-repeat;
}
.pro-item_3 .tr-cont {
    background: url('../assets/images/pro_3-active.png') no-repeat;
}
.pro-item_4 .tr-hide {
    background: url('../assets/images/pro_4.png') no-repeat;
}
.pro-item_4 .tr-cont {
    background: url('../assets/images/pro_4-active.png') no-repeat;
}
.pro-item p {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 15px;
    line-height: 28px;
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
    text-align: center;
}
.pro-item span {
    position: relative;
    display: inline-block;
    line-height: 28px;
}
.pro-item p img {
    position: absolute;
    right: -25px;
    top: 7px;
}
.pro-item h3 {
    position: absolute;
    bottom: 15px;
    padding: 0 27px 0 33px;
    font-size: 16px;
    color: #FFF;
}
.pro-item .border {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 280px;
    height: 250px;
    border: 1px solid #32D693;
}
.progress {
    width: 100%;
    height: 102px;
    background: #FFF;
}
.progress-box {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}
.progress-item {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 240px;
    height: 102px;
    padding-left: 34px;
}
.progress-item img {
    position: absolute;
    top: 40px;
    right: -10px;
}
.progress-item div h1 {
    line-height: 24px;
    font-size: 14px;
    color: #424242;
    font-weight: bold;
}
.progress-item div p {
    line-height: 24px;
    font-size: 14px;
    color: #666;
}
.form .layui-input-block {
    min-height: 32px;
}
.form .layui-form-item {
    margin-bottom: 20px;
}
.form {
    width: 1200px;
    margin: 0 auto 30px;
    background: #FFF;
    margin-top: 20px;
    padding: 20px 20px 30px;
}
.form .tips {
    width: 100%;
    height: 32px;
    line-height: 32px;
    background: #FCFFE5;
    padding-left: 20px;
    font-size: 14px;
    color: #FE8A01;
    border: 1px solid #EFDE9C;
    border-radius: 3px;
}
.form form {
    margin-top: 20px;
}
.form form .layui-form-label {
    width: 101px;
    line-height: 32px;
    padding: 0;
    font-size: 14px;
    text-align: left;
}
.form form .form-input {
    width: 320px;
    height: 32px;
    line-height: 32px;
    padding-left: 10px;
    border: 1px solid #DEDEDE;
}
.form form .service-sel, .form form .time-demand, .form form .en-style {
    width: 100px;
    height: 32px;
    line-height: 30px;
    margin-right: 20px;
    font-size: 14px;
    color: #424242;
    text-align: center;
    border: 1px solid #DEDEDE;
    border-radius: 5px;
    cursor: pointer;
}
.form form .service-sel-active, .form form .time-demand-active, .form form .en-style-active {
    background: #32D693;
    color: #FFF;
    border-color: #32D693;
}
.form form .time-desc, .form form .area-desc {
    line-height: 32px;
    font-size: 14px;
    color: #666;
}
.form form .area-desc {
    margin-left: 20px;
    color: #32D693;
    cursor: pointer;
}
.form form .file-box {
    position: relative;
    width: 56px;
    height: 56px;
    border: 1px dashed #CCC;
    background: url('../assets/images/upload.png') no-repeat center center;
}
.form form .file-box input {
    position: absolute;
    z-index: 99;
    width: 56px;
    height: 56px;
    opacity: 0;
    cursor: pointer;
}
.form form .file-desc {
    height: 56px;
    line-height: 20px;
    margin-left: 20px;
    padding: 8px 0;
    font-size: 14px;
    color: #666;
}
.form form .upload-file {
    width: 100px;
    height: 32px;
    line-height: 30px;
    border: 1px solid #DEDEDE;
    font-size: 14px;
    color: #424242;
    text-align: center;
    cursor: pointer;
}
.form form .upload-file-desc {
    height: 32px;
    line-height: 20px;
    margin-left: 25px;
    padding: 6px 0;
    font-size: 14px;
    color: #666;
}
.form form textarea {
    width: 700px;
    height: 90px;
    padding: 10px;
    border: 1px solid #DEDEDE;
    resize: none;
}
.form form .email {
    width: 264px;
    height: 32px;
    padding-left: 11px;
    border: 1px solid #DEDEDE;
}
.form form .secret {
    display: inline-block;
    line-height: 32px;
    font-size: 14px;
    color: #424242;
}
.form form .secret:hover {
    color: #32D693;
}
.form form .layui-form-checkbox {
    margin-top: -4px!important;
}
.form form .layui-form-checked i {
    background: #32D693;
    border-color: #32D693;
}
.form form .layui-form-checked:hover i {
    border-color: #32D693;
}
.form form .submit-btn {
    width: 140px;
    height: 36px;
    line-height: 36px;
    background: #32D693;
    font-size: 18px;
    color: #FFF;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}
.form .layui-form-select {
    display: none;
}
.select2-selection {
    position: relative;
    width: 320px;
    height: 32px!important;
    border: 1px solid #DEDEDE!important;
    border-radius: 0!important;
    outline: none;
}
.select2-selection__rendered {
    line-height: 30px!important;
    font-size: 14px;
    color: #666;
}
.select2-selection_arrow {
    right: 10px;
}
.select2-dropdown {
    width: 320px!important;
    border: 1px solid #DEDEDE!important;
}
.select2-search__field {
    border: 1px solid #DEDEDE!important;
    background: url('../assets/images/Scipolishen_icon_13.png') no-repeat 98% center;
    background-size: 16px 16px;
}
.select2-results__option--highlighted {
    background: #32D693!important;
}
.select2-selection {
    position: relative;
    width: 320px;
    height: 32px!important;
    border: 1px solid #DEDEDE!important;
    border-radius: 0!important;
    outline: none;
}
.select2-selection__rendered {
    line-height: 30px!important;
    font-size: 14px;
    color: #666;
}
.select2-selection_arrow {
    right: 10px;
}
.select2-dropdown {
    width: 320px!important;
    border: 1px solid #DEDEDE!important;
}
.select2-search__field {
    border: 1px solid #DEDEDE!important;
    background: url('../assets/images/Scipolishen_icon_13.png') no-repeat 98% center;
    background-size: 16px 16px;
}
.select2-results__option--highlighted {
    background: #32D693!important;
}
.area-search { position: relative; }
.serviceAreaList { display: none; position: absolute; top: 31px; left: 0; z-index: 99; width: 320px; max-height: 500px; border: 1px solid #DEDEDE; overflow-y: auto; }
.serviceAreaList .area-item { width: 100%; height: 32px; line-height: 32px; background: #FFF; padding-left: 10px; font-size: 14px; color: #424242; border-bottom: 1px solid #DEDEDE; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer }
.serviceAreaList .area-item:hover { background: #32D693; color: #FFF; }
.select-box { display: none; margin-top: 10px; }
#form1 .select2-container { width: auto!important; float: left; margin-right: 20px; display: none}
.select2-selection { width: 180px; }
</style>

