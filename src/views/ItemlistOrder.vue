<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div class="class-wrap">

      <div class="orderContainerTitle clearfix">
        <div class="fl" style="width:40%;text-align:center">商品</div>
        <div class="fl" style="width:10%">单价</div> 
        <div class="fl" style="width:10%">数量</div> 
        <div class="fl" style="width:10%">商品操作</div>
        <div class="fl" style="width:10%">实付款</div>
        <div class="fl" style="width:10%">交易状态</div>
        <div class="fr" style="width:10%">交易操作</div>
      </div>
      <ul class="tm-list carContent" >
        <li v-for="(item, index) in carData" :key="index" class="clearfix caritem" style="margin-bottom:10px">
            <div class="clearfix">
              <div class="commName fl">
                  {{item.key.title}}
              </div>
              <div class="fr tm-del" @click="onToDel(item.id,subItem.id)">
                      x
              </div>
            </div>
            <div class="commNum clearfix" v-for="(subItem, i) in item.val">
                <div style="width:40%;" class="fl">
                  <div class="fl tm-img">
                      <img :src="HOST+item.key.imagesArr">
                  </div>
                  <div class="fl tm-txt">
                        <div style="line-height:60px;">
                          {{item.key.title}}
                        </div>
                        <div>{{subItem.title}}</div>
                      </div>
                </div>

                <div class="fl tm-pri" style="width:10%;line-height:120px;">
                  <span v-if="subItem.calAble==1">￥{{subItem.price}}</span>
                  <span v-if="subItem.calAble!=1">面议</span>
                </div>

                <div class="fl tm-pri" style="width:10%;line-height:120px;">

                </div>

                <div class="fl tm-pri" style="width:10%;line-height:120px;">

                </div>

                <div class="fl tm-pri" style="width:10%;line-height:120px;">

                </div>

                <div class="fl tm-pri" style="width:10%;line-height:120px;">

                </div>

                <div class="fl tm-pri" style="width:10%;line-height:120px;">

                </div>

                
            
            </div>
            <div class="commName">
              <span>订单备注</span>
              <input type="text" style="padding-left:56px;width:80%" placeholder="选填，请先和商家协商一致">
            </div>
        </li>
      </ul>
      <div id="slide-main clearfix" style="padding-left:0">  
          <div class="order">
              <div class="appoint-edit">
                  <div class="edit-check">
                      <dl>
                          <dt>支付方式：</dt>
                          <dd>
                              <div class="clearfix" id="payment">
                                  <span class="edit-pick zffs" @click="selectProduct(0)" :class="{ 'clColor': 0 == current}">开票转账</span>
                                  <span class=" edit-pick zffs" @click="selectProduct(1)" :class="{ 'clColor': 1 == current}">预付卡支付</span>
                                  <span class=" edit-pick zffs" @click="selectProduct(2)" :class="{ 'clColor': 2 == current}">现金支付</span>
                              </div>
                          </dd>
                      </dl>
                      <dl>
                          <dt>送样方式：</dt>
                          <dd>
                              <div class="clearfix" id="syfs">
                                  <span class=" edit-pick syfss" @click="selectsProduct(0)" :class="{ 'clColor': 0 == currents}">上门取样</span>
                                  <span class="edit-pick syfss" @click="selectsProduct(1)" :class="{ 'clColor': 1 == currents}">邮寄到付</span>
                              </div>
                          </dd>
                      </dl>
                      <dl>
                          <dt>样品回收：</dt>
                          <dd>
                              <div class="clearfix" id="yphs">  
                                  <span class=" edit-pick hsfs" @click="selectsProducts(0)" :class="{ 'clColor': 0 == currentss}">是</span>
                                  <span class="edit-pick hsfs" @click="selectsProducts(1)" :class="{ 'clColor': 1 == currentss}">否</span>
                              </div>
                              <p class="edit-tip" id="yphsmsg">
                                  （亲，您每月可享受2次免费回收，超过2次，平台将额外收取23元/次回收费用，请珍惜免费次数哦~）</p>
                          </dd>
                      </dl>
                      <!-- <dl>
                          <dt>优惠活动：</dt>
                          <dd>
                              <label><input type="checkbox" disabled="false" id="jf-check" data-jf="200">使用积分抵扣(<span>可使用积分200,最高可抵扣总额度的10%</span>)</label>
                          </dd>
                      </dl>-->
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div class="clNum class-wrap clearfix">
      <div class="fl" style="line-height:40px">
        <span>共2件</span>
        <span>合计:￥126.70</span>
      </div>
      <div class="fl">
        <div class="btn">提交订单</div>  
      </div>
    </div>
    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc } from '../rpc/index';
import { HOST } from '../config';
export default {
  data () {
    return {
      HOST:HOST,
      carData:[],
      current:0, 
      currents:0,
      currentss:0
    }
  },
  created () {
    this.carData=JSON.parse(sessionStorage.getItem('car'))
  },
  components: {
      vHeader,
      vSider,
      vFootersimper
  },
  methods: {
    selectProduct(i){
      this.current=i
    },
    selectsProduct(j){
      this.currents=j
    },
    selectsProducts(k){
      this.currentss=k
    }
  }
}
</script>

<style scoped>

.carContent{
    overflow: auto;
    height: 300px;
    padding: 0 3px;
}

.orderContainerTitle{
  margin-top: 30px;
  height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: #edecec;
}

.commName{
    margin-bottom: 5px;
    margin-left: 5px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
}

.commNum{
    margin-left: 5px;
    margin-bottom: 3px;
    border-bottom: 1px solid #eee;
    background-color: #edecec;
}
.caritem{
	  margin-bottom: 10px;
    width: 100%;
    border: 1px solid #d4d1d1;
    padding-bottom: 5px;
}
.tm-list{
  margin-top: 20px;
  width: 100%;

}
 .tm-img{
    width: 120px;
    height: 120px;
}
.tm-img img{
	  width: 100%;
    height: 100%;
    border: 1px solid #cbcbcbee;
}
.tm-txt{
    margin-left: 10px;
    /* padding-top: 20px; */
    /* width: 120px; */
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.tm-pri{
    margin-left: 2px;
    /* padding-top: 20px; */
    font-size: 14px;
    color: #1e1e1e;
}

.tm-del{
    margin-top: 10px;
    margin-right: 5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    line-height: 1;
    /* vertical-align: top; */
    border: 1px solid #ccc;
}

.clColor{
  background: #01707A;
  color:#fff;
}
.clNum{
  margin-bottom: 20px;
}
.btn{
  margin-left: 20px;
  width: 80px;
  height: 40px;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  background-color: chocolate;
}
</style>


