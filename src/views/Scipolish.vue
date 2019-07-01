<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div class="banner">
        <!-- <div class="banner-cont">
            <h1><span>科学指南针</span>·论文润色</h1>
            <h1>助力您的科研成果登上国际舞台</h1>
            <p>让您不在还害怕因为英文差而被拒稿，业界顶尖专家、专业母语编辑给您最好的服务质量保障</p>
        </div> -->
    </div>

    <div class="navbar class-wrap">
      <div class="navbar-cont">
          <div class="navbar-item fl borderRight">
              <div class="nav-tr">
                  <div class="navbar-origin clearfix">
                      <div class="img-box fl">
                          <img src="https://statics.shiyanjia.com/c/v3/images/paper/professor.png" alt="">
                      </div>
                      <p class="fl">专业编辑</p>
                  </div>
                  <div class="navbar-active clearfix">
                      <div class="img-box fl">
                          <img src="https://statics.shiyanjia.com/c/v3/images/paper/professor-active.png" alt="" />
                      </div>
                      <h3 class="">100%母语编辑具有丰富编辑经验和多年专业背景</h3>
                  </div>
              </div>
          </div>

          <div class="navbar-item fl borderRight">
              <div class="nav-tr ">
                  <div class="navbar-origin clearfix">
                      <div class="img-box fl">
                          <img src="https://statics.shiyanjia.com/c/v3/images/paper/secret.png" alt="">
                      </div>
                      <p class="fl">严格保密</p>
                  </div>
                  <div class="navbar-active clearfix">
                      <div class="img-box fl">
                          <img src="https://statics.shiyanjia.com/c/v3/images/paper/secret-active.png" alt="" />
                      </div>
                      <h3 class="">100%每个稿件均与客户签订保密协议，严格保障稿件安全</h3>
                  </div>
              </div>
          </div>

          <div class="navbar-item fl borderRight">
              <div class="nav-tr">
                  <div class="navbar-origin clearfix">
                      <div class="img-box fl">
                          <img src="https://statics.shiyanjia.com/c/v3/images/paper/service.png" alt="">
                      </div>
                      <p class="fl">完善客服</p>
                  </div>
                  <div class="navbar-active clearfix">
                      <div class="img-box fl">
                          <img src="https://statics.shiyanjia.com/c/v3/images/paper/service-active.png" alt="" />
                      </div>
                      <h3 class="">为客户提供响应快速、态度很好的客服服务</h3>
                  </div>
              </div>
          </div>

          <div class="navbar-item fl">
              <div class="nav-tr">
                  <div class="navbar-origin clearfix">
                      <div class="img-box fl">
                          <img src="https://statics.shiyanjia.com/c/v3/images/paper/money.png" alt="">
                      </div>
                      <p class="fl">价格优惠</p>
                  </div>
                  <div class="navbar-active clearfix">
                      <div class="img-box fl">
                          <img src="https://statics.shiyanjia.com/c/v3/images/paper/money-active.png" alt="" />
                      </div>
                      <h3 class="">秉承科学指南针一贯特点，为您提供质优价廉的服务</h3>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <div class="service clearfix">
        <div class="class-wrap">
            <div class="service-item service-item_1 fl marginRight55 transition">
                <div class="top">
                    <h1>英文论文润色</h1>
                    <h2>标准/高级/专家润色</h2>
                </div>
                <div class="bottom">
                    <p>欧美母语编辑<br />语言、语法、文风一致性修改<br />术语准确性、逻辑结构调整<br />无限重修</p>
                    <a class="detail-btn" href="scipolishen.html">了解详情</a>
                </div>
            </div>
            <div class="service-item service-item_2 fl marginRight55 transition">
                <div class="top">
                    <h1>中英学术翻译</h1>
                    <h2>论文/简历等中英翻译</h2>
                </div>
                <div class="bottom">
                    <p>学科锲合的翻译老师<br />双语专家校译<br />英文语言润色</p>
                    <a class="detail-btn" href="translate.html">了解详情</a>
                </div>
            </div>
            <div class="service-item service-item_3 fl transition">
                <div class="top">
                    <h1>SCI论文投稿支持</h1>
                    <h2>SCI论文投稿一站式解决方案</h2>
                </div>
                <div class="bottom">
                    <p>全套论文润色服务<br />推荐投稿期刊，审稿人<br />投稿协助<br />返退稿协助</p>
                    <a class="detail-btn" href="scisupport.html">了解详情</a>
                </div>
            </div>
        </div>
    </div>

    <div class="question class-wrap">
        <div class="qs-cont">
            <h1>常见问题及回答</h1>
            <div class="qs-box clearfix">
                <ul class="qs-classify fl">
                    <li data-id="polish" class="active">论文润色FAQ</li>
                    <li data-id="translate">学术翻译FAQ</li>
                </ul>
                <div class="qs-list fl">
                    <div class="qs-item" id="polish">
                        <div class="qs-list-item">
                            <div class="qs" data-isfold="true">
                                1.稿件中的图片、表格、参考文献是否需要保留？
                                <img class="qs-img" src="https://statics.shiyanjia.com/c/v3/images/paper/add.png" alt="" />
                            </div>
                            <div class="as transition">
                                <p>答：参考文献可以临时删除，图片、表格可以保留，我们最多为您编辑10张图片。</p>
                            </div>
                        </div>
                        <div class="qs-list-item">
                            <div class="qs" data-isfold="true">
                                2.请问有编辑过的文件可供我参考吗?
                                <img class="qs-img" src="https://statics.shiyanjia.com/c/v3/images/paper/add.png" alt="" />
                            </div>
                            <div class="as transition">
                                <p>答：当然可以，您可以点击XXX看各学科领域的编辑范例。（范例需要在链接中展示）</p>
                            </div>
                        </div>
                        <div class="qs-list-item">
                            <div class="qs" data-isfold="true">
                                3.我不确定哪项服务最适合我的稿件，可以给我建议吗？
                                <img class="qs-img" src="https://statics.shiyanjia.com/c/v3/images/paper/add.png" alt="" />
                            </div>
                            <div class="as transition">
                                <p>答：可以的。我们的编辑服务涵盖各种选项以确保照顾到所有稿件需求，您可以将您的稿件寄至essaypolishing@sciclubs.cn，我们将协助您选择最合适的服务。</p>
                            </div>
                        </div>
                        <div class="qs-list-item">
                            <div class="qs" data-isfold="true">
                                4.我能收到有追踪修订的返稿吗？
                                <img class="qs-img" src="https://statics.shiyanjia.com/c/v3/images/paper/add.png" alt="" />
                            </div>
                            <div class="as transition">
                                <p>答：可以的，我们提供的最终版稿件皆是有追踪修订的，若希望收到不显示修订的返稿，也可以跟我们要求。您可以在提交订单的备注栏注明这类需求。</p>
                            </div>
                        </div>    
                    </div>
                    <div class="qs-item" id="translate">
                        <div class="qs-list-item">
                            <div class="qs" data-isfold="true">
                                1.我有一篇中文的论文，已自己／请其他人帮我翻译成英文，应选择论文润色服务还是学术翻译服务呢？
                                <img class="qs-img" src="https://statics.shiyanjia.com/c/v3/images/paper/add.png" alt="" />
                            </div>
                            <div class="as transition">
                                <p>答：这主要取决于译稿质量，建议请外国朋友读读。如果读得通、只是文句修饰的问题，可直接选择论文润色服务。若要投稿期刊建议选择高级论文润色。若是读不通，可能是所谓的中式英文，建议直接选择学术翻译服务。</p>
                            </div>
                        </div>
                        <div class="qs-list-item">
                            <div class="qs" data-isfold="true">
                                2.我的系所／学校／公司有比较多的润色与翻译需求，能否与科学指南针进行长期深入合作？
                                <img class="qs-img" src="https://statics.shiyanjia.com/c/v3/images/paper/add.png" alt="" />
                            </div>
                            <div class="as transition">
                                <p>答：当然可以，可以通过电话、微信或邮件告知我们。我们的业务负责人会与您联系，为您的单位定制专属的合作方案。</p>
                            </div>
                        </div>
                        <div class="qs-list-item">
                            <div class="qs" data-isfold="true">
                                3.请问有翻译过的文件可供我参考吗?
                                <img class="qs-img" src="https://statics.shiyanjia.com/c/v3/images/paper/add.png" alt="" />
                            </div>
                            <div class="as transition">
                                <p>答：请点击XXX链接看各学科领域的翻译范例，或联系我们essaypolishing@sciclubs.cn询问进一步资讯。（范例需要在链接中展示）</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="caret transition"></div>
                </div>
            </div>
        </div>
    </div>

    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
import $ from "jquery";
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
  created () {
    this.$nextTick(()=>{
      this.init()
    })
  },
  methods: {
    QSItemClick(){
      $(".qs").on("click", function(){
            var _this = $(this);
            var obj = _this.siblings();
            var srcAdd = 'https://statics.shiyanjia.com/c/v3/images/paper/add.png';
            var srcMinus = 'https://statics.shiyanjia.com/c/v3/images/paper/minus.png';
            var height = obj.find("p").height() + 30;
            if(_this.attr('data-isfold') == 'true') {
                $(".as").css({height: 0});
                $(".qs").find('img').attr({src: srcAdd});
                $(".qs").attr({'data-isfold': 'true'}).css({borderColor: '#E8E8E8'});
                _this.find("img").attr({src: srcMinus});
                obj.css({height: height});
                _this.attr({'data-isfold': 'false'}).css({borderColor: 'transparent'});
            }else {
                obj.css({height: 0});
                _this.attr({src: srcAdd});
                _this.find("img").attr({src: srcAdd});
                _this.attr({'data-isfold': 'true'}).css({borderColor: '#E8E8E8'});
            }
        });
    },
    QSClassifyClick(){
        $(".qs-classify").find("li").on("click", function(){
            var index = $(this).index();
            var id = $(this).attr("data-id");
            top1 = 10 + 60 * index + 30 - 20;
            $(".qs-classify").find("li").removeClass("active");
            $(".qs-list .qs-item").hide();
            $("#" + id).show();
            $(this).addClass("active");
            $(".caret").css({top: top1});
        });
    },
    init(){
        this.QSItemClick();
        this.QSClassifyClick();
        $("#h_scipolish").addClass("header-item-active");
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.marginRight55 {
    margin-right: 55px;
}
.banner {
    width: 100%;
    height: 500px;
    /*background: lightgreen;*/
    background: url('../assets/images/lwrs-banner-bg.png') center center;
}
@media screen and (min-width: 1921px) {
    .banner {
        background-size: 100% 100%;
    }
}
.banner-cont {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding-left: 99px;
    padding-top: 97px;
}
.banner-cont h1 {
    line-height: 73px;
    font-size: 52px;
    color: #FFF;
    font-weight: bold;
}
.banner-cont h1 span {
    color: #32D693;
}
.banner-cont p {
    line-height: 33px;
    margin-top: 6px;
    font-size: 24px;
    color: #FFF;
    font-weight: bold;
}
.navbar {
    width: 100%;
    height: 130px;
    background: #FFF;
}
.navbar-cont {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}
.navbar-item {
    position: relative;
    width: 25%;
    height: 100%;
    padding-left: 20px;
    overflow: hidden;
}
.navbar-item .nav-tr {
    position: absolute;
    width: 100%;
    top: 0;
    transition: all .7s linear;
}
.nav-tr:hover {
    top: -130px;
}
.borderRight:after {
    position: absolute;
    top: 50px;
    right: 0;
    display: block;
    content:'';
    width: 2px;
    height: 30px;
    background: #E8E8E8;
}
.navbar-item .img-box {
    width: 80px;
    height: 80px;
    line-height: 80px;
    margin: 25px 0;
    text-align: center;
    /* background: url('../../images/paper/grid.png') no-repeat; */
}
.navbar-item p {
    line-height: 130px;
    margin-left: 20px;
    font-size: 18px;
    color: #333;
    font-weight: 700;
}
.navbar-item h3 {
    display: table-cell;
    vertical-align: middle;
    height: 130px;
    line-height: 20px;
    padding: 0 40px 0 20px;
    font-size: 14px;
    color: #666;
}
.service {
    width: 100%;
    height: 470px;
    padding: 50px 0 58px 0;
    background: url('../assets/images/background1.png') no-repeat;
    background-size: 100% 100%;
}
.service-cont {
    width: 100%;
    height: 470px;  
    margin: 0 auto;
    padding: 0 20px;
}
.service-item {
    width: 350px;
    height: 362px;
    box-shadow: 1px 1px 5px 2px rgba(153, 153, 153, 0.3);
}
.service-item .top {
    width: 100%;
    height: 120px;
    padding: 32px 0 36px 0;
}
.service-item_1 .top {
    background: url('../assets/images/background_1.png');
}
.service-item_2 .top {
    background: url('../assets/images/background_2.png');
}
.service-item_3 .top {
    background: url('../assets/images/background_3.png');
}
.service-item .top h1 {
    line-height: 25px;
    font-size: 18px;
    color: #FFF;
    text-align: center;
}
.service-item .top h2 {
    line-height: 22px;
    margin-top: 5px;
    font-size: 16px;
    color: rgba(255, 255, 255, .9);
    text-align: center;
}
.service-item .bottom {
    position: relative;
    width: 100%;
    height: 242px;
    background: #FFF;
    padding-top: 30px;
}
.service-item .bottom p {
    line-height: 30px;
    font-size: 14px;
    color: #424242;
    text-align: center;
}
.service-item .bottom .detail-btn {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: auto;
    display: block;
    width: 120px;
    height: 40px;
    line-height: 40px;
    background: #FFF;
    border: 1px solid #32D693;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    text-align: center;
    border-radius: 100px;
}
.service-item .bottom .detail-btn:hover {
    background: #32D693;
    color: #FFF;
}
.question {
    width: 100%;
    padding: 25px 0;
}
.qs-cont {
    width: 1200px;
    margin: 0 auto;
}
.qs-cont h1 {
    line-height: 33px;
    font-size: 24px;
    color: #333;
    font-weight: bold;
}
.qs-box {
    margin-top: 15px;
}
.qs-classify {
    width: 180px;
    background: #FFF;
    padding: 10px 0;
}
.qs-classify li {
    position: relative;
    line-height: 60px;
    font-size: 18px;
    color: #333;
    text-align: center;
    cursor: pointer;
}
.qs-classify li:hover {
    font-weight: bold;
}
.qs-classify li.active {
    font-weight: bold;
}
.qs-classify li.active:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    margin: auto;
    content:'';
    display: block;
    width: 24px;
    height: 4px;
    background: #32D693;
}
.qs-list {
    position: relative;
    width: 1000px;
    min-height: 380px;
    background: #FFF;
    margin-left: 20px;
    padding: 10px 30px;
}
#translate {
    display: none;
}
.qs-list-item .qs {
    position: relative;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #E8E8E8;
    cursor: pointer;
}
.qs-list-item .qs img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
}
.qs-list-item .as {
    position: relative;
    z-index: 99;
    height: 0;
    margin: 0 -30px;
    background: rgba(240, 244, 245, .5);
    font-size: 14px;
    color: #333;
    overflow: hidden;
}
.qs-list-item .as p {
    margin: 19px 40px 11px 30px;
}
.qs-list .caret {
    position: absolute;
    top: 10px;
    left:-28px;
    border: 20px solid transparent;
    border-right-color: #FFF;
}


</style>

