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
                    <div v-if="!listData==[]">
                        <div class="mslide" v-bind:class="{changeColor:current}">
                            <div class="plugin-bd" style="height:625px">
                                <div class="tm-mcListBox">
                                    <div class="tm-mcTop">
                                        <!-- <span>查看全部</span> -->
                                        <div class="fl">
                                            <input type="checkbox" class="tm-mcElectCart" @click="checkAll"  v-model="checked">
                                        </div>
                                        <label for="tmcElectCart">全选</label>
                                    </div>
                                    <ul class="tm-list">
                                        <li v-for="(item, index) in listData" :key="index" class="clearfix" style="margin-bottom:10px">
                                            <div class="commName">
                                                <div class="fl">
                                                    <input type="checkbox" class="tm-mcElectCart"  v-model="checkModel" :value="item.dataObj.id">
                                                </div>
                                                <label for="tmcElectCart">{{item.dataObj.title}}</label>
                                            </div>
                                            <div class="commNum clearfix">
                                                <!-- <div class="fl tm-check">
                                                    <input type="checkbox" checked="" class="tm-mcElectCart" style="width:25px;">
                                                </div> -->
                                                <div class="fl tm-img">
                                                    <img :src="item.dataObj.imagesArr">
                                                </div>
                                                <div class="fl tm-txt" >
                                                    <!-- 黑色衣服 -->
                                                    <span v-for="(list, i) in item.dataArr" :key="i">{{list.title}}</span>
                                                </div>

                                                <div class="fl tm-pri">
                                                    <div class="comm-add" @click="onAdd(index)">+</div>
                                                    <div class="cNum fl">{{item.dataObj.buyNum+1}}</div>
                                                    <div class="comm-sub" @click="onSub(index)">-</div>
                                                </div>

                                                <!-- <div class="fl tm-mon">
                                                    ￥{{pri}}
                                                </div> -->
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tm-btn">
                                    <div class="tm-mcTotal clearfix">
                                        <h3>
                                            <span class="tm-e1">购物车</span>
                                            <span class="tm-e2">已选</span>
                                            <strong class="tm-mcCartNumTotal">{{checkModel.length}}</strong>
                                            <span class="tm-e2">件</span>
                                        </h3>
                                        <!-- <span class="tm-mcTotalFeeWrap fr">
                                            <strong class="tm-mcTotalFee">{{num}}</strong>
                                        </span> -->
                                    </div>
                                    <div class="tm-mcCashier" data-tmc="go">
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
export default {
  props: ['obj','arr'],
  data () {
    return {
      current:false,
    //   num:0,
      pri:14,
      listData:[],
      objs:{},
      arrs:[],
      checked:false, //是否全选
      checkModel:[] //双向数据绑定的数组，我是用的id
    }
  },
//   computed: {
//     num:function(){
//         let n=0;
//         for (let k = 0; k < this.listData.length; k++) {
//             for (let j = 0; j < this.checkModel.length; j++) {
//                 if(this.listData[k].dataObj.id===this.checkModel[j]){
//                     // console.log(1)
//                     n=n+this.listData[k].dataObj.buyNum
//                 }
//             }
            
//         }
//         console.log(n);
        
//         return n;
//     }  
//   },
  watch:{
      obj(val){
          this.objs=val
          deep:true
      },
      arr(val){
          this.arrs=val
      },
      checkModel(val){
        //   console.log(val);
          if(this.checkModel.length==this.listData.length){
　　　　　　 this.checked=true;
　　　　   }else{
　　　　　　 this.checked=false;
　　　　   }
　　　　  
//         for (let j = 0; j< this.listData.length; j++) {
//             if(this.listData[j].dataObj.id===val){
//                 this.num=this.num+this.listData[j].dataObj.buyNum
//             }
//           if(this.checkModel.length==this.listData.length){
// 　　　　　　 this.checked=true;
// 　　　　   }else{
// 　　　　　　 this.checked=false;
// 　　　　   }
           
//         }
　　  }
  },
  created () {
      if(JSON.parse(sessionStorage.getItem("car"))==null){
          return false
      }
      this.listData=JSON.parse(sessionStorage.getItem("car"))   
  },
  methods: {
    onAdd(index){
        this.listData[index].dataObj.buyNum=this.listData[index].dataObj.buyNum+1
    },
    onSub(index){
        if(this.listData[index].dataObj.buyNum===0){
            return false;
        }
        this.listData[index].dataObj.buyNum=this.listData[index].dataObj.buyNum-1
    },
    onCart(){
        if(sessionStorage.currentMember==null){
            layer.msg("请先登陆");
            return false
        }
        
        if(this.listData.length==0&&this.arr.length==0){
            layer.msg("购物车空");
            return false
        }else{
            if(!this.arrs.length==0){
                this.listData.push({
                    dataObj:this.objs,
                    dataArr:this.arrs
                })
                this.objs={}
                this.arrs=[]
            }
        }
        this.current=!this.current
    },
    checkAll(){
　　　　if(this.checked){
　　　　　　this.checkModel=[];
　　　　}else{
　　　　　　this.listData.forEach((item)=>{
    　　　　　　if(this.checkModel.indexOf(item.dataObj.id)==-1){
    　　　　　　　　this.checkModel.push(item.dataObj.id)
    　　　　　　}
　　　　　　})
            // console.log(this.checkModel);
            
　　　　}
　　},
    onGoTop(){
        document.getElementById("app").scrollIntoView();
    }
  },
  beforeDestroy () {
      sessionStorage.setItem("car",JSON.stringify(this.listData))
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

.commName{
    margin-bottom: 5px;
}
.commNum{
    margin-left: 13px;
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
    margin-left: 10px;
    padding-top: 20px;
    width: 80px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.tm-pri{
    margin-left: 10px;
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

/* .clearfix{
    clear: both;
} */

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


