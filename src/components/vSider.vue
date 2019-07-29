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
                    <div v-if="!listData.length==0">
                        <div class="mslide" v-bind:class="{changeColor:current}">
                            <div class="plugin-bd" style="height:400px">
                                <div class="tm-mcListBox">
                                    <div class="tm-mcTop">
                                        <span>购物车</span>
                                    </div>
                                    <ul class="tm-list carContent" >
                                        <li v-for="(item, index) in listData" :key="index" class="clearfix caritem" style="margin-bottom:10px">
                                            <div class="commName">
                                                <label for="tmcElectCart">{{item.key.title}}</label>
                                            </div>
                                            <div class="commNum clearfix" v-for="(subItem, i) in item.val">
                                                <div class="fl tm-img">
                                                    <img :src="HOST+item.key.imagesArr[0]">
                                                </div>
                                                <div class="fl tm-txt" >
                                                    <span >{{subItem.title}}</span>
                                                </div>

                                                <div class="fl tm-pri">
                                                	<span v-if="subItem.calAble==1">￥{{subItem.price}}</span>
                                                	<span v-if="subItem.calAble!=1">面议</span>
                                                </div>

                                                <div class="fr tm-del" @click="onToDel(item.id,subItem.id)">
                                                    x
                                                </div>
                                            
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tm-btn">
                                    <div class="tm-mcTotal clearfix">
                                        <h3>
                                            <span class="tm-e1">预估费用(元)：</span>
                                            <strong class="tm-mcCartNumTotal">{{totalPrice}}</strong>
                                        </h3>
                                    </div>
                                    <div class="tm-mcCashier" data-tmc="go" @click="tobuy()">
                                        <div class="tm-mcGo">结 算<s></s>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>

        <div ref="goTop" @click="onGoTop" id="goTop"></div>
    </div>
</template>

<script>
import { HOST } from '../config';

export default {
  props: ['obj'],
  data () {
    return {
      HOST:HOST,
      current:false,
      totalPrice:'面',
      listData:[],
      objs:{},
    }
  },
  watch:{
      obj(val){
      	  this.listData = val;
          this.objs=val;
          deep:true
      },
  },
  created () {
  		
      if(JSON.parse(sessionStorage.getItem("car"))==null){
          return false
      }
      
      this.listData=JSON.parse(sessionStorage.getItem("car"))   
  },
  
  methods: {
 
    onCart(){
        if(sessionStorage.currentMember==null){
            layer.msg("请先登陆");
            return false
        }
        

        this.listData=JSON.parse(sessionStorage.getItem("car"));
        
		
        if(this.listData==null || (this.listData.length===0 && !this.objs.hasOwnProperty('key'))){
            layer.msg("购物车空");
            return false
        }else{
            if(!this.current && this.objs.hasOwnProperty('key')){
                this.listData.push(this.objs)  
                this.objs={}
            }
        }
        this.current=!this.current
        
        //计算总价
        var supPrice = 0;
        for(var i = 0;i<this.listData.length;i++){
	  		
	  		var curItems = this.listData[i].val;
	  		
	  		for(var j=0; j<curItems.length;j++){
	  			console.log(curItems[j]);
	  			if(curItems[j].calAble==1){
	  				supPrice+=curItems[j].price;
	  				console.log(">>>>>>>"+supPrice);
	  			}else{
	  				this.totalPrice ='面议';
	  				return;
	  			}
	  		}
   	 	}
   	 	
   	 	this.totalPrice = supPrice;
   	 		
    },
    // 删除购物车
    onToDel(keyId,valId){
    
    	console.log(keyId);
    	console.log(valId);
        let arr=[...this.listData]
        for (let i = 0; i < arr.length; i++) {

            for (let j = 0; j < arr[i].val.length; j++) {

                if(arr[i].val[j].id===valId){
                    if(arr[i].val.length===1){
                        this.listData.splice(i,1)
                    }else{
                        this.listData[i].val.splice(j,1)
                    }
                }
                
            }
        }
        
        sessionStorage.setItem("car",JSON.stringify(this.listData))
    },
    tobuy(){
    	 if(this.listData.length===0 && !this.objs.hasOwnProperty('key')){
            layer.msg("购物车空");
            return false
        }
    	this.$router.push('/order');
    },
    onGoTop(){
        document.getElementById("app").scrollIntoView();
    }
  },
  beforeDestroy () {
      //sessionStorage.setItem("car",JSON.stringify(this.listData))
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
    border-bottom: 1px solid #9f9f9f;
    background-color: #e52e2f;
    color: #ffffff;
    line-height: 28px;
    text-align: center;
}
.tm-mcTop a{
    height:100% !important;
}

.carContent{
	overflow: auto;
    height: 300px;
    padding: 0 3px;
}

.commName{
    margin-bottom: 5px;
    height: 25px;
    font-size: 12px;
    line-height: 25px;
}
.commNum{
    margin-left: 5px;
    margin-bottom: 3px;
    border-bottom: 1px solid #eee;
    background-color: #edecec;
}
.caritem{
	margin-bottom: 10px;
    border: 1px solid #d4d1d1;
    padding-bottom: 5px;
}
.tm-check{
    padding-top: 20px;
}
.tm-list .tm-img{
    width: 60px;
    height: 60px;
}
.tm-img img{
	width: 50px;
    height: 50px;
    border: 1px solid #cbcbcbee;
}
.tm-txt{
    margin-left: 10px;
    padding-top: 20px;
    width: 120px;
    font-size: 12px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.tm-pri{
    margin-left: 2px;
    padding-top: 20px;
    font-size: 12px;
    color: #1e1e1e;
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
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0;
    background-color: #e6e6e6;
    z-index: 3;
    color: #333;
}

.tm-mcTotal {
	padding-left: 3px;
    height: 30px;
    line-height: 30px;
    background-color: #e6e6e6;
    padding: 0;
    color: #333;
    overflow: hidden;

}
.tm-del{
    margin-top: 20px;
    margin-right: 5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    line-height: 1;
    vertical-align: top;
    border: 1px solid #ccc;
}
.tm-mcListBox{
	padding:0px;
}
.tm-mcTotal h3 {
    height: 30px;
    margin-right: 20px;
    color: #000;
    text-align: right;
    font-weight: 400;
    font-size: 14px;
}
.tm-mcCashier {
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
    text-align: center;
    font-family: STHeiti,"microsoft yahei" simsun arial;
    color: #fff;
    font-size: 14px;
    }
</style>


