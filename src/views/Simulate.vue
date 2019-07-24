<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div>
      <div class="sim-inner sim-inner1 class-wrap">
        <div class="sim-floor sim-floor1 clearfix">
          <h1 class="sim-title borderLeft borderLeft-success">项目简介</h1>
          <div class="sim-desc">
            量子力学是反映微观粒子（分子、原子、离子、电子等）运动规律的理论。以量子力学为基础，结合高速发展的计算机技术建立起来的计算物理、计算化学、计算材料科学等分枝学科，促进了物理、化学、材料科学的高速发展。相较于实验检测，理论模拟计算具有降低研究成本、揭示内在反应规律、预测实验结果等特征。<br />
            基于量子力学或牛顿力学的第一性原理、密度泛函理论（DFT）、分子动力学等方法，可以对物理、化学、材料、生物研究体系进行建模计算，从而得到其最优的几何构型、电子结构、热力学动力学等相关性质。此类计算已经越来越多地被应用到晶体结构、催化界面、电化学效应、材料设计与合成、生物对接等热门领域。<br />
            在得到实验结果后，通过理论计算模拟对实验结果进行支撑，可以增加实验结论的可靠性，提升文章的档次和IF。这也成为了目前科研界众所周知的“捷径”。
          </div>
          <img class="sim-bg" src="https://statics.shiyanjia.com/c/2018/images/simulate/bg.png">
          <a class="sim-btn sim-btn-active" @click="returnCom('makeAppointment')" >立即预约</a>
        </div>
      </div>
      
      <div class="sim-inner sim-inner2">
        <div class="sim-floor sim-floor2">
          <h1 class="sim-title borderLeft borderLeft-primary">软件类型</h1>
          <ul class="sim-soft clearfix">
            <li class="sim-soft-item fl">MS（Material Studio）</li>
            <li class="sim-soft-item fl">VASP</li>
            <li class="sim-soft-item fl">Gaussian</li>
            <li class="sim-soft-item fl">Discovery Studio</li>
          </ul>
        </div>
      </div>
      <div class="sim-inner sim-inner3 clearfix class-wrap">
        <div class="sim-floor sim-floor3">
          <h1 class="sim-title borderLeft borderLeft-success">可以模拟计算的项目</h1>
          <ul class="sim-project clearfix">
            <li class="sim-project-item">
              <h2>几何构型</h2>
              <img src="https://statics.shiyanjia.com/c/2018/images/simulate/item1.png">
              <div class="project-desc">
                键长，键角，晶格参数，稳定构型，表面重构，缺陷，空位，活性位等
              </div>
            </li>
            <li class="sim-project-item">
              <h2>电子相关性质</h2>
              <img src="https://statics.shiyanjia.com/c/2018/images/simulate/item2.png">
              <div class="project-desc">
                HOMO/LUMO能级，能带结构，导带、价带位置，DOS，电子云密度，载流子迁移率，费米能级，功函数等
              </div>
            </li>
            <li class="sim-project-item">
              <h2>动力/热力学相关性质</h2>
              <img src="https://statics.shiyanjia.com/c/2018/images/simulate/item3.png">
              <div class="project-desc">
                吸附能，掺杂能，结合能，分解能，热力学吉布斯自由能等
              </div>
            </li>
            <li class="sim-project-item">
              <h2>生物相关模拟</h2>
              <img src="https://statics.shiyanjia.com/c/2018/images/simulate/item4.png">
              <div class="project-desc">
                多糖分子对接，分子表面计算，生物酶催化计算，蛋白相互作用分析，跨膜输运机制计算等
              </div>
            </li>
            <li class="sim-project-item">
              <h2>有限元模拟comsol</h2>
              <img src="https://statics.shiyanjia.com/c/2018/images/simulate/item5.png">
              <div class="project-desc">
                多物理场模拟仿真
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="sim-inner sim-inner4">
        <div class="sim-floor sim-floor4">
          <h1 class="sim-title borderLeft borderLeft-primary">下单须知</h1>
          <ul class="sim-order clearfix">
            <li class="sim-order-item">一事一议，根据您需要计算的体系和性质来确定。</li>
            <li class="sim-order-item">为更好地得到您期望的结果，请对您需要计算的体系及中间过程进行详细描述（可以是猜想），并提供相关文献。</li>
          </ul>
        </div>
      </div>

      <div id="makeAppointment" class="commend-box class-wrap">
          <div class="info-box clearfix">
              <div class="row row1 fl">
                  <div class="col1 fl font16 color666">
                      1.下载需求模板
                  </div>
                  <div class="col2 fl">
                    <a class="downfile fl downloadMould"  @click="toDonwload()">
                        <img class="down-img" src="https://statics.shiyanjia.com/c/2018/images/biology/download.png" />
                        <p class="down-cont font14" style="">下载</p>
                    </a>
                    <div class="upload-file-desc">
                        <p class="font14 color666">请您下载“<a class="font14 font-bold downloadMould" href="javascript:;">模拟计算·测试单</a>”，详细填写后上传</p>
                        <p class="font14 color666">下单中有任何问题可联系400-831-0631</p>
                    </div>
                  </div>
              </div>
              <div class="row row3 fl">
                  <div class="col1 fl font16 color666">
                      2.上传需求描述
                  </div>
                  <div class="add-btn fl">
                      <input type="hidden" id="attache1" name="attache1" value=""  />
                      <a class="input-file fl">
                          <img class="add-img" src="https://statics.shiyanjia.com/c/2018/images/biology/upload.png" />
                          <p>上传</p>
                          <input class="sel-file" type="file" name="file" @change="upload($event.target.files)"   />
                      </a>
                      <!-- <input type="file" style="display:block" @change="upload($event.target.files)"> -->
                      <div class='file-list fl'>
                      </div>
                  </div>
              </div>
              
              <div class="row row4 fl">
                  <a href="javascript:;" class="sub-btn fl" :class="{'btn-disabled': !isLogin}" id="btnSubmit" @click="save()">提交需求</a>
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
import { webRpc,upload } from '../rpc/index';
import { HOST } from '../config';


export default {
  data () {
    return {
    	HOST:HOST,
    	data:{
    		orderType:'模拟计算',
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
        console.log(this.data);
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
	  	toDonwload(){
	  		window.location.href=this.HOST+'download/template/huitu.doc';
	  	},
	  	save(){
	  		
	  		if(!this.isLogin){
	  			layer.msg("请先登陆");
	  			return;
	  		}
	  		//条件判断
	  		if(this.dara.requestFile==''){
	  			layer.msg("请上传文件");
	  			return;
	  		}
	  		
	  		webRpc.invoke("orderWebRpc.saveSimpleOrder",this.data).then(result=>{
				if(result.retCode==0){
                	layer.msg("提交成功");
                	//this.data={};
                	this.$router.push('/ordersucess');
				}else{
					layer.msg(result.message);
				}
		    }).catch(error =>{});
	  	},
	  	upload(files) {
	  	

	  		
	        if(!files.length) {
	          return ;
	        }
            
            let text= files[0].name.split(".")[1].toUpperCase();
            let html = "";
            html += "<a href='javascript:;' style='display:block;width:180px;height:80px;line-height:30px;background:#fff;border:1px solid #ccc;text-align:center;font-size:18px;color:#7b7d88;font-weight:bold;position:relative'>";
            html += text;
            html += "<br/>";
            html += files[0].name.split(".")[0];
            html += "";
            html += "</a>";
            $('.file-list').prepend(html);

        	let [file] = files;

        	upload.uploadFile(file, 'order').then(path => {
        		this.data.requestFile = path;
          	}).catch(err => {
            	layer.msg(err);
           	 	console.error(err);
          	});
      	}
   	}
   
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.font-bold {
    font-weight: bold;
}
.font14 {
    font-size: 14px;
}
.font16 {
    font-size: 16px;
}
.color666 {
    color: #666;
}
.borderLeft:after {
    content:"";
    display:block;
    width:4px;
    height:24px;
    position:absolute;
    top:11px;
    left:0px;
}
.borderLeft-success:after {
    background:#32d693;
}
.borderLeft-primary:after {
    background:#5f8df7;
}
.sim-btn {
    display:block;
    width:140px;
    color:#fff;
    text-align:center;
    background:#32d693;
}
.sim-btn-active {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    -ms-border-radius: 10px;
    margin-top:33px;
}
.head {
    box-shadow: 1px 1.7px 3px 0px rgba(102, 102, 102, 0.2);
}
.container {
    width: 100%;
    background: #FFF
}
.container .sim-inner {
    width: 100%;
    background: #FFF;
}
.sim-title {
    line-height: 43px;
    font-size: 24px;
    color: #424242;
    font-weight: bold;
    position: relative;
    padding-left: 13px;
}
.sim-floor {
    width: 1200px;
    margin: 0 auto;
}
.sim-floor1 {
    padding:30px 0px 34px 0px;
    position: relative;
}
.sim-floor1 .sim-bg {
    position: absolute;
    left: 669px;
    top: 60px;
}
.sim-floor1 .sim-desc {
    max-width:560px;
    line-height:30px;
    font-size:14px;
    color:#666;
    margin-top:24px;
}
.sim-inner2, .sim-inner4 {
    background: #f6f7fc;
    box-shadow: inset 0px 5px 20px 0px rgba(157, 173, 255, 0.25);
}
.sim-floor2 {
    padding: 30px 0px 40px 0px;
}
.sim-floor2 .sim-soft {
    margin-top: 20px;
}
.sim-floor2 .sim-soft .sim-soft-item {
    width: 280px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #333;
    font-weight: bold;
    float:left;
    margin-right:20px;
    padding-left:20px;
    position:relative;
    background-image: linear-gradient(95deg, rgba(95, 141, 247, 0.3) 1%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(#f6f7fc, #f6f7fc);
}
.sim-floor2 .sim-soft .sim-soft-item:after {
    content:"";
    display:block;
    width: 2px;
    height: 20px;
    background: #5f8df7;
    opacity: 0.5;
    filter: alpha(opacity:50);
    position:absolute;
    top:15px;
    left:0px;
}
.sim-floor3 {
    padding:30px 0px 40px 0px;
}
.sim-floor3 .sim-project {
}
.sim-floor3 .sim-project-item {
    width: 360px;
    height: 170px;
    border: 1px solid #e8e8e8;
    float: left;
    margin:20px 30px 0px 0px;
    padding:10px 30px;
    position: relative;
}
.sim-floor3 .sim-project-item h2 {
    line-height: 36px;
    font-size: 18px;
    color: #424242;
    font-weight: bold;
    margin-top:21px;
    padding-left: 43px;
}
.sim-floor3 .sim-project-item img {
    position: absolute;
    top: 32px;
    left: 30px;
}
.sim-floor3 .sim-project-item .project-desc {
    font-size: 14px;
    color: #808080;
    line-height: 24px;
    margin-top: 15px;
}
.sim-floor4 {
    height: 177px;
    padding: 30px 0px;
}
.sim-floor4 .sim-order {
    margin-top: 15px;
}
.sim-floor4 .sim-order-item {
    font-size: 14px;
    color: #666;
    line-height: 30px;
    padding-left: 20px;
    position: relative;
}
.sim-floor4 .sim-order-item:after {
    content:"";
    display: block;
    width: 10px;
    height: 10px;
    background:#5f8df7;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 0px;
}
.commend-box {
    width:1200px;
    margin-top:20px;
    position:relative;
    margin:0 auto;
}
.commend-box .info-box {
    width:100%;
    background:#fff;
    padding:35px 0px 41px 0px;
}
.commend-box .info-box .row {
    width:100%;
    height:80px;
}
.commend-box .info-box .col1 {
    display:inline-block;
    height:80px;
    line-height:80px;
}
.info-box .row1 .down-img {
    position:absolute;
    top:18px;
    left:25px;
}
.info-box .row1 .down-cont {
    color:#7b7d88;
    position:absolute;
    bottom:17px;
    left:26px;
}
.commend-box .info-box .row1 .downfile {
    display:block;
    width:80px;
    height:80px;
    border:1px dashed #ccc;
    margin-left:32px;
    position:relative;
}
.commend-box .info-box .row1 .upload-file-desc {
    margin-left:20px;
    height:80px;
    display:table-cell;
    vertical-align:middle;
    padding-left:30px;
}
.info-box .row1 .upload-file-desc p {
    line-height:24px;
}
.info-box .row1 .upload-file-desc a {
    color:#32d693;
    line-height:24px;
}
.info-box .row1 .upload-file-desc a:hover {
    text-decoration:underline
}
.commend-box .info-box .row3 {
    margin-top:30px;
}
.commend-box .info-box .add-btn {
    height:80px;
    margin-left:32px;
    position:relative;
    cursor:pointer;
}
.commend-box .info-box .add-btn .input-file {
    width:80px;
    height:80px;
    border:1px dashed #ccc;
}
.commend-box .info-box .add-btn .input-file p {
    font-size:14px;
    color:#7b7d88;
    position:absolute;
    bottom:17px;
    left:26px;
}
.commend-box .info-box .add-btn .add-img {
    position:absolute;
    top:18px;
    left:25px;
}
.commend-box .info-box .add-btn .input-file input {
    opacity:0;
    filter:alpha(opacity=0);
    position:absolute;
    cursor: pointer;
    top:0;
    left:0;
    width:80px;
    height:80px;
    padding:0px;
    margin:0px;
}
.commend-box .info-box .add-btn .file-list {
    margin-left:20px;
}
.commend-box .info-box label {
    display:inline-block;
    height:54px;
    line-height:54px;
    margin-left:161px;
    position:relative;
    cursor:pointer;
}
.commend-box .info-box label img {
    position:absolute;
    top:20px;
    left:-20px;
}
.commend-box .info-box label a {
    color:#32d693;
}
.commend-box .info-box .row4 .sub-btn {
    display:block;
    width:140px;
    height:36px;
    line-height:36px;
    font-size:18px;
    color:#fff;
    background:#2f6275;
    font-weight:bold;
    text-align:center;
    border-radius:5px;
    margin:40px 0px 0px 140px;
}
.btn-disabled {
    background:#ccc!important;
}
.btn-undisabled {
    background:#32d693!important;
}
.add-btn input[type="file"] {display: block;}
</style>

