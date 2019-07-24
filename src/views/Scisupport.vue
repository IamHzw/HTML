<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div class="banner">
        <div class="banner-cont">
            <h1 class="banner-title">SCI论文投稿支持</h1>
            <p>全称无忧的服务，SCI论文投稿一站式解决方<br />案，从润色到投稿全程支持，帮助科研人员满<br />足期刊发表要求。</p>
            <a class="banner-btn" @click="returnCom('progress')">立即下单</a>
        </div>
    </div>
    <div class="service">
        <h1>服务内容</h1>
        <div class="service-list clearfix">
            <div class="service-item service-item_1 fl marginRight50 transition">
                <img class="transition" src="https://statics.shiyanjia.com/c/v3/images/paper/service_1.png" alt="" />
                <div class="top topBg_1">论文润色</div>
                <div class="bottom">享受全套论文润色</div>
            </div>
            <div class="service-item service-item_2 fl marginRight50 transition">
                <img class="transition" src="https://statics.shiyanjia.com/c/v3/images/paper/service_2.png" alt="" />
                <div class="top topBg_2">投稿前稿件评估</div>
                <div class="bottom">专业编辑免费审稿提出优化建议</div>
            </div>
            <div class="service-item service-item_3 fl marginRight50 transition">
                <img class="transition" src="https://statics.shiyanjia.com/c/v3/images/paper/service_3.png" alt="" />
                <div class="top topBg_3">推荐投稿期刊</div>
                <div class="bottom">根据论文内容及专业程度推荐合适的投稿期刊</div>
            </div>
            <div class="service-item service-item_4 fl transition">
                <img class="transition" src="https://statics.shiyanjia.com/c/v3/images/paper/service_4.png" alt="" />
                <div class="top topBg_4">论文查重服务</div>
                <div class="bottom">避免可能出现的重复率高的尴尬</div>
            </div>
            <div class="service-item service-item_5 fl marginRight50 transition">
                <img class="transition" src="https://statics.shiyanjia.com/c/v3/images/paper/service_5.png" alt="" />
                <div class="top topBg_5">推荐论文审稿人</div>
                <div class="bottom">推荐合适的审稿人</div>
            </div>
            <div class="service-item service-item_6 fl marginRight50 transition">
                <img class="transition" src="https://statics.shiyanjia.com/c/v3/images/paper/service_6.png" alt="" />
                <div class="top topBg_6">投稿协助</div>
                <div class="bottom">根据期刊格式要求进行论文排版并撰写Cover Letter等补充材料</div>
            </div>
            <div class="service-item service-item_7 fl marginRight50 transition">
                <img class="transition" src="https://statics.shiyanjia.com/c/v3/images/paper/service_7.png" alt="" />
                <div class="top topBg_7">实时跟踪投稿进程</div>
                <div class="bottom">完成投稿后跟踪审核进度</div>
            </div>
            <div class="service-item service-item_8 fl transition">
                <img class="transition" src="https://statics.shiyanjia.com/c/v3/images/paper/service_8.png" alt="" />
                <div class="top topBg_8">返退稿协助</div>
                <div class="bottom">协助作者进行论文返修</div>
            </div>
        </div>
    </div>
    <div class="progress class-wrap" id="progress">
        <div class="progress-box clearfix">
            <div class="progress-item">
                <img class="progress-item_1" src="https://statics.shiyanjia.com/c/v3/images/paper/arrow_1.png" alt="">
                <div>
                    <h1>1.在线提交订单</h1>
                    <p>介绍服务需求并提交订单</p>
                </div>
            </div>
            <div class="progress-item">
                <img class="progress-item_1" src="https://statics.shiyanjia.com/c/v3/images/paper/arrow_2.png" alt="">
                <div>
                    <h1>2·沟通细节</h1>
                    <p>与老师对接，沟通需求细节<br />确认报价、时间等信息</p>
                </div>
            </div>
            <div class="progress-item">
                <img class="progress-item_1" src="https://statics.shiyanjia.com/c/v3/images/paper/arrow_3.png" alt="">
                <div>
                    <h1>3·付款确认</h1>
                    <p>登录个人中心-我的预约确定<br />订单报价并付款</p>
                </div>
            </div>
            <div class="progress-item">
                <img class="progress-item_1" src="https://statics.shiyanjia.com/c/v3/images/paper/arrow_4.png" alt="">
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
    <div  class="form class-wrap">
        <p class="tips">下单过程中，有任何需求可咨询客服经理：刘**（15*********），收到文稿后我们会在1个工作日与您联系</p>
        <form id="form1" class="layui-form">
            <div class="layui-form-item">
                <label for="" class="layui-form-label" askuuid="0a5a21a09edb4cb39b342156c3e07cf3">选择服务：</label>
                <div class="layui-input-block">
                    <div class="service-sel fl form_elem"  style="width:auto;padding:0 20px">SCI论文投稿支持</div>
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
                <label for="" class="layui-form-label" >时间要求：</label>
                <div class="layui-input-block">
                    <div class="time-demand form_elem fl"  @click="selectExpress('正常')">正常</div>
                    <div class="time-demand form_elem fl"  @click="selectExpress('加急')">加急</div>
                    <div class="time-desc">正常速度是1000字/天，加急额外收费</div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label" >期刊名称：</label>
                <div class="layui-input-block">
                    <input  v-model="data.periodicalName" type="text" class="form-input form_elem"   />
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label"  >投稿连接：</label>
                <div class="layui-input-block">
                    <input v-model="data.periodicalUrl" type="text" class="form-input form_elem" />
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
                <label for="" class="layui-form-label" >待编辑文件：</label>
                <div class="layui-input-block">
                    <div class="file-box fl">
                        <input type="file" style="display:block" @change="upload($event.target.files,'requestFile')">
                    </div>
                    <div class="file-list fl requestFile"></div>
                    <div class="file-desc fl">为便于美籍专家准确理解文章原意，请尽可能将所有图表插入到文章中，可去除<br />参考文献列表和作者信息，最终提交一个待编辑的Word文档</div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label" >参考文件：</label>
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
                <label for="" class="layui-form-label" >需求描述：</label>
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
                    <input type="checkbox" id="chkagree" name="chkagree" value="1"  title="" /> 
                    <a class="secret" href="scisecrecyagree.html" target="_blank">阅读并同意《科学指南针保密协议》</a>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label"></label>
                <div class="layui-input-block">
                    <input class="submit-btn" type="button" @click="save()" value="提交文稿" />
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
      		orderType:'SCI论文投稿支持',
      		type:'SCI论文投稿支持',
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
	  	selectType(type){
	  		this.data.type=type;
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
.marginRight50 {
    margin-right: 50px;
}
.marginTop40 {
    margin-top: 40px;
}
.banner {
    width: 100%;
    height: 400px;
    background: url('../assets/images/banner.png') no-repeat;
    background-size: 100% 100%;
}
.banner-cont {
    width: 1200px;
    margin: 0 auto;
    padding: 89px 0 0 129px;
}
.banner-title {
    position: relative;
    line-height: 48px;
    font-family:'zongYW';
    font-size: 48px;
    color: #333;
}
.banner-title:after {
    position: absolute;
    left: 0;
    bottom: -18px;
    content:'';
    display: block;
    width: 92px;
    height: 4px;
    background: #32D693;
}
.banner-cont p {
    margin-top: 38px;
    line-height: 24px;
    font-size: 15px;
    color: #333;
}
.banner-cont .banner-btn {
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
.service {
    padding-bottom: 10px;
}
.service h1 {
    line-height: 33px;
    padding-top: 35px;
    font-size: 24px;
    color: #333;
    font-weight: bold;
    text-align: center;
}
.service-list {
    width: 1250px;
    margin: 25px auto 0;
    /* padding: 0 25px; */
}
.service-item {
    position: relative;
    width: 250px;
    height: 160px;
    margin-bottom: 30px;
}
.service-item img {
    position: absolute;
    top: 0;
    z-index: -1;
    opacity: .8;
}
.service-item:hover {
    box-shadow: 2px 2px 10px 0px rgba(96, 141, 247, 0.4);
}
.service-item:hover img {
    opacity: 1;
}
.top {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
}
.bottom {
    display: table-cell;
    width: 250px;
    height: 80px;
    line-height: 20px;
    vertical-align: middle;
    background: #FFF;
    padding: 0 25px;
    font-size: 14px;
    color: #666;
    text-align: center;
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
/*** 琛ㄥ崟鐩稿叧 ***/
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
.form form .service-sel, .form form .en-style, .form form .time-demand {
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
.form form .service-sel-active, .form form .en-style-active, .form form .time-demand-active {
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
    position: relative;
    width: 100px;
    height: 32px;
    line-height: 30px;
    border: 1px solid #DEDEDE;
    font-size: 14px;
    color: #424242;
    text-align: center;
    cursor: pointer;
}
.form form .upload-file input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 32px;
    opacity: 0;
    filter: alpha(opacity: 0);
    cursor: pointer
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
    background: url('https://statics.shiyanjia.com/c/2018/images/search_1.png') no-repeat 98% center;
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

