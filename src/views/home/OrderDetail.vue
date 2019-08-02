<template>
  <div class="home">
     <div id="slide-main">
        <div class="order my-order">
        	<h2>订单详情</h2>
        </div>
        <div class="detail clearfix">
          <div class="detail-left fl">
            <div class="detail-left-title">订单信息</div>
            <div class="detail-left-text">
              <p>收货地址：</p>
              <p>买家留言：</p>
              <p>订单编号：</p>
              <p>商家：</p>
            </div>
          </div>
          <div class="detail-right fl">
            <div class="detail-right-text fl">
              <p>订单状态: 商家已发货，等待买家确认</p>
              <p>您还有9天10小时35分50秒;来确认收货,超时订单自动确认收货</p>
              <p>物流：邮政快递包裹运单号:9895939160662</p>
              <p>您可以<span class="detail-right-txt">确认收货</span><span class="detail-right-txt">申请退款</span><span class="detail-right-txt">延长收货时间</span><span class="detail-right-txt">备忘</span></p>
            </div>
          </div>
        </div>
        <div class="detail-status">
          <div class="car-title">
						<span style="width:50%">商品信息</span>
						<span style="width:10%">数量</span>
						<span style="width:10%">单价</span>
						<span style="width:15%">送样方式</span>
						<span style="width:15%">支付方式</span>
					</div>

          <div class="clearfix mglist" v-if="a">
              <div class="fl" style="width:50%">
                <div class="fl tm-img" style="width:15%">
                    <img :src="HOST+data.detail.productImg">
                </div>
                <div class="fl tm-text" style="width:65%">
                  {{data.detail.productName}}
                </div>			
              </div>
              <div class="fl tm-txt" style="width:10%">
                <div style="line-height:60px;">
                  {{data.detail.num}}
                </div>			
              </div>
              <div class="fl tm-txt" style="width:10%" v-if="data.detail.price===null">
                <div style="line-height:60px;">
                  待定
                </div>			
              </div>
              <div class="fl tm-txt" style="width:10%" v-else>
                <div style="line-height:60px;">
                  {{data.detail.price}}
                </div>			
              </div>
              <div class="fl tm-txt" style="width:15%">
                <div style="line-height:60px;">
                  {{data.deliverWay}}
                </div>			
              </div>
              <div class="fl tm-txt" style="width:15%">
                <div style="line-height:60px;">
                  {{data.payWay}}
                </div>			
              </div>
          </div>
        </div>
        <!-- <div class="detail-jifen">
          <div class="detail"></div>
        </div> -->
     </div>
  </div>
</template>

<script>
import { webRpc } from '../../rpc/index';
import { HOST } from '../../config';
export default {
  data () {
    return {
      HOST:HOST,
      data:{},
      a:false
    }
  },
  created () {
    this.data.id=this.data.id = this.$route.query.id;
    this.initData();
  },
  methods: {
    initData(){
      webRpc.invoke('orderWebRpc.findById',this.data.id).then(res=>{
        console.log(res)
        if(res.retCode===0){
          this.data=res.data
        }
      }).catch(err=>{})
    }
  }
}
</script>

<style scoped>
.detail{
  border: 1px solid #999;
}
.detail-left{
    width: 266px;
    color: #666;
    background-color: #fbfbfb;
    padding-bottom: 20px;
}
.detail-left-title{
    padding-left: 20px;
    height: 29px;
    width: 246px;
    border-bottom: 1px solid #DDD;
    background-color: #F3F3F3;
    line-height: 29px;
    color: #333;
    font-size: 12px;
    font-weight: 700;
}
.detail-left-text p{
  margin: 10px 8px 0 20px;
}
.detail-right{
  margin-top: 10px;
  /* text-align: center; */
}
.detail-right-text{
  margin-left: 50px;
  text-align: left;
}
.detail-right-text p{
  margin-bottom: 20px;    
}
.detail-right-txt{
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
}
.commNum{
    margin-left: 5px;
    margin-bottom: 3px;
    border-bottom: 1px solid #eee;
    background-color: #edecec;
}
.tm-img img{
	  width: 100%;
    height: 100%;
    border: 1px solid #cbcbcbee;
}
.tm-text{
	padding-left: 20px;
	line-height:60px;
	overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.tm-txt{
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.tm-pri{
    margin-left: 2px;
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
    border: 1px solid #ccc;
}
.mglist{
	margin-bottom:10px;
	padding-bottom: 10px;
	border-bottom: 1px solid #e3dfdf;
	cursor: pointer;
}
.car-title{
	width: 100%;
	padding: 20px 0;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	margin-bottom: 20px;
}
.car-title span{
	display: inline-block;
}
</style>


