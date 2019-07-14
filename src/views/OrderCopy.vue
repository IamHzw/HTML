<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div id="content" class="edit-content">
        <div class="wrap">
            <div id="edit-slide" style="position: relative; top: 0px; left: 0px; margin-left: 0px;">
                <h2>当前预约</h2>
                <div class="edit-slide-cont">
                    <dl>
                        <dt>项目名称：</dt>
                        <dd>智能重量分析仪（IGA）</dd>
                    </dl>
                    <dl>
                        <dt>所选子项：</dt>
                        <dd id="sum-item">
                        </dd>
                    </dl>
                    <dl>
                        <dt>送样方式：</dt>
                        <!--<dd class="syfs "> 邮寄到付</dd>-->
                        <dd class="syfs"></dd>
                    </dl>
                    <dl>
                        <dt>支付方式：</dt>
                        <!-- <dd class="payment">现金支付</dd>-->
                        <dd class="payment"></dd>
                    </dl>
                    <dl>
                        <dt>样品回收：</dt>
                        <!--     <dd class="yphs">否</dd>-->
                        <dd class="yphs"></dd>
                    </dl>
                </div>
                <h3>费用总计：</h3>
                <h4>¥ <strong>0</strong></h4>
                <p><label><input type="checkbox" id="templateInput">创建预约模板，添加至“一键预约”</label></p>
                <button type="submit" id="order-sub">确认并预约</button>
            </div>
            <div id="edit-wrap">
                <div class="edit-top">
                    <!--平均3天完成测试，100%好评，请放心下单-->
                    平均5天完成测试,100%好评，请放心下单
                </div>
                <div id="slide-main" style="padding-left:0">
                    <!-- <div id="slide-main-title"></div>-->
                    <div class="order">
                        <div class="appoint-edit">
                            <!-- <h3>样品信息</h3>-->
                            <form id="order-info">
                                <input type="hidden" name="info[isagain]" value="0">
                                <dl>
                                    <dt>选择子项：</dt>
                                    <dd>
                                        <div class="edit-list">
                                        </div>
                                        <div class="appoint-select">
                                            <p>+ 增加其他子项</p>
                                            <div class="appoint-option" style="width: 400px;">
                                                <a data-price="20.00" data-id="560" data-key="0"><em>IGA</em><span>
                                                        20.00/小时</span></a>
                                                    <!--<a data-price="20.00" data-id="560" data-key="0"><em>IGA</em><span>20.00/小时</span></a>-->
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                                <dl class="add_pos">
                                    <dt>测试要求：</dt>
                                    <dd class="clearfix add_rePos">
                                        <span style="word-wrap:break-word; width:1100px; color: #01707A">
                                            注明样品在真空以及处理温度下是否稳定</span>
                                        <textarea class="edit-aim" style="width:646px;" name="info[content]"></textarea>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>参考文件：</dt>
                                    <dd class="clearfix">
                                        <div id="uploader" class="wu-example clearfix">
                                            <div id="thelist" class="uploader-list fl">
                                            </div>
                                            <div class="btns">
                                                <div id="picker" class="webuploader-container"><div class="webuploader-pick">选择文件</div><div id="rt_rt_1df40cnnc1136gc81emq1j7q1mlp1" style="position: absolute; top: 0px; left: 0px; width: 111px; height: 37px; overflow: hidden; bottom: auto; right: auto;"><input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept=""><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></div>
                                                <button id="ctlBtn" style="display: none;">开始上传</button>
                                                <span style="height: 40px;line-height: 40px">(不超过20M,可上传多个文件)</span>
                                            </div>
                                        </div>
                                        <!--   <p id="uploader-p">(不超过20M,可上传多个文件)</p>-->
                                        <input type="hidden" id="projectName" name="info[projectName]" value="智能重量分析仪（IGA）">
                                        <input type="hidden" id="projectId" name="info[projectId]" value="154">
                                        <input type="hidden" id="projectImages" name="info[projectImages]" value="olddata/2017080713162122719.png">
                                        <input type="hidden" id="accountNo" name="info[accountNo]" value="">
                                        <input type="hidden" id="accountId" name="info[accountId]" value="">
                                        <input type="hidden" id="isFreeMailing" name="info[isFreeMailing]" value="1">
                                        <input type="hidden" id="isIntegral" name="info[isIntegral]" value="0">
                                        <input type="hidden" id="useCoupon" name="info[useCoupon]" value="0">
                                        <input type="hidden" id="couponid" name="info[couponid]" value="0">
                                        <input type="hidden" id="cpid" name="info[cpid]" value="0">
                                        <!-- TODO 是否使用积分抵扣 -->
                                        <input type="hidden" id="integralToMoeny" name="info[integralToMoeny]" value="0.00">
                                        <!-- TODO 积分抵扣金额 -->
                                        <div id="c-item" style="display: none;">
                                        </div>
                                        <!--//支付类型-->
                                        <input type="hidden" id="payType" name="info[payType]" value="xyk">
                                        <!--//邮寄方式-->
                                        <input type="hidden" id="emsType" name="info[emsType]" value="smqy">
                                        <!--//样品回收-->
                                        <input type="hidden" id="isNeedReturn" name="info[isNeedReturn]" value="0">
                                        <!--是否创建预约模板-->
                                        <input type="hidden" id="isTemplate" name="info[isTemplate]" value="0">
                                        <!--金额-->
                                        <input type="hidden" id="prePrice" name="info[prePrice]" value="0">
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>样品数量：</dt>
                                    <dd class="clearfix data-num">
                                        <div class="edit-num">
                                            <a class="decrement" href="javascript:;">-</a>
                                            <input type="text" name="info[sampleCount]" class="itxt" value="0">
                                            <a class="increment">+</a>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>样品照片：</dt>
                                    <dd class="clearfix">
                                        <div id="uploader-demo" class="clearfix">
                                            <!--用来存放item-->
                                            <div id="fileList" class="uploader-list fl">
                                                <!--                 -->
                                            </div>
                                            <div id="filePicker" class="webuploader-container"><div class="webuploader-pick"></div><div id="rt_rt_1df40cnnd1kfu1k8uoua1vvr5ud4" style="position: absolute; top: 0px; left: 0px; width: 107px; height: 107px; overflow: hidden;"><input type="file" name="file" class="webuploader-element-invisible" multiple="multiple" accept="image/*"><label style="opacity: 0; width: 100%; height: 100%; display: block; cursor: pointer; background: rgb(255, 255, 255);"></label></div></div>
                                        </div>
                                    </dd>
                                </dl>
                                <dl class="add_pos">
                                    <dt>样品性质：</dt>
                                    <!--<p style="word-wrap:break-word; width:1100px; color: #999">-->
                                    <!--注明样品在真空以及处理温度下是否稳定</p>-->
                                    <dd class="clearfix add_rePos">
                                        <span style="word-wrap:break-word; width:1100px; color: #01707A">
                                        注明样品在真空以及处理温度下是否稳定</span>
                                        <textarea class="edit-aim" style="width:646px;" name="info[sampleNature]"></textarea>
                                    </dd>
                                </dl>
                            </form>
                            <div class="edit-check">
                                <dl>
                                    <dt>支付方式：</dt>
                                    <dd>
                                        <div class="clearfix" id="payment">
                                            <span class="edit-pick zffs" set-data="xyk">开票转账</span>
                                            <span class=" edit-pick zffs" set-data="yfk">预付卡支付</span>
                                            <span class=" edit-pick zffs" set-data="xj">现金支付</span>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>送样方式：</dt>
                                    <dd>
                                        <div class="clearfix" id="syfs">
                                            <span class=" edit-pick syfss" set-data="smqy">上门取样</span>
                                            <span class="edit-pick syfss" set-data="yjdf">邮寄到付</span>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>样品回收：</dt>
                                    <dd>
                                        <div class="clearfix" id="yphs">  
                                            <span class=" edit-pick hsfs" set-data="1" id="free-charge" data-money="23">是</span>
                                            <span class="edit-pick hsfs" set-data="0">否</span>
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
        </div>
    </div>
    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc,token } from '../rpc/index';
import { HOST } from '../config';
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
  methods: {
    
  }
}
</script>

