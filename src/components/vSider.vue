<template>
  <div id="mslide">
        <ul>
            <li>
                <!-- <script id="qd285215377156bd551e9b4e74592610182f67d9c06b" src="https://wp.qiye.qq.com/qidian/2852153771/56bd551e9b4e74592610182f67d9c06b" charset="utf-8" async defer></script> -->
                <a id="QQtent" href="javascript:;">
                  <i><img src="../assets/images/slideqq.png"></i>
                  <p>在线客服</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i><img src="../assets/images/slidep.png"></i>
                    <p>联系我们</p>
                    <div class="mslide"><h4>020-61086425 转 8022</h4></div>
                </a>
            </li>
            <!--<li>
                <a href="javascript:;">
                    <i><img src="../assets/images/slidewx.png"></i>
                    <p>关注微信</p>
                    <div class="mslide"><img src="../assets/images/ewm.png"></div>
                </a>
            </li>-->
            <li >
                <a href="javascript:;">
                    <div @click="onCart()">
                        <i><img src="../assets/images/timg.png" style="heigth:200%;"></i>
                        <p>购物车</p>
                    </div>
                    <div class="mslide" v-bind:class="{changeColor:current}">
                        <div class="plugin-bd" style="height:625px">
                            <div class="tm-mcListBox">
                                <div class="tm-mcTop">
                                    <!-- <span>查看全部</span> -->
                                    <div class="fl">
                                        <input type="checkbox" checked="" class="tm-mcElectCart">
                                    </div>
                                    <label for="tmcElectCart">全选</label>
                                </div>
                                <ul class="tm-list">
                                    <li>
                                        <div class="commName">
                                            <div class="fl">
                                                <input type="checkbox" checked="" class="tm-mcElectCart">
                                            </div>
                                            <label for="tmcElectCart">金砺旗舰店</label>
                                            <span>￥{{pri}}</span>
                                        </div>
                                        <div class="commNum">
                                            <div class="fl tm-check">
                                                <input type="checkbox" checked="" class="tm-mcElectCart" style="width:25px;">
                                            </div>
                                            <div class="fl tm-img">
                                                <img src="https://img.alicdn.com/bao/uploaded/i2/2578854143/O1CN01B83RKc1gTXQvEe2WO_!!2578854143.jpg_sum.jpg">
                                            </div>
                                            <div class="fl tm-txt">
                                                黑色衣服
                                            </div>

                                            <div class="fl tm-pri">
                                                <div class="comm-add" @click="onAdd()">+</div>
                                                <div class="cNum fl">{{num}}</div>
                                                <div class="comm-sub" @click="onSub()">-</div>
                                            </div>

                                            <div class="fl tm-mon">
                                                ￥{{pri}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tm-btn">
                                <div class="tm-mcTotal clearfix">
                                    <h3>
                                        <span class="tm-e1">购物车</span>
                                        <span class="tm-e2">已选</span>
                                        <strong class="tm-mcCartNumTotal">1</strong>
                                        <span class="tm-e2">件</span>
                                    </h3>
                                    <span class="tm-mcTotalFeeWrap fr">
                                        <strong class="tm-mcTotalFee">¥{{pri*num}}</strong>
                                    </span>
                                </div>
                                <div class="tm-mcCashier" data-tmc="go">
                                    <div class="tm-mcGo">结 算<s></s>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <!-- <div ref="goTop" @click="onGoTop"></div> -->
        <div ref="goTop" @click="onGoTop" id="goTop"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      current:false,
      num:0,
      pri:14
    }
  },
  methods: {
    onAdd(){
        this.num=++this.num
    },
    onSub(){
        if(this.num===0){
            return;
        }
        this.num=--this.num
    },
    onCart(){
        if(sessionStorage.currentMember==null){
            layer.msg("请先登陆");
            return false
        }
        this.current=!this.current
    },
    onGoTop(){
        document.getElementById("app").scrollIntoView();
    }
  }
}
</script>

<style scoped>
.changeColor{
	display: block !important;
}
.plugin-bd{
    width: 272px;
    overflow-x: hidden;
    background-color: #e6e6e6;
}
.tm-mcTop{
    height: 28px;
}
.tm-mcTop a{
    height:100% !important;
}

.tm-list li{
    height:60px;
}
.tm-check{
    padding-top: 20px;
}
.tm-list .tm-img{
    width: 60px;
    height: 60px;
}
.tm-img img{
    width: 100%;
    height: 100%;
}
.tm-txt{
    width: 50px;
    padding-top: 20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.tm-pri{
    padding-top: 20px;
}
.cNum{
    margin-right: 10px;
    margin-left: 10px
}
.comm-add,.comm-sub{
    float: left;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #ccc;
    text-align: center;
}
.tm-mon{
    margin-left: 20px;
    padding-top: 20px;
    width: 20px;
    text-align: center;
}
.tm-btn {
    position: relative;
    padding: 0 16px;
    background-color: #e6e6e6;
    z-index: 3;
    color: #333;
}

.tm-mcTotal {
    width: 248px;
    height: 30px;
    line-height: 30px;
    background-color: #e6e6e6;
    padding: 0;
    color: #333;
    overflow: hidden;

}

.clearfix{
    clear: both;
}

.tm-mcTotal h3 {
    float: left;
    width: 100px;
    height: 30px;
    color: #000;
    font-weight: 400;
}
.tm-mcCashier {
    width: 248px;
    height: 40px;
    line-height: 40px;
    background-color: #ff0036;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}
 .tm-mcGo {
    position: relative;
    margin-top: 0;
    width: 70px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    text-align: left;
    font-family: STHeiti,"microsoft yahei" simsun arial;
    color: #fff;
    font-size: 14px;
    }
</style>


