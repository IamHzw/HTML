<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div class="banner">
        <div class="banner-cont">
            <div class="l-banner fl">
                <h1>英文论文润色</h1>
                <p>科学指南针拥有全球最大领先的专业润色团队之一<br />致力于为非英语母语的作者<br />提供高质量的SCI英文论文润色服务</p>
                <a class="btn"  @click="returnCom('progress')">立即下单</a>
            </div>
            <div class="r-banner fr"></div>
        </div>
    </div>
    <div class="polish-classify clearfix">
        <div>
            <div class="polish-item fl">
                <h1>
                    <p class="p_1">0.35元/字起</p>
                    标准润色
                </h1>
                <p>标准论文润色服务适合需要对稿件进行彻底检查且关注质量的作者</p>
                <ul>
                    <li class="odd">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        语言和语法检查
                    </li>
                    <li class="even">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        文风一致性修改
                    </li>
                    <li class="odd">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        术语准确性和文稿格式调整
                    </li>
                    <li class="even">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        无限重修服务
                    </li>
                    <li class="disable_odd">
                        <img src="../assets/images/Scipolishen_icon_2.png" alt="">
                        关注论文的逻辑性、结构和表达
                    </li>
                    <li class="disable_even">
                        <img src="../assets/images/Scipolishen_icon_2.png" alt="">
                        拒稿无忧服务
                    </li>
                </ul>
                <a href="#progress" data-polishType="0" data-askuuid="986dac9dd866414fad50fc5ca56961b5">立即下单</a>
            </div>
            <div class="polish-item fl marginLeft75">
                <h1>
                    <p class="p_2">0.6元/字起</p>
                    高级润色
                </h1>
                <p>高级论文润色服务尤其适合重视质量且希望对论文的逻辑和结构进行分析的作者</p>
                <ul>
                    <li class="odd">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        语言和语法检查
                    </li>
                    <li class="even">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        文风一致性修改
                    </li>
                    <li class="odd">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        术语准确性和文稿格式调整
                    </li>
                    <li class="even">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        无限重修服务
                    </li>
                    <li class="odd">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        关注论文的逻辑性、结构和表达
                    </li>
                    <li class="disable_even">
                        <img src="../assets/images/Scipolishen_icon_2.png" alt="">
                        拒稿无忧服务
                    </li>
                </ul>
                <a href="#progress" data-polishType="1" data-askuuid="393e72b98fa34f749a390a249b9de20f">立即下单</a>
            </div>
            <div class="polish-item fl marginLeft75">
                <h1>
                    <p class="p_3">0.8元/字起</p>
                    无忧润色
                </h1>
                <p>适合对润色和服务质量要求极高，对可能的返修及修改说明都希望提供服务的作者</p>
                <ul>
                    <li class="odd">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        语言和语法检查
                    </li>
                    <li class="even">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        文风一致性修改
                    </li>
                    <li class="odd">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        术语准确性和文稿格式调整
                    </li>
                    <li class="even">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        无限重修服务
                    </li>
                    <li class="odd">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        关注论文的逻辑性、结构和表达
                    </li>
                    <li class="even">
                        <img src="../assets/images/Scipolishen_icon_1.png" alt="">
                        拒稿无忧服务
                    </li>
                </ul>
                <a href="#progress" data-polishType="2" data-askuuid="64b17ce26e5f480d93f7c99611b25b89">立即下单</a>
            </div>
        </div>
    </div>

    <div class="navbar clearfix">
        <div class="navbar-cont layui-row">
            <h1 class="layui-col-xs2">适合稿件类型</h1>
            <div class="layui-col-xs10">
                <div class="layui-col-xs4 navbar-item">
                    <img class="fl" src="../assets/images/Scipolishen_icon_3.png" alt="" />
                    <p class="fl">本业务适合直接<br />用英语写作的英文学术论文</p>
                </div>
                <div class="layui-col-xs4 navbar-item">
                    <img class="fl" src="../assets/images/Scipolishen_icon_4.png" alt="" />
                    <p class="fl">在投稿后语言需要改进，<br />需要进行英语母语编辑润色的稿件</p>
                </div>
                <div class="layui-col-xs4 navbar-item">
                    <img class="fl" src="../assets/images/Scipolishen_icon_5.png" alt="" />
                    <p class="fl">在投稿前需要<br />对英文写作进行母语润色的稿件</p>
                </div>
            </div>
        </div>
    </div>

    <div class="promise">
        <div class="promise-cont clearfix">
            <div class="l-promise fl">
                <h1>科学指南针承诺</h1>
                <p>若在极少数情况下经我方润色后的稿件遭拒收，科学指南针将全权负责后续稿件的重新编辑工作，不收取任何额外费用。我们严格的程序、专业的编辑和内部质量管理系统将帮助我们履行承诺。</p>
            </div>
            <div class="r-promise fl">
                <div class="layui-row">
                    <div class="layui-col-xs6">
                        <h1>无限重修服务</h1>
                        <p>可免费享受在发送稿件后的120天内无限次的论文再修改服务，对新稿提供累计原稿件字数的20%以内篇幅做再编辑。</p>
                    </div>
                    <div class="layui-col-xs6">
                        <h1>拒稿无忧服务</h1>
                        <p>可在发送稿件1年内无限次使用此服务，对新稿提供累计原稿件字数的30%以内篇幅做再编辑，包含新增内容。额外提供给审稿人的重修论文说明信。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="progress" class="progress">
        <div class="progress-cont">
            <div class="progress-item">
                <img class="style-img" src="../assets/images/Scipolishen_icon_6.png" alt="" />
                查看内容服务
                <img class="arrow" src="../assets/images/Scipolishen_icon_7.png" alt="" />
            </div>
            <div class="progress-item">
                <img class="style-img" src="../assets/images/Scipolishen_icon_8.png" alt="" />
                官网在线提交订单
                <img class="arrow" src="../assets/images/Scipolishen_icon_7.png" alt="" />
            </div>
            <div class="progress-item">
                <img class="style-img" src="../assets/images/Scipolishen_icon_9.png" alt="" />
                上传文章并<br />完善相关信息
                <img class="arrow" src="../assets/images/Scipolishen_icon_7.png" alt="" />
            </div>
            <div class="progress-item">
                <img class="style-img" src="../assets/images/Scipolishen_icon_10.png" alt="" />
                确认费用与<br />交件时间
                <img class="arrow" src="../assets/images/Scipolishen_icon_7.png" alt="" />
            </div>
            <div class="progress-item">
                <img class="style-img" src="../assets/images/Scipolishen_icon_11.png" alt="" />
                母语资深编辑<br />润色修改
                <img class="arrow" src="../assets/images/Scipolishen_icon_7.png" alt="" />
            </div>
            <div class="progress-item">
                <img class="style-img" src="../assets/images/Scipolishen_icon_12.png" alt="" />
                官网下载或<br />邮箱接收结果
            </div>
        </div>
    </div>
    <div class="form" id="progress">
        <p class="tips">下单过程中，有任何需求可咨询客服经理：刘**（153********），收到文稿后我们会在1个工作日与您联系</p>
        <form  class="layui-form">
            <div class="layui-form-item">
                <label for="" class="layui-form-label" >选择服务：</label>
                <div class="layui-input-block">
                    <div class="service-sel fl form_elem"  @click="selectType('标准润色')">标准润色</div>
                    <div class="service-sel fl form_elem"  @click="selectType('高级润色')">高级润色</div>
                    <div class="service-sel fl form_elem"  @click="selectType('无忧润色')">无忧润色</div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label" >研究领域：</label>
                <div class="layui-input-block">
                    <div class="area-search clearfix">
                        <input  v-model="data.domain" class="form-input fl form_elem" type="text" placeholder="请输入中/英文学科名称关键词" />
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
                    <input v-model="data.periodicalName" type="text" class="form-input form_elem" />
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label"  >投稿连接：</label>
                <div class="layui-input-block">
                    <input v-model="data.periodicalUrl" type="text" class="form-input form_elem"  />
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label">英文风格：</label>
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
                    <div class="upload-file fl" style="cursor:pointer;">
                        <input type="file"  class="form_elem"  style=" display: block;position:absolute;top:0;width:100px;height:33px;opacity:0;filter:alpha(opacity:0);cursor:pointer;"  @change="upload($event.target.files,'referenceFile')">
                        点击上传
                    </div>
                    <div class="file-list fl referenceFile"></div>
                    <div class="upload-file-desc fl">如果有期刊的回复意见，请在这里上传。如有多个文件上传，请压缩打包成一个文件上传</div>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label" >特殊编辑指示：</label>
                <div class="layui-input-block">
                    <textarea class="form_elem" v-model="data.requestMsg"></textarea>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label" >联系邮箱：</label>
                <div class="layui-input-block">
                    <input  class="email form_elem" type="text"  v-model="data.receiverEmail"/>
                </div>
            </div>
            <div class="layui-form-item">
                <label for="" class="layui-form-label"></label>
                <div class="layui-input-block">
                    <span class="warning">提示：若您对开票内容有要求，请订单完成后申请发票时填写备注</span>
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
      		orderType:'英文论文润色',
      		supType:4,
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
.marginLeft75 {
    margin-left: 75px;
}
.marginTop40 {
    margin-top: 40px;
}
.banner {
    width: 100%;
    height: 400px;
    background: url('../assets/images/banner_polish_en.png');
}
.banner-cont {
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0 60px 99px;
}
.banner-cont .l-banner h1 {
    line-height: 48px;
    margin-top: 41px;
    font-family:'zongYW';
    font-size: 48px;
    color: #333;
}
.banner-cont .l-banner p {
    line-height: 24px;
    margin-top: 23px;
    font-size: 16px;
    color: #333;
    font-weight: 500;
}
.banner-cont .l-banner .btn {
    display: block;
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: #32D693;
    margin-top: 46px;
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
    text-align: center;
    border-radius: 100px;
}
.banner-cont .r-banner {
    width: 630px;
    height: 280px;
    background: rgba(75, 86, 110, .8) url('../assets/images/double-edit.png') no-repeat center center;
    margin-right: 40px;
    padding: 23px 0 30px 0;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
}
.polish-classify {
    padding: 30px 0 20px 0;
}
.polish-classify>div {
    width: 1200px;
    margin: 0 auto;
}
.polish-item {
    width: 350px;
    height: 420px;
    background: #FFF;
    padding: 27px 0 23px 0;
}
.polish-item h1 {
    position: relative;
    line-height: 28px;
    font-size: 20px;
    color: #333;
    font-weight: bold;
    text-align: center;
}
.polish-item h1 p {
    position: absolute;
    top: -10px;
    right: -33px;
    width: 157px;
    height: 52px;
    line-height: 48px;
    padding-left: 27px;
    font-size: 18px;
    color: #FFF;
    text-align: left;
}
.polish-item h1 .p_1 {
    background: url('../assets/images/price1.png');
}
.polish-item h1 .p_2 {
    background: url('../assets/images/price2.png');
}
.polish-item h1 .p_3 {
    background: url('../assets/images/price3.png');
}
.polish-item>p {
    line-height: 20px;
    margin: 23px auto 17px;
    padding: 0 30px;
    font-size: 14px;
    color: #666;
}
.polish-item li {
    position: relative;
    height: 32px;
    line-height: 32px;
    padding-left: 44px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
}
.polish-item li.odd {
    background: rgba(96, 141, 247, .2);
}
.polish-item li.even {
    background: rgba(96, 141, 247, .1);
}
.polish-item li.disable_odd {
    background: rgba(232, 232, 232, .3);
}
.polish-item li.disable_even {
    background: rgba(232, 232, 232, .1);
}
.polish-item li img {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 20px;
}
.polish-item a {
    display: block;
    width: 120px;
    height: 40px;
    line-height: 38px;
    margin: 30px auto 0;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    text-align: center;
    border: 1px solid #32D693;
    border-radius: 100px;
}
.polish-item a:hover {
    background: #32D693;
    color: #FFF;
}
.navbar {
    width: 100%;
    height: 100px;
    background: #FFF;
}
.navbar-cont {
    width: 1200px;
    margin: 0 auto;
}
.navbar-cont h1 {
    line-height: 100px;
    font-size: 24px;
    color: #333;
    font-weight: bold;
}
.navbar-item img {
    margin: 26px 0;
}
.navbar-item p {
    line-height: 22px;
    margin: 28px 21px;
    font-size: 16px;
    color: #424242;
}
.promise {
    width: 100%;
    height: 250px;
    background: url('../assets/images/background.png') no-repeat;
    background-size: 100% 100%;
}
.promise-cont {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0 20px 0;
}
.promise-cont .l-promise {
    width: 400px;
    padding: 30px 0 0 33px;
}
.promise-cont .r-promise {
    width: 800px;
    height: 200px;
    background: #FFF;
    padding: 20px;
}
.l-promise h1 {
    position: relative;
    line-height: 22px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
}
.l-promise h1:after {
    position: absolute;
    bottom: -10px;
    content:'';
    display: block;
    width: 46px;
    height: 4px;
    background: #32D693;
}
.l-promise p {
    max-width: 300px;
    line-height: 20px;
    margin-top: 24px;
    font-size: 14px;
    color: #666;
}
.r-promise>div {
    width: 100%;
    height: 100%;
    background: url('../assets/images/background2.png') no-repeat;
}
.r-promise h1 {
    line-height: 22px;
    margin: 36px 0 0 30px;
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
}
.r-promise p {
    max-width: 320px;
    line-height: 20px;
    margin: 13px 0 0 30px;
    font-size: 14px;
    color: #FFF;
}
.progress {
    width: 100%;
    height: 80px;
    background: #FFF;
}
.progress-cont {
    width: 1200px;
    margin: 0 auto;
}
.progress-item {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 200px;
    height: 80px;
    line-height: 21px;
    padding-left: 50px;
    font-size: 15px;
    color: #424242;
    text-align: left;
}
.progress-item .style-img {
    position: absolute;
    top: 28px;
    left: 20px;
}
.progress-item .arrow {
    position: absolute;
    top: 31px;
    right: -5px;
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
    text-decoration: underline;
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
.form form .warning {
    display: inline-block;
    line-height: 32px;
    font-size: 14px;
    color: #FC916D;
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
.area-search { position: relative; }
.serviceAreaList { display: none; position: absolute; top: 31px; left: 0; z-index: 99; width: 320px; max-height: 500px; border: 1px solid #DEDEDE; overflow-y: auto; }
.serviceAreaList .area-item { width: 100%; height: 32px; line-height: 32px; background: #FFF; padding-left: 10px; font-size: 14px; color: #424242; border-bottom: 1px solid #DEDEDE; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer }
.serviceAreaList .area-item:hover { background: #32D693; color: #FFF; }
.select-box { display: none; margin-top: 10px; }
#form1 .select2-container { width: auto!important; float: left; margin-right: 20px; display: none}
.select2-selection { width: 180px; }
</style>

