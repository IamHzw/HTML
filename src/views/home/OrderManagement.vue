<template>
  <div>
    <div id="slide-main">
        <div class="order my-order">
            <div class="order-title">
                <div>我的订单</div>
                <div class="order_select_op clearfix" style="margin-left: 641px;">
                    <select name="orderType" id="orderType">
                        <option value="0">所有订单</option>
                        <option value="8">待导师审核</option>
                        <option value="1">待平台确认</option>
                        <option value="2">待取样</option>
                        <option value="3">测试中</option>
                        <option value="5">已完成</option>
                        <option value="-1">申请复测</option>
                        <option value="7">已取消</option>
                        <option value="9">失败订单</option>
                    </select>
                </div>
            </div>
            <div class="order_select_op clearfix">
                <!--       <select name="orderType" id="orderType">
                          <option value="0">所有订1单</option>
                          <option value="8">待导师审核</option>
                          <option value="1">待平台确认</option>
                          <option value="2">待取样</option>
                          <option value="3">测试中</option>
                          <option value="5">已完成</option>
                          <option value="-1">申请复测</option>
                          <option value="7">已取消</option>
                          <option value="9">失败订单</option>
                      </select>-->
            </div>
            <div class="order-wrap">
                <div class="order-item" align="center" style="height: 60px;line-height: 60px">暂无数据!</div>        
            </div>
        </div>
		</div>
  </div>
</template>
