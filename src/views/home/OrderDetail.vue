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
          <div class="clearfix" style="border-bottom: 1px solid #e3dfdf;">
							<div style="width:40%;" class="fl">
								<div class="fl tm-img">
									  <!-- <img :src="HOST+data.orderInfo.imagesStr"> -->
								</div>
								<div class="fl tm-txt">
									<div style="line-height:60px;">
										<!-- {{data.orderInfo.title}} -->
									</div>			
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
      data:[]
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
.tm-list{
  margin-top: 20px;
  width: 100%;

}
.tm-img{
    width: 60px;
    height: 60px;
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
</style>


