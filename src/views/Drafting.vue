<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div class="d_banner"></div>
    <div class="class-wrap">
      <div>

        <div class="make-price-box clearfix">
            <p class="make-price drafting-title">科研绘图报价单</p>
            <img class="logo1" src="https://statics.shiyanjia.com/c/images/drafting/money.png" />
            <div class="item fl">
                <img src="https://statics.shiyanjia.com/c/images/drafting/item1.png" />
                <div class="item-title">
                    <span class="item-name fl">SCI期刊封面</span>
                    <span class="item-money fl">2000元起</span>
                </div>
            </div>
            <div class="item fl marginLeft">
                <img src="https://statics.shiyanjia.com/c/images/drafting/item2.png" />
                <div class="item-title">
                    <span class="item-name fl">论文摘要图</span>
                    <span class="item-money fl">1200元起</span>
                </div>
            </div>
            <div class="item fl marginLeft">
                <img src="https://statics.shiyanjia.com/c/images/drafting/item3.png" />
                <div class="item-title">
                    <span class="item-name fl">论文插图</span>
                    <span class="item-money fl">600元起</span>
                </div>
            </div>

            <ul class="remind fl">
                <li class="remind-item">
                    <span>1. 以上为标准产品底价，具体价格经设计师评估设计需求，按绘制难度收费</span>
                </li>
                <li class="remind-item">
                    <span>2. 正常情况下，根据绘图难易程度，在3-7个工作日完成初稿；如需加急需收取加急费</span>
                </li>
                <li class="remind-item">
                    <span>3. 定稿后，可在合理范围内免费修改，需求外的改动协商解决</span>
                </li>
            </ul>
        </div>

        <div class="process-box clearfix">
            <p class="process drafting-title">科研绘图服务步骤</p>
            <img class="logo1" src="https://statics.shiyanjia.com/c/images/drafting/process.png" />
            <div class="item fl">
                <p>1·提交需求</p>
                <div>
                    填写需求并提交，建议准备好详细介绍文字、草图、参考图等，可加快沟通进展
                </div>
                <img class="right-arrow" src="https://statics.shiyanjia.com/c/images/drafting/right-arrow.png">
            </div>
            <div class="item fl marginLeft">
                <p>2·沟通细节</p>
                <div>
                    确认需求、时间、价格等。<br/>
                    联系人：陈老师
                    <span>13625714087（同微信）</span>
                </div>
                <img class="right-arrow" src="https://statics.shiyanjia.com/c/images/drafting/right-arrow.png">
            </div>
            <div class="item fl marginLeft">
                <p>3·付款确认</p>
                <div>
                    请登录个人中心--我的预约
                    确认订单报价并付款
                </div>
                <img class="right-arrow" src="https://statics.shiyanjia.com/c/images/drafting/right-arrow.png">
            </div>
            <div class="item fl marginLeft">
                <p>4·初稿确认</p>
                <div>
                    付款后3-7个工作日给出初稿，经确认无误后正式作图
                </div>
                <img class="right-arrow" src="https://statics.shiyanjia.com/c/images/drafting/right-arrow.png">
            </div>
            <div class="item fl marginLeft">
                <p>5·定稿交付</p>
                <div>
                    终稿出炉后，可免费修改到您满意为止！（不对图形基本结构作大修改）
                </div>
            </div>
        </div>

        <div style="position:relative" id="boxproduct">
            <img class="bg1" src="https://statics.shiyanjia.com/c/images/drafting/bg1.png" />
            <div class="commend-box clearfix">
                <input type="hidden" id="selectedbuffetid" name="selectedbuffetid" value="125" />
                <input type="hidden" id="selectedproductid" name="selectedproductid" value="5841" />
                <p class="commend drafting-title">提交需求</p>
                <img class="logo1" src="https://statics.shiyanjia.com/c/images/drafting/write.png" />
                <div class="info-box clearfix">
                    <div class="row clearfix">
                        <div class="col1 fl">1.下载需求模板</div>
                        <div class="col2 fl">
                            <!-- //statics.shiyanjia.com/c/2018/file/sciDraftingMould.doc -->
                            <a class="file-box fl downloadMould" href="javascript:;">
                                <img src="https://statics.shiyanjia.com/c/images/drafting/download.png" alt="" />
                                <p>下载</p>
                            </a>
                            <div class="file-desc">
                                请您下载“<a class="downloadMould" href="javascript:;">科学指南针绘图需求描述模板</a>”，详细填写后上传<br />下单中有任何问题可联系陈老师：13625714087
                            </div>
                        </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col1 fl">2.上传需求描述</div>
                        <div class="col2 fl">
                            <input type="hidden" id="attache1" name="attache1" value=""  />
                            <a class="file-box fl" href="javascript:;">
                                <img class="add-img" src="https://statics.shiyanjia.com/c/images/drafting/upload.png" />
                                <p>上传</p>
                                <input class="sel-file" type="file" name="file" onchange="getFileName(this, 'rar,zip,png,jpg,gif,doc,docx,xls,xlsx,ppt,pptx');">
                            </a>
                            <div class="file-list fl"></div>
                        </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col1 fl"></div>
                        <div class="col2">
                            <a href="javascript:;" class="sub-btn" id="btnSubmit">提交需求</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="cover-show-box">
            <div style="width:1200px;margin:0 auto;position:relative">
                <p class="cover-show">封面作品展示</p>
                <img class="logo1" src="https://statics.shiyanjia.com/c/images/drafting/cover.png" />
                <div class="cover clearfix">
                  <div class='cover-item fl' style='margin-bottom:60px'>
                    <img class='cover-img' src='../assets/images/cover_1.png'>
                    <div class='cover-desc'>
                      <p> Vol.10, No.43, Oct. 31, 2018.</p>
                      <p> Appl. Mater. Interfaces</p>
                    </div>
                  </div>
                  <div class='cover-item fl' style='margin-bottom:60px;margin-left:60px'>
                    <img class='cover-img' src='../assets/images/cover_2.png'>
                    <div class='cover-desc'>
                      <p> Vol.10, No.43, Oct. 31, 2018.</p>
                      <p> Appl. Mater. Interfaces</p>
                    </div>
                  </div>
                  <div class='cover-item fl' style='margin-bottom:60px;margin-left:60px'>
                    <img class='cover-img' src='../assets/images/cover_3.jpg'>
                    <div class='cover-desc'>
                      <p> Vol.10, No.43, Oct. 31, 2018.</p>
                      <p> Appl. Mater. Interfaces</p>
                    </div>
                  </div>
                  <div class='cover-item fl' style='margin-bottom:60px'>
                    <img class='cover-img' src='../assets/images/cover_4.jpg'>
                    <div class='cover-desc'>
                      <p> Vol.10, No.43, Oct. 31, 2018.</p>
                      <p> Appl. Mater. Interfaces</p>
                    </div>
                  </div>
                  <div class='cover-item fl' style='margin-bottom:60px;margin-left:60px'>
                    <img class='cover-img' src='../assets/images/cover_5.jpg'>
                    <div class='cover-desc'>
                      <p> Vol.10, No.43, Oct. 31, 2018.</p>
                      <p> Appl. Mater. Interfaces</p>
                    </div>
                  </div>
                  <div class='cover-item fl' style='margin-bottom:60px;margin-left:60px'>
                    <img class='cover-img' src='../assets/images/cover_6.jpg'>
                    <div class='cover-desc'>
                      <p> Vol.10, No.43, Oct. 31, 2018.</p>
                      <p> Appl. Mater. Interfaces</p>
                    </div>
                  </div>
                  <div class='cover-item fl' style='margin-bottom:60px'>
                    <img class='cover-img' src='../assets/images/cover_7.jpg'>
                    <div class='cover-desc'>
                      <p> Vol.10, No.43, Oct. 31, 2018.</p>
                      <p> Appl. Mater. Interfaces</p>
                    </div>
                  </div>
                  <div class='cover-item fl' style='margin-bottom:60px;margin-left:60px'>
                    <img class='cover-img' src='../assets/images/cover_8.jpg'>
                    <div class='cover-desc'>
                      <p> Vol.10, No.43, Oct. 31, 2018.</p>
                      <p> Appl. Mater. Interfaces</p>
                    </div>
                  </div>
                  <div class='cover-item fl' style='margin-bottom:60px;margin-left:60px'>
                    <img class='cover-img' src='../assets/images/cover_9.jpg'>
                    <div class='cover-desc'>
                      <p> Vol.10, No.43, Oct. 31, 2018.</p>
                      <p> Appl. Mater. Interfaces</p>
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
export default {
  data () {
    return {
      
    }
  },
  components: {
      vHeader,
      vSider,
      vFootersimper
  },
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }

.bg1{
	position: absolute;
	top: 106px;
	width: 100%;
	height: 579px;
}
.d_banner {
	width: 100%;
	height: 500px;
	background: url('../assets/images/drafting-banner.png') center center;
}
@media screen  and (min-width: 1921px) {
	.d_banner {
		background-size: 100% 100%;
	}
}
.drafting-title {
	width:100%;
	height:61px;
	line-height:61px;
	font-size:30px;
	color:#4a4e62;
}

.make-price-box{
	width:1200px;
	margin:0 auto;
	margin-top:60px;
	position:relative;
}
.make-price-box .make-price{
	padding-left:526px;
}
.make-price-box .logo1{
	position:absolute;
	left:447px;
	top:0;
	width:60px;
	height:60px;
}
.make-price-box .item{
	position:relative;
	width:360px;
	height:270px;
	background-color:rgba(253, 240, 234, 0.67);
	margin-top:44px
}
.make-price-box .marginLeft{
	margin-left:60px
}
.make-price-box .item img{
	display: block;
  	width: 320px;
  	height: 200px;
	margin: 20px auto 0;
	/*position:absolute;
	top:20px;
	left:50%;
	transform:translateX(-50%)*/
}
.make-price-box .item .item-title{
	position:absolute;
	bottom:0;
	width:100%;
	height:50px;
}
.make-price-box .item .item-title .item-name{
	display:inline-block;
	width:50%;
	height:50px;
	line-height:50px;
	font-size:18px;
	color:#ee7139;
	text-align:right;
	padding-right:5px
}
.make-price-box .item .item-title .item-money{
	display:inline-block;
	width:50%;
	height:50px;
	line-height:50px;
	font-size:18px;
	color:#ee7139;
	padding-left:5px;
}
.make-price-box .remind{
	margin-top:30px;
	margin-left:15px;
	list-style:none;
}
.make-price-box .remind .remind-item span{
	display:inline-block;
	line-height:30px;
	font-size:14px;
	color:#7b7d88;
}

.process-box{
	position:relative;
	width:1200px;
	margin:60px auto 0;
}
.process-box .process{
	padding-left:510px
}
.process-box .logo1{
	position:absolute;
	top:0;
	width:60px;
	height:60px;
	left:431px;
}
.process-box .item{
	position:relative;
	width:200px;
	height:180px;
	margin-top:45px;
	border-radius:15px;
	background:#fff;
	box-shadow:0px 0px 20px rgba(119,157,248,0.5);
}
.process-box .item span{
	display:block;
	width:165px;
	height:24px;
	line-height:24px;
	background:#fef5f1;
	margin:0 auto;
	font-size:14px;
	color:#ee7239;
	text-align:center
}
.process-box .marginLeft{
	margin-left:50px
}
.process-box .item p{
	width:100%;
	height:77px;
	line-height:77px;
	font-size:18px;
	color:#5f8df7;
	padding-left:14px
}
.process-box .item div{
	width:100%;
	line-height:28px;
	padding:0 15px;
	font-size:14px;
	color:#7b7d88;
}
.process-box .right-arrow{
	position:absolute;
	right:-37px;
	top:0;
	bottom: 0;
	margin: auto;
	width:24px;
	height:24px;
}


.commend-box{
	position:relative;
	width:1200px;
	margin:44px auto 0;
}
.commend-box .commend{
	height:90px;
	line-height:90px;
	padding-left:561px
}
.commend-box .logo1{
	position:absolute;
	left:481px;
	top:16px;
	width:60px;
	height:60px;
}
.commend-box .info-box{
	width:1200px;
	margin:54px auto 0;
	padding:32px 0 42px 0;
	background:#fff;
}
.info-box .row {
	width: 100%;
	margin-bottom: 20px;
}
.info-box .col1 {
	width: 218px;
	line-height: 80px;
	font-size: 16px;
	color: #666;
	text-align: right;
}
.info-box .col2 {
	min-width: 300px;
}
.info-box .file-box {
	position: relative;
	display: block;
	width: 80px;
	height: 80px;
	margin-left: 32px;
	border: 1px dashed #CCC;
}
.info-box .file-box img {
	display: block;
	margin: 18px auto 0;
}
.info-box .file-box p {
	line-height: 22px;
	font-size: 14px;
	color: #7B7D88;
	text-align: center;
}
.info-box .file-box .sel-file {
	position: absolute;
	top: 0;
	letf: 0;
	z-index: 9;
	width: 80px;
	height: 80px;
	opacity: 0;
	filter: alpha(opacity: 0);
	cursor: pointer;
}
.info-box .file-desc {
	display: table-cell;
	vertical-align: middle;
	height: 80px;
	line-height: 24px;
	margin-left: 20px;
	padding-left: 30px;
	font-size: 14px;
	color: #666;
}
.info-box .file-desc a{
	font-size: 14px;
	color: #32D693;
}
.info-box .file-desc a:hover {
	text-decoration: underline;
}
.info-box .file-list {
	margin-left: 20px;
}
.info-box .sub-btn {
	display: block;
	width: 140px;
	height: 36px;
	line-height: 36px;
	background: #32d693;
	margin:40px 0 0 250px;
	font-size: 18px;
	color: #fff;
	text-align: center;
	border-radius: 5px;
}

.cover-show-box{
	position: relative;
	width: 100%;
	background-color: #f6f7fc;
	/*margin: 40px 0;*/
	padding: 58px 0 62px 0;
}
.cover-show-box .cover-show{
	height: 61px;
	line-height: 61px;
	margin: 0 auto;
	padding-left: 541px;
	font-size: 30px;
	color: #4a4e62;
}
.cover-show-box .logo1{
	position: absolute;
	left: 461px;
	top: 0px;
	width: 60px;
	height: 60px;
}
.cover-show-box .cover{
	margin-top: 45px
}
.cover-show-box .cover .cover-item{
	position: relative;
	width: 360px;
	height: 500px;
	background: #e8e8e8;
	padding-top: 20px;
}
.cover-show-box .cover .cover-item .cover-img{
	display: block;
	width: 320px;
	height: 420px;
	margin: 0 auto;
}
.cover-show-box .cover .cover-item .cover-more{
	line-height:45px;
	font-size: 30px;
	color: #4a4e62;
	text-align: center;
}
.cover-show-box .cover .cover-item .cover-desc{
	width: 100%;
	height: 60px;
	background: #8bacf9;
	padding-top: 8px
}
.cover-show-box .cover .cover-item .cover-desc p{
	line-height: 24px;
	font-size: 16px;
	color: #fff;
	text-align: center;
}
</style>

