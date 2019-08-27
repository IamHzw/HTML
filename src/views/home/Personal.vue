<template>
  <div>
    <div id="notice">
        <a href="javascript:;">预存活动</a>
    </div>
    <div id="slide-main">
        <div class="user-wrap">
            <div class="user-top">
                <div class="fl user-msg">
                    <div class="user-pic fl"><a href="javascript:;"><img src="../../assets/images/head.jpg"></a></div>
                    <div class="user-text">
                        <h3>{{currentMember.mobile}}</h3>
                        <h4></h4>
                        <h5>资料完整度<span class="user-percent"><i style="width: 22%;"></i></span>22%</h5>
                        
                        <router-link :to="{name:'PersonalSetting'}" >
                        	<a href="javascript:;">立即完善&gt;&gt;</a> 
                        </router-link>
                    </div>
                </div>
                <div class="fl user-order">
                    <div class="user-order-item">
                        <a href="javascript:;">
                            <i><img src=""></i>
                            <h3>0</h3>
                            <p>待导师审批</p>
                        </a>
                    </div>
                    <div class="user-order-item">
                        <a href="javascript:;">
                            <i><img src=""></i>
                            <h3>0</h3>
                            <p>待确认</p>
                        </a>
                    </div>
                    <div class="user-order-item">
                        <a href="javascript:;">
                            <i><img src=""></i>
                            <h3>0</h3>
                            <p>待取样</p>
                        </a>
                    </div>
                    <div class="user-order-item">
                        <a href="javascript:;">
                            <i><img src=""></i>
                            <h3>0</h3>
                            <p>测试中</p>
                        </a>
                    </div>
                </div>
            </div>
           <!-- <div class="user-asset">
                <div class="user-asset-item" style="width: 33%">
                    <h3>未结算金额</h3>
                    <h4><strong>0.00</strong>元</h4>
                    <a href="javascript:;">申请开票</a>
                </div>
                <div class="user-asset-item">
                    <h3>预存余额</h3>
                    <h4><strong>0.00</strong>元</h4>
                    <a id="charge">联系充值</a>
                </div>
                <div class="user-asset-item">
                    <h3>我的积分</h3>
                    <h4><strong>200</strong></h4>
                    <a id="detail" href="javascript:;">查看明细</a>
                </div>
            </div> -->
          <div id="withdraw">
              <h2>提现申请</h2>
              <input type="text" name="feeback['content']" id="withdraw-money" placeholder="请输入提现金额">
              <a class="withdraw-a" id="withdraw-all" href="javascript:;">全部提现</a>
              <p class="withdraw-content">可提现最大金额<label></label>元</p>
              <p class="withdraw-tips" id="tips"></p>
              <div class="btns">
                  <a class="fr withdraw-btn" id="btn-cancel" href="javascript:;">取消</a>
                  <a class="fr withdraw-btn" id="btn-submit" href="javascript:;">提交</a>
              </div>
              <a class="close" href="javascript:;"></a>
            </div>
            <div id="modal"></div>
        </div>
        
         
        <div class="order">
            <h2>最近订单</h2>
            <div class="order-wrap">
                <div class="order-item" align="center">暂无数据!</div>                   
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { webRpc,token } from '../../rpc/index';

export default {
    data () {
        return {
            currentMember:{},
        }
    },
    created () {
		if(sessionStorage.currentMember!=null){
			this.currentMember = JSON.parse(sessionStorage.getItem('currentMember'))
        }
    },
    methods: {

  
    }
}

</script> 
