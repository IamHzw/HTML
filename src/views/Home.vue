<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div id="content">
				<div class="wrap">
						<div id="slide">
							<div class="slide-item">
									<h2>
											<a href="javascript:void(0)" class="userCenter" style="background: rgb(242, 242, 242);">
													个人中心
											</a>
									</h2>
							</div>
							<div class="slide-item">
									<h2>
											<a href="javascript:void(0)" class="myorder">
													订单管理
											</a>
									</h2>
							</div>
							<div class="slide-item msgsa">
									<h2 style="position: relative">
											<a href="javascript:void(0)" class="messages">
													消息中心
													<span id="Nomsg" style="margin-top: 10px;position: absolute;right: 20px;top:20px;"></span>
											</a>
									</h2>
							</div>
							<div class="slide-item">
									<div class="slide-set">
											<a href="javascript:void(0)" class="myyucun" style="font-size: 16px;border-bottom: 1px solid #e7e7e7;color: #404040; height: 35px;height: 62px;line-height: 62px; ">我的预存</a>
									</div>
							</div>

							<div class="slide-item">
									<div class="slide-set">
											<a href="javascript:void(0)" class="dawo" style="font-size: 14px; position: relative; border-bottom: 1px solid #e7e7e7;color: #827e7e; height: 40px;line-height: 40px">待我审批
													<span id="willMeApproval" style="color: #f0f0f0;position: absolute; right: 2px"></span>
											</a>
									</div>
							</div>
							
							<div class="slide-item">
									<div class="slide-set">
											<a href="javascript:void(0)" class="keyong" style="font-size: 14px;color: #827e7e; height: 40px;line-height: 40px">可用预存
											</a>
									</div>
							</div>

							<div class="slide-item">
									<h2>
											<a href="javascript:void(0)" class="myyaoqing">       
												我的邀请
											</a>
									</h2>
							</div>

							<div class="slide-item">
									<h2>
											<a href="javascript:void(0)" class="myjifeng">
													我的积分
											</a>
									</h2>
							</div>
							<div class="slide-item">
									<h2>
											<a href="javascript:void(0)" class="myshouchang">
													我的收藏
											</a>
									</h2>
							</div>
							<div class="slide-item">
									<h2>
											<a href="javascript:void(0)" class="yijianyuye">
													一键预约
											</a>
									</h2>
							</div>

							<div class="slide-item">
									<h2>
											<a href="javascript:void(0)" class="yijianyuye">
													优惠券
											</a>
									</h2>
							</div>
							<div class="slide-item">
									<h2>
											<a href="javascript:void(0)" class="yijianyuye">
													工单管理
											</a>
									</h2>
							</div>

							<div class="slide-item">
								<h2>
									<a href="javascript:void(0)" class="myseting" style="border-bottom: 1px solid #e7e7e7;">
									个人设置
									</a>
								</h2>
							</div>

							<div class="slide-item">
								<div class="slide-set">
									<a href="javascript:void(0)" class="setpwd" style="font-size: 14px;border-bottom: 1px solid #e7e7e7;color: #827e7e; height: 40px;line-height: 40px">修改密码</a>
								</div>
							</div>

							<div class="slide-item">
								<div class="slide-set">
									<a href="javascript:void(0)" class="changephone" style="font-size: 14px;border-bottom: 1px solid #e7e7e7;color: #827e7e; height: 40px;line-height: 40px">更换认证手机</a>
								</div>
							</div>
						</div>

						<div class="slide-wrap" style="display:block">
								<div id="notice">
										<a href="/index.php?m=&amp;c=Bulletin&amp;a=detail&amp;id=10001">预存活动</a>
								</div>
								<div id="slide-main">
										<div class="user-wrap">
												<div class="user-top">
														<div class="fl user-msg">
																<div class="user-pic fl"><a><img src="/static/images/user2.png"></a></div>
																<div class="user-text">
																		<h3>13265929386</h3>
																		<h4></h4>
																		<h5>资料完整度<span class="user-percent"><i style="width: 22%;"></i></span>22%</h5>
																		<a href="/index.php?m=&amp;c=UserInfo&amp;a=edit">立即完善&gt;&gt;</a>
																</div>
														</div>
														<div class="fl user-order">
																<div class="user-order-item">
																		<a href="/index.php?m=&amp;c=Order&amp;a=index&amp;status=8">
																				<i><img src="/static/images/uo1.png"></i>
																				<h3>0</h3>
																				<p>待导师审批</p>
																		</a>
																</div>
																<div class="user-order-item">
																		<a href="/index.php?m=&amp;c=Order&amp;a=index&amp;status=1">
																				<i><img src="/static/images/uo2.png"></i>
																				<h3>0</h3>
																				<p>待确认</p>
																		</a>
																</div>
																<div class="user-order-item">
																		<a href="/index.php?m=&amp;c=Order&amp;a=index&amp;status=2">
																				<i><img src="/static/images/uo3.png"></i>
																				<h3>0</h3>
																				<p>待取样</p>
																		</a>
																</div>
																<div class="user-order-item">
																		<a href="/index.php?m=&amp;c=Order&amp;a=index&amp;status=3">
																				<i><img src="/static/images/uo4.png"></i>
																				<h3>0</h3>
																				<p>测试中</p>
																		</a>
																</div>
														</div>
												</div>
												<div class="user-asset">
														<div class="user-asset-item" style="width: 33%">
																<h3>未结算金额</h3>
																<h4><strong>0.00</strong>元</h4>
																<a href="/index.php?m=&amp;c=Receipt&amp;a=index">申请开票</a>
														</div>
														<div class="user-asset-item">
																<h3>预存余额</h3>
																<h4><strong>0.00</strong>元</h4>
																<a id="charge">联系充值</a>
														</div>
														<div class="user-asset-item">
																<h3>我的积分</h3>
																<h4><strong>200</strong></h4>
																<a id="detail" href="/index.php?m=&amp;c=UserIndex&amp;a=integral">查看明细</a>
														</div>
												</div>
											<div id="withdraw">
													<h2>提现申请</h2>
													<input type="text" name="feeback['content']" id="withdraw-money" placeholder="请输入提现金额">
													<a class="withdraw-a" id="withdraw-all">全部提现</a>
													<p class="withdraw-content">可提现最大金额<label></label>元</p>
													<p class="withdraw-tips" id="tips"></p>
													<div class="btns">
															<a class="fr withdraw-btn" id="btn-cancel">取消</a>
															<a class="fr withdraw-btn" id="btn-submit">提交</a>
													</div>
													<a class="close"></a>
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

						<div class="slide-wrap" style="display:none">
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
														<div class="order-item" align="center">暂无数据!</div>                                            </div>
																				</div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order">
												<h2>消息中心</h2>
												<div class="notice-top">
														<div class="notice-filter fl">
																<a class="ac" href="/index.php?m=&amp;c=UserIndex&amp;a=notice">全部</a>
																<a class="" href="/index.php?m=&amp;c=UserIndex&amp;a=notice&amp;read=1">已读</a>
																<a class="" href="/index.php?m=&amp;c=UserIndex&amp;a=notice&amp;read=0">未读</a>
														</div>
														<div class="fr notice-static">状态</div>
														<div class=" notice-static1 fr">发送时间</div>
												</div>
												<ul class="notice-list">
														<li class="import" style="text-align: center;">暂无数据!</li>                        

														<!--<li class="import">
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">未读</div>
														</li>
														<li class="import">
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">未读</div>
														</li>
														<li class="import">
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">未读</div>
														</li>
														<li class="import">
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">未读</div>
														</li>
														<li class="import">
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">未读</div>
														</li>
														<li class="import">
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">未读</div>
														</li>
														<li class="import">
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">未读</div>
														</li>
														<li>
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">已读</div>
														</li>
														<li>
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">已读</div>
														</li>
														<li>
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">已读</div>
														</li>
														<li>
																<p><a>不同等级的伙伴对应不同等级的邀请码。例如：黄金伙伴邀请好友，好友可获得特权本金3000元+0.8%基础加权</a></p>
																<div class="notice-list-static">已读</div>
														</li>-->
												</ul>
										</div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order">
												<h2>我的预存</h2>
												<div class="myPrestore" style="position: relative">
														<div class="clearfix">
															<h4 class="fl"><strong>余额: ¥0.00</strong>账号：WW68967666</h4>
															<div class="myPrestore-btn msjh fr">
																		<div style="width: 100px;height: 50px" id="charge">
																			<a style="display: inline-block;margin-top: 23px;">马上激活</a></div>
																			<!-- <div style="width: 400px;float: left"><span>激活提示</span></div>-->
															</div>
														</div>
														<div class="" style="position: absolute;top:130px;">
																请联系工作人员开票，到账后将为您激活预存账户，使用预存账户您可以轻松管理团体成员预约，并且将享受更多优惠。
														</div>                                                
														<div id="prestore">
																<div id="zhsq-box" style="display: none;">
																		<h3>授权用户</h3>
																		<div class="prestore-cont" id="prestore-search">
																				<form id="prestore-form">
																						<input type="text" id="prestore-phone" placeholder="输入手机号">
																						<p class="prestore-tips" id="prestore-tips"></p>
																						<button type="button" data-type="prestore" id="prestore-btn">查询用户</button>
																				</form>
																				<div id="prestore-result">

																				</div>
																		</div>
																		<a class="close"></a>
																</div>
																<div id="wtdl-box" style="display: none;">
																		<h3>委托管理</h3>
																		<div class="prestore-cont" id="consign-search">
																				
																				<form id="consign-form" style="margin-top:22px;">
																						<input type="text" id="consign-phone" placeholder="输入手机号：">
																						<p class="prestore-tips" id="consign-tips"></p>
																						<button type="button" data-type="consign" id="consign-btn" style="margin-top:30px;">查询用户
																						</button>
																				</form>
																				<div id="consign-result">
																				</div>
																		</div>
																		<a class="close"></a>
																</div>
																<div id="cksq-box" style="display: none;">
																		<h3>已授权用户</h3>
																		<div class="prestore-cont" id="prestore-delete">
																		</div>
																		<a class="close"></a>
																</div>
														</div>
												</div>
												<div class="order-nav pre-nav">
														<a class="ac" href="/index.php?m=&amp;c=UserAssets&amp;a=index">全部</a>
														<a class="" href="/index.php?m=&amp;c=UserAssets&amp;a=index&amp;type=0">充值</a>
														<a class="" href="/index.php?m=&amp;c=UserAssets&amp;a=index&amp;type=1">测试消费</a>
														<a class="" href="/index.php?m=&amp;c=UserAssets&amp;a=index&amp;type=2">测试补扣</a>
												</div>

												<div class="order-title pre-order-title">
														<div>使用人</div>
														<div>项目/数量</div>
														<div>实际费用</div>
														<div>账户余额</div>
														<div>交易类型</div>
														<div>结算时间</div>
														<div>备注</div>
												</div>
												<div class="order-wrap pre-order-wrap">
														<div class="order-item" align="center">暂无数据!</div>                                            </div>
																				</div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order record">
												<h2>
														审批记录
														<div class="pretty fr">
																<input type="checkbox" class="prettyAll" id="checkApproval" checked="">
																<label><i class="fa fa-check"></i>开启订单免审批</label>
														</div>
												</h2>
												<div class="order-nav">
														<a href="/index.php?m=Home&amp;c=UserAssets&amp;a=approval" class="ac">全部订单</a>
														<a href="/index.php?m=Home&amp;c=UserAssets&amp;a=approval&amp;status=noWay">待我审批</a>
														<a href="/index.php?m=Home&amp;c=UserAssets&amp;a=approval&amp;status=isPass">审批通过</a>
														<a href="/index.php?m=Home&amp;c=UserAssets&amp;a=approval&amp;status=noPass">审批驳回</a>
												</div>
												<div class="order-title retest-order-title">
														<div>测试项目</div>
														<div>子项/数量</div>
														<div>费用</div>
														<div>申请用户</div>
														<div>操作</div>
												</div>
												<div class="order-wrap">
														<div class="order-item" align="center">暂无数据!</div>                                            </div>
																				</div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">

										<div class="order prestore">
												<h2>可用预存</h2>
												<div class="pre-table">
														<table>
																<tbody><tr>
																	<!--  <th width="101">序 号</th>-->
																		<th width="134">户主姓名</th>
																		<th width="173">手机号码</th>
																		<th width="183">单位</th>
																		<th width="187">预存账号</th>
																		<th width="140">状态</th>
																</tr>

																</tbody><tbody>
																																												</tbody>
														</table>
												</div>
												<ul class="pages index-pages">    </ul>                </div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order invite">
												<h2>我的邀请</h2>
																								<div class="invite-exam">
																<h3>活动规则</h3>
																<p>邀请他人下单，可获得一定邀请收益，详情请咨询客服</p>
														</div>
														<a class="invite-ea" id="invite-apply">我要申请</a>                </div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order points">
												<h2>我的积分</h2>
												<div class="points-total">
														<span>我的积分：<strong>200</strong></span>
														<span style="font-size: 18px; float: right;"><a href="/index.php?m=&amp;c=UserIndex&amp;a=giftDetail" style="color: red">礼品详情</a></span>
												</div>
												<div class="points-rule">
														<h3>积分规则</h3>
		<!--                        <p>您在平台上面进行测试消费，平台会按照消费金额的<span>5%</span>返还给您积分。您可以在下次消费的时候使用该积分进行抵扣消费。抵扣金额不超过订单金额的<span>5%</span></p>-->
														<p>您在测试狗进行消费，我们将会赠送您消费积分，积分可以用来兑换精美礼品</p>
												</div>
												<div class="points-table">
									<!--          <div class="order-nav" style="padding-left: 50px;">
														<a href="/index.php?m=&c=UserIndex&a=integral"   style="margin-left: 70px"  class="ac">全部</a>
													<a href="/index.php?m=&c=UserIndex&a=integral&type=XF" style="margin-left: 30px" class="">消费</a>
													<a href="/index.php?m=&c=UserIndex&a=integral&type=ZS" style="margin-left: 30px"  class="">赠送</a>
													<a href="/index.php?m=&c=UserIndex&a=integral&type=DH" style="margin-left: 30px"  class="">兑换</a>
													<a href="/index.php?m=&c=UserIndex&a=integral&type=REG" style="margin-left: 30px"  class="">注册获得</a>
													<a href="/index.php?m=&c=UserIndex&a=integral&type=BACK"  style="margin-left: 30px"  class="">退还</a>
														</div>-->
														<h3>交易记录</h3>
														<table>
																<thead>
																<tr>
																		<th width="160">时间</th>
																		<th width="150">积分</th>
																		<th width="170">合计</th>
																		<th width="210">状态</th>
																		<th width="210">说明</th>
																</tr>
																</thead>
																<tbody>
																		<tr>
																				<td>2019-02-24 13:20:07</td>
																				<td>200.00</td>
																				<td>200.00</td>
																				<td>注册获得</td>
																				<td>新用户注册奖励</td>
																		</tr>                            
																</tbody>
														</table>
												</div>
											<ul class="pages index-pages"></ul>               
										</div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order appoint">
												<h2>我的收藏</h2>
												<div class="collection-wrap clearfix" style="min-height: 500px">
													<!-- <div class="collection-item">
																<div class="collection-pic"><a><img src="/static/images/appoint.jpg"></a></div>
																<p>电子背散射衍射</p>
																<a class="collection-btn"></a>
														</div>-->
														<div class="order-item" align="center" style="height: 60px;line-height: 60px">您还未收藏任何项目哦!</div>                                      
												 </div>
										</div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order appoint">
												<h2>我的模板</h2>
												<!--<div class="appoint-filter">
														<dl>
																<dt>学科类型：</dt>
																<dd class="clearfix">
																																</dd>
														</dl>
														<dl>
																<dt>功能分类：</dt>
																<dd class="clearfix">
																																</dd>
														</dl>
												</div>-->
												<div class="appoint-wrap clearfix" style="padding-top: 50px;">
														<!--<div class="order-item" align="center"></div>-->
														<div class="order-item" align="center">暂无数据!</div>                                                <form id="temp-form" action="/index.php?m=&amp;c=Template&amp;a=detail" method="post">
																<input type="hidden" id="tempid" name="id">
														</form>
												</div>
																				</div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">

								<div id="slide-main">
										<div class="order appoint">
												<h2>我的优惠券</h2>
												<div class="getCoupon">
														<div class="lpt">领券:</div>
														<div class="lq"><input type="text" id="code" placeholder="请输入券码"></div>
														<div style="float: left">
																<button class="getlp">领取</button>
														</div>
												</div>
												<div class="collection-wrap clearfix" style="height: 60px">

												</div>
												<div style="width: 100%;min-height: 400px">
												</div>
										</div>

								</div>

						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order my-order" style="margin-top: 40px">
												<!--      <h2>我的订单</h2>
													<div class="order-nav">
															<a href="/index.php?m=&c=Order&a=index" class="ac">全部订单</a>
															<a href="/index.php?m=&c=Order&a=index&status=1" class="">待审核</a>
															<a href="/index.php?m=&c=Order&a=index&status=2" class="">待取样</a>
															<a href="/index.php?m=&c=Order&a=index&status=3" class="">待派单</a>
															<a href="/index.php?m=&c=Order&a=index&status=4" class="">测试中</a>
															<a href="/index.php?m=&c=Order&a=index&status=5" class="">已完成</a>
															<a href="/index.php?m=&c=Order&a=index&status=-1" class="">复测申请</a>
															<a href="/index.php?m=&c=Order&a=index&status=7" class="">已取消</a>
													</div>-->
												<div class="order-title">
														<div>我的工单</div>
														<div class="order_select_op clearfix" style="margin-left: 641px;margin-top: 40px">
																<select name="orderType" id="orderType">
																		<option value="0">所有工单</option>
																		<option value="1">未完结工单</option>
																		<option value="2">已完结工单</option>
																</select>
														</div>
												</div>

												<div class="order-wrap">

														<table class="layui-table">
																<colgroup>
																		<col width="150">
																		<col width="200">
																		<col>
																</colgroup>
																<thead>
																<tr>
																		<th>创建时间</th>
																		<th>标题</th>
																		<th>订单号</th>
																		<th>状态</th>
																		<th>详情</th>
																</tr>
																</thead>
																<tbody>
																
																</tbody>
														</table>
												</div>
																				</div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
									<div id="slide-main" class="setting">
											<h2>个人设置</h2>
											<div class="user-msg">
													<div class="user-pic fl"><a><img src="/static/images/user2.png"></a></div>
													<div class="user-text">
															<h3>13265929386</h3>
															<h4></h4>
															<h5>资料完整度<span class="user-percent"><i style="width: 22%;"></i></span>22%</h5>
															<a href="/index.php?m=&amp;c=UserInfo&amp;a=changePwd">修改密码</a>
													</div>
											</div>
											<div class="setting-form">
													<dl>
															<dt>单位性质</dt>
															<dd>
																	<label><input type="radio" name="user-type" checked="" id="student">高校用户</label>
																	<label><input type="radio" name="user-type" id="company">企业用户</label>
															</dd>
													</dl>

													<div>
															<!-- 高校用户 -->
														<!-- <link rel="stylesheet" href="/static/css/dcalendar.picker.css">
														<form id="student-form" class="licitform" action="/index.php?m=&amp;c=UserInfo&amp;a=edit" method="post"> -->
																<input type="hidden" name="info[type]" value="1">
																<dl>
																		<dt>手机号码：</dt>
																		<dd>
																				13265929386<a href="/index.php?m=&amp;c=UserInfo&amp;a=changePhone">更换认证手机&gt;&gt;</a>
																				<input type="hidden" name="info[phone]" value="13265929386">
																				<input type="hidden" name="info[id]" value="3495">
																		</dd>
																</dl>
																<dl>
																		<dt>真实姓名：</dt>
																		<dd><input type="text" name="info[name]" value="" class="licit" data-rules="['真实姓名','1','32']"><span class="must">*</span></dd>
																</dl>
																<dl style="display: none">
																		<dt>所在地区：</dt>
																		<dd>
																				<div data-toggle="distpicker" class="distpicker">
																						<select id="province" name="info[provinceid]"><option value="110000">北京市</option><option value="120000">天津市</option><option value="130000">河北省</option><option value="140000">山西省</option><option value="150000">内蒙古自治区</option><option value="210000">辽宁省</option><option value="220000">吉林省</option><option value="230000">黑龙江省</option><option value="310000">上海市</option><option value="320000">江苏省</option><option value="330000">浙江省</option><option value="340000">安徽省</option><option value="350000">福建省</option><option value="360000">江西省</option><option value="370000">山东省</option><option value="410000">河南省</option><option value="420000">湖北省</option><option value="430000">湖南省</option><option value="440000">广东省</option><option value="450000">广西壮族自治区</option><option value="460000">海南省</option><option value="500000">重庆市</option><option value="510000">四川省</option><option value="520000">贵州省</option><option value="530000">云南省</option><option value="540000">西藏自治区</option><option value="610000">陕西省</option><option value="620000">甘肃省</option><option value="630000">青海省</option><option value="640000">宁夏回族自治区</option><option value="650000">新疆维吾尔自治区</option><option value="710000">台湾省</option><option value="810000">香港特别行政区</option><option value="820000">澳门特别行政区</option></select>
																						<select id="city" name="info[cityid]"></select>
																						<select id="county" name="info[countyid]"><option value="110102">西城区</option><option value="110103">崇文区</option><option value="110104">宣武区</option><option value="110105">朝阳区</option><option value="110106">丰台区</option><option value="110107">石景山区</option><option value="110108">海淀区</option><option value="110109">门头沟区</option><option value="110111">房山区</option><option value="110112">通州区</option><option value="110113">顺义区</option><option value="110114">昌平区</option><option value="110115">大兴区</option><option value="110116">怀柔区</option><option value="110117">平谷区</option></select>
																				</div>
																				<input type="hidden" id="hidcity" name="info[hidcity]" value="北京市">
																		</dd>
																</dl>
																<dl>
																		<dt>单位名称：</dt>
																		<dd><input type="text" name="info[unit]" d-value="" value="" placeholder="请填写您所在单位" class="licit" data-rules="['单位','1',50]">
																				<span class="must">*</span></dd>
																		<div id="stu-searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
																		<div id="stu-container" style="overflow: hidden; position: relative; z-index: 0; background-color: rgb(243, 241, 236); color: rgb(0, 0, 0); text-align: left;"><div style="overflow: visible; position: absolute; z-index: 0; left: 0px; top: 0px; cursor: url(&quot;http://api0.map.bdimg.com/images/openhand.cur&quot;) 8 8, default;"><div class="BMap_mask" style="position: absolute; left: 0px; top: 0px; z-index: 9; overflow: hidden; user-select: none; width: 930px; height: 0px;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 200;"><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 800;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 700;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 600;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 500;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 400;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 300;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 201;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 200;"></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 1;"><div style="position: absolute; overflow: visible; z-index: -100; left: 465px; top: 0px; display: block; transform: translate3d(0px, 0px, 0px);"><img src="http://online4.map.bdimg.com/tile/?qt=vtile&amp;x=1580&amp;y=589&amp;z=13&amp;styles=pl&amp;scaler=1&amp;udt=20190622" style="position: absolute; border: none; width: 256px; height: 256px; left: -436px; top: -255px; max-width: none; opacity: 1;"><img src="http://online0.map.bdimg.com/tile/?qt=vtile&amp;x=1581&amp;y=589&amp;z=13&amp;styles=pl&amp;scaler=1&amp;udt=20190622" style="position: absolute; border: none; width: 256px; height: 256px; left: -180px; top: -255px; max-width: none; opacity: 1;"><img src="http://online1.map.bdimg.com/tile/?qt=vtile&amp;x=1582&amp;y=589&amp;z=13&amp;styles=pl&amp;scaler=1&amp;udt=20190622" style="position: absolute; border: none; width: 256px; height: 256px; left: 76px; top: -255px; max-width: none; opacity: 1;"><img src="http://online2.map.bdimg.com/tile/?qt=vtile&amp;x=1583&amp;y=589&amp;z=13&amp;styles=pl&amp;scaler=1&amp;udt=20190622" style="position: absolute; border: none; width: 256px; height: 256px; left: 332px; top: -255px; max-width: none; opacity: 1;"><img src="http://online3.map.bdimg.com/tile/?qt=vtile&amp;x=1579&amp;y=589&amp;z=13&amp;styles=pl&amp;scaler=1&amp;udt=20190622" style="position: absolute; border: none; width: 256px; height: 256px; left: -692px; top: -255px; max-width: none; opacity: 1;"></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 2; display: none;"></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 3;"></div></div><div class="pano_close" title="退出全景" style="z-index: 1201; display: none;"></div><a class="pano_pc_indoor_exit" title="退出室内景" style="z-index: 1201; display: none;"><span style="float:right;margin-right:12px;">出口</span></a></div>
																		<input type="hidden" name="info[lng]" value="">
																		<input type="hidden" name="info[lat]" value="">
																</dl>
																<dl>
																		<dt>取样地址：</dt>
																		<dd><input type="text" name="info[qy_address]" d-value="" id="stu-suggestId" value="" placeholder="请精确到实验室门牌号" class="licit" data-rules="['取样地址',1,50]"><span class="must">*</span></dd>
																</dl>

																<dl>
																		<dt>所在院系：</dt>
																		<dd><input type="text" name="info[departments]" value="" placeholder="请填写您所在院系" class="licit" data-rules="['院系',1,50]"><span class="must">*</span></dd>
																</dl>

														<!--    <dl style="display: none">
																		<dt>身份：</dt>
																		<dd>
																				<select id="posi" name="info[position]"  class="ipts"  ><option value="" >请选择</option><option value="1" >老师</option><option value="2" >在读博士</option><option value="3" >在读硕士</option><option value="4" >在读本科</option><option value="5" >其他</option></select>            <input type="text" hidden="hidden" id="position" name="info[position]" value=""
																							class="licit" data-rules="['身份',1,2]">
																				<input type='text' id="positions" name="info[strPosition]" value=""
																							placeholder="请输入你的身份"
																							class="licit" data-rules="['身份',1,50]">
																				<span class="must">*</span>
																		</dd>
																</dl>-->

														<!--    <dl id="entranceTime" style="display: none">
																		<dt>入学时间：</dt>&lt;!&ndash;value=""&ndash;&gt;
																		<dd><input type="text" name="info[entranceTime]" placeholder="请填写您的入学时间" class="licit stud_date"
																							data-rules="['您的入学时间',1,50]" id="mydatepicker"><span class="must">*</span></dd>
																</dl>-->
																<dl>
																		<dt>QQ：</dt>
																		<dd><input type="text" name="info[qqCode]" value="" placeholder="请填写您的QQ" class="licit qq" data-rules="['QQ',1,50]"><span class="must">*</span></dd>
																</dl>

														<!--    <dl style="display: none">
																		<dt>微信：</dt>
																		<dd><input type="text" name="info[wxCode]" value="" placeholder="请填写您的微信" class="licit wx"
																							data-rules="['wx',1,50]"><span class="must">*</span></dd>
																</dl>-->
																<dl>
																		<dt>邮箱：</dt>
																		<dd><input type="text" name="info[email]" value="" placeholder="请填写您的常用邮箱" class="licit email" data-rules="['邮箱',-1,50]"><!--<span class="must">*</span>--></dd>
																</dl>
																<dl>
																		<dt>导师姓名：</dt>
																		<dd><input type="text" name="info[tutorName]" value="" class="licit" data-rules="['导师姓名',1,12]"><span class="must">*</span></dd>
																</dl>
														<!--    <dl style="display: none">
																				<dt>导师电话：</dt>
																				<dd><input type="text" name="info[tutorPhone]" value=""></dd>
																		</dl>-->
																<dl>
																		<dt></dt>
																		<dd>
																				<button class="ticket-btn btn sub" type="button">提 交</button>
																		</dd>
																</dl>
														</form>
														<!-- <script src="/static/js/dcalendar.picker.js"></script>
														<script type="text/javascript">
																$(function () {

																		/**
																		* 验证QQ号
																		* @param aQQ
																		* @returns {boolean}
																		*/
																		function isQQ(aQQ) {
																				var bValidate = RegExp(/^[1-9][0-9]{4,9}$/).test(aQQ);
																				if (bValidate) {
																						return true;
																				}
																				else
																						return false;
																		}


																		/**
																		* 检查字符串是否为合法email地址
																		* @param {String} 字符串
																		* @return {bool} 是否为合法email地址
																		*/
																		function isEmail(aEmail) {
																				var bValidate = RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(aEmail);
																				if (bValidate) {
																						return true;
																				}
																				else
																						return false;
																		}

																		/**
																		*验证入学日期
																		* @param stud_date
																		* @returns {boolean}
																		*/
																		function isDate(stud_date) {
																				dates = new Date(stud_date + ' 00:00:00');
																				check_time = dates.valueOf();
																				timestamp = new Date().valueOf();
																				if (timestamp > check_time) {
																						return true;
																				} else {
																						return false;
																				}
																		}

																		$(".licit").blur(function () {

																				name = $(this).attr('name');
														/*            if (name = 'info[email]') {
																						email = $(".email").val();
																						if (!isEmail(email)) {
																								$(".email").parent().children('span').html('邮箱格式不正确');
																						} else {
																								$(".email").parent().children('span').html('*');
																						}
																				}*/
																				if (name = 'info[qqCode]') {
																						qq = $(".qq").val();
																						if (!isQQ(qq)) {
																								$(".qq").parent().children('span').html('QQ格式不正确');
																						} else {
																								$(".qq").parent().children('span').html('*');
																						}
																				}
															/*          if (name = 'info[entranceTime]') {
																						stud_date = $(".stud_date").val();
																						if (!isDate(stud_date)) {
																								console.log($(".stud_date").parent());
																								$(".stud_date").parent().parent().children('.must').html('入学时间不能大于当前时间');
																						} else {
																								$(".stud_date").parent().parent().children('.must').html('*');
																						}
																				}*/
																		})

																		$(".sub").on("click", function () {
																				/*          email = $(".email").val();
																							qq = $(".qq").val();
																							stud_date = $(".stud_date").val();
																							var sf =  $("input[name='info[position]']").val();
																						var flags =   isDate(stud_date);
																							if(sf==1){
																									flags=true;
																							}*/
																				if ( true) {
																						$("#student-form").submit();
																				} else {
																						if (!isEmail(email)) {
																								console.log($(".email").children("span").html());
																								$(".email").parent().children('span').html('邮箱格式不正确');
																						}
																						if (!isQQ(qq)) {
																								console.log($(".qq").children("span").html());
																								$(".qq").parent().children('span').html('QQ格式不正确');
																						}
																						if (!isDate(stud_date)) {
																								console.log($(".stud_date").children("span").html());
																								$(".stud_date").parent().parent().children('span').html('入学时间不能大于当前时间');
																						}
																				}
																		})
																		var position = '' == '' ? 0 : parseInt('');
																		showattr(position);

																		$("#posi").change(function () {
																				$('#position').val($(this).val());
																				position = $(this).val();
																				showattr(position);
																		});
																		$('#mydatepicker').dcalendarpicker({});
																		$('#mydatepicker').val('');

																});

																function showattr(position) {
																		if (position == '' || position == 0) {
																				$('#positions').hide().removeClass("licit");
																				$('#entranceTime').hide().find('input').removeClass("licit");
																		} else if (position == 1) {
																				$('#positions').hide().removeClass("licit");
																				$('#entranceTime').hide().find('input').removeClass("licit");
																		} else if (position == 5) {
																				$('#positions').show().addClass("licit");
																				$('#entranceTime').show().find('input').addClass("licit");
																		} else {
																				$('#positions').hide().removeClass("licit");
																				$('#entranceTime').show().find('input').addClass("licit");
																		}
																}
														</script>
														<script>
																function G(id) {
																		return document.getElementById(id);
																}

																var map = new BMap.Map("stu-container");
																var point = new BMap.Point(116.3964, 39.9093);
																map.centerAndZoom(point, 13);
																map.enableScrollWheelZoom();
																var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
																		{
																				"input": "stu-suggestId"
																				, "location": map
																		});

																ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
																		var str = "";
																		var _value = e.fromitem.value;
																		var value = "";
																		if (e.fromitem.index > -1) {
																				value = _value.province + _value.city + _value.district + _value.street + _value.business;
																		}
																		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

																		value = "";
																		if (e.toitem.index > -1) {
																				_value = e.toitem.value;
																				value = _value.province + _value.city + _value.district + _value.street + _value.business;
																		}
																		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
																		G("stu-searchResultPanel").innerHTML = str;
																});

																var myValue;
																ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件

																		var _value = e.item.value;
																		myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
																		G("stu-searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
																		setPlace();
																});

																function setPlace() {
																		var myGeo = new BMap.Geocoder();// 将地址解析结果显示在地图上,并调整地图视野
																		myGeo.getPoint(myValue, function (point) {
																				if (point) {
																						console.log(point.lng + ';' + point.lat);
																						$("#student-form>input[name='info[lng]']").val(point.lng);
																						$("#student-form>input[name='info[lat]']").val(point.lat);
																						map.centerAndZoom(point, 16);
																						map.addOverlay(new BMap.Marker(point));
																				}
																		}, "北京");
																}

														</script> -->
																										<!-- 企业用户 -->
														<form id="company-form" action="/index.php?m=&amp;c=UserInfo&amp;a=edit" class="licitform" method="post" style="display: none;">
																<input type="hidden" name="info[type]" value="2">
																<dl>
																		<dt>手机号码：</dt>
																		<dd>13265929386<a href="/index.php?m=&amp;c=UserInfo&amp;a=changePhone">更换认证手机&gt;&gt;</a>
																				<input type="hidden" name="info[phone]" value="13265929386">
																				<input type="hidden" name="info[id]" value="3495">
																		</dd>
																</dl>
																<dl>
																		<dt>真实姓名：</dt>
																		<dd><input name="info[name]" value="" type="text" class="licit" data-rules="['姓名','1',32]"><span class="must">*</span></dd>
																</dl>
																<dl style="display: none">
																		<dt>所在地区：</dt>
																		<dd>
																				<div data-toggle="distpicker" class="distpicker">
																						<select id="province" name="info[provinceid]"></select>
																						<select id="city" name="info[cityid]"></select>
																						<select id="county" name="info[countyid]"></select>
																				</div>
																				<input type="hidden" id="hidcity" name="info[hidcity]" value="北京市">
																		</dd>
																</dl>


																<dl>
																		<dt>单位名称：</dt>
																		<dd><input type="text" name="info[unit]" value="" class="licit" data-rules="['单位','1',50]"><span class="must">*</span></dd>
																		<div id="cmp-searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
																		<div id="cmp-container" style="overflow: hidden; position: relative; z-index: 0; background-color: rgb(243, 241, 236); color: rgb(0, 0, 0); text-align: left;"><div style="overflow: visible; position: absolute; z-index: 0; left: 0px; top: 0px; cursor: url(&quot;http://api0.map.bdimg.com/images/openhand.cur&quot;) 8 8, default;"><div class="BMap_mask" style="position: absolute; left: 0px; top: 0px; z-index: 9; overflow: hidden; user-select: none; width: 0px; height: 0px;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 200;"><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 800;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 700;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 600;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 500;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 400;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 300;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 201;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 200;"></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 1;"><div style="position: absolute; overflow: visible; z-index: -100; left: 0px; top: 0px; display: block; transform: translate3d(0px, 0px, 0px);"><img src="http://online0.map.bdimg.com/tile/?qt=vtile&amp;x=1581&amp;y=589&amp;z=13&amp;styles=pl&amp;scaler=1&amp;udt=20190622" style="position: absolute; border: none; width: 256px; height: 256px; left: -180px; top: -255px; max-width: none; opacity: 1;"></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 2; display: none;"></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 3;"></div></div><div class="pano_close" title="退出全景" style="z-index: 1201; display: none;"></div><a class="pano_pc_indoor_exit" title="退出室内景" style="z-index: 1201; display: none;"><span style="float:right;margin-right:12px;">出口</span></a><div unselectable="on" class=" BMap_stdMpCtrl BMap_stdMpType0 BMap_noprint anchorTL" style="width: 62px; height: 186px; bottom: auto; right: auto; top: 10px; left: 10px; position: absolute; z-index: 1100; text-size-adjust: none;"><div class="BMap_stdMpPan"><div class="BMap_button BMap_panN" title="向上平移"></div><div class="BMap_button BMap_panW" title="向左平移"></div><div class="BMap_button BMap_panE" title="向右平移"></div><div class="BMap_button BMap_panS" title="向下平移"></div><div class="BMap_stdMpPanBg BMap_smcbg"></div></div><div class="BMap_stdMpZoom" style="height: 141px; width: 62px;"><div class="BMap_button BMap_stdMpZoomIn" title="放大一级"><div class="BMap_smcbg"></div></div><div class="BMap_button BMap_stdMpZoomOut" title="缩小一级" style="top: 120px;"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSlider" style="height: 102px;"><div class="BMap_stdMpSliderBgTop" style="height: 102px;"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSliderBgBot" style="top: 37px; height: 69px;"></div><div class="BMap_stdMpSliderMask" title="放置到此级别"></div><div class="BMap_stdMpSliderBar" title="拖动缩放" style="cursor: url(&quot;http://api0.map.bdimg.com/images/openhand.cur&quot;) 8 8, default; top: 37px;"><div class="BMap_smcbg"></div></div></div><div class="BMap_zlHolder"><div class="BMap_zlSt"><div class="BMap_smcbg"></div></div><div class="BMap_zlCity"><div class="BMap_smcbg"></div></div><div class="BMap_zlProv"><div class="BMap_smcbg"></div></div><div class="BMap_zlCountry"><div class="BMap_smcbg"></div></div></div></div><div class="BMap_stdMpGeolocation" style="position: initial; display: none; margin-top: 43px; margin-left: 10px;"><div class="BMap_geolocationContainer" style="position: initial; width: 24px; height: 24px; overflow: hidden; margin: 0px; box-sizing: border-box;"><div class="BMap_geolocationIconBackground" style="width: 24px; height: 24px; background-image: url(http://api0.map.bdimg.com/images/navigation-control/geolocation-control/pc/bg-20x20.png); background-size: 20px 20px; background-position: 3px 3px; background-repeat: no-repeat;"><div class="BMap_geolocationIcon" style="position: initial; width: 24px; height: 24px; cursor: pointer; background-image: url('http://api0.map.bdimg.com/images/navigation-control/geolocation-control/pc/success-10x10.png'); background-size: 10px 10px; background-repeat: no-repeat; background-position: center;"></div></div></div></div></div><div unselectable="on" class=" BMap_noprint anchorBL" style="height: 32px; position: absolute; z-index: 1200; text-size-adjust: none; bottom: 30px; right: auto; top: auto; left: 10px;"><div class="BMap_geolocationContainer" style="height: 32px; margin: 0px; box-sizing: border-box; border: 1px solid #d9d7d5; border-radius: 3px; -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,.2); overflow: hidden;"><div class="BMap_geolocationIconBackground" style="float: left; width: 32px; height: 32px; background-image: url('http://api0.map.bdimg.com/images/geolocation-control/mobile/gradient-bg-1x64.png'); background-size: 1px 32px; background-repeat: repeat-x;"><div class="BMap_geolocationIcon" style="width: 32px; height: 32px; cursor: pointer; background-image: url('http://api0.map.bdimg.com/images/geolocation-control/mobile/default-40x40.png'); background-size: 20px 20px; background-repeat: no-repeat; background-position: center center;"></div></div><div class="BMap_geolocationAddress" style="display: none; float: left; min-width: 50px; padding-left: 10px; padding-right: 10px; border-left: 1px solid #d9d7d5; background-image: url(http://api0.map.bdimg.com/images/geolocation-control/mobile/gradient-bg-1x64.png); background-size: 1px 32px; background-repeat: repeat-x;"><div style="height: 32px; display: table-cell; vertical-align: middle;"><div class="BMap_geolocationAddressText" style="font-size: 12px; color: #666666; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: block; min-width: 50px; max-width: 200px;"></div></div></div></div></div><div unselectable="on" class=" BMap_omCtrl BMap_ieundefined BMap_noprint anchorBR quad4" style="width: 13px; height: 13px; bottom: 0px; right: 0px; top: auto; left: auto; position: absolute; z-index: 10; text-size-adjust: none;"><div class="BMap_omOutFrame" style="width: 149px; height: 149px;"><div class="BMap_omInnFrame" style="bottom: auto; right: auto; top: 5px; left: 5px; width: 142px; height: 142px;"><div class="BMap_omMapContainer"></div><div class="BMap_omViewMv" style="cursor: url(&quot;http://api0.map.bdimg.com/images/openhand.cur&quot;) 8 8, default;"><div class="BMap_omViewInnFrame"><div></div></div></div></div></div><div class="BMap_omBtn BMap_omBtnClosed" style="bottom: 0px; right: 0px; top: auto; left: auto;"></div></div><div unselectable="on" class=" BMap_scaleCtrl BMap_noprint anchorBL" style="bottom: 18px; right: auto; top: auto; left: 81px; width: 88px; position: absolute; z-index: 10; text-size-adjust: none;"><div class="BMap_scaleTxt" unselectable="on" style="background-color: transparent; color: black;">2&nbsp;公里</div><div class="BMap_scaleBar BMap_scaleHBar" style="background-color: black;"><img style="border:none" src="http://api0.map.bdimg.com/images/mapctrls.png"></div><div class="BMap_scaleBar BMap_scaleLBar" style="background-color: black;"><img style="border:none" src="http://api0.map.bdimg.com/images/mapctrls.png"></div><div class="BMap_scaleBar BMap_scaleRBar" style="background-color: black;"><img style="border:none" src="http://api0.map.bdimg.com/images/mapctrls.png"></div></div></div>
																		<input type="hidden" name="info[lng]" value="">
																		<input type="hidden" name="info[lat]" value="">
																</dl>

																<dl>
																		<dt>取样地址：</dt>
																		<dd><input type="text" name="info[qy_address]" d-value="" id="cmp-suggestId" value="" placeholder="请精确到实验室门牌号" class="licit" data-rules="['取样地址',1,50]"><span class="must">*</span></dd>
																</dl>
																<dl>
																		<dt>税号：</dt>
																		<dd><input name="info[duty]" value="" type="text" class="licit" data-rules="['税号',0,50]"><span class="must"></span></dd>
																</dl>
																<dl>
																		<dt>QQ：</dt>
																		<dd><input name="info[qqCode]" value="" type="text" placeholder="请填写您的QQ" class="licit" data-rules="['QQ',1,13,'QQ']"><span class="must">*</span></dd>
																</dl>

																<dl>
																		<dt>微信：</dt>
																		<dd><input name="info[wxCode]" value="" type="text" placeholder="请填写您的微信" class="licit" data-rules="['微信',1,13]"><span class="must">*</span></dd>
																</dl>
																<dl>
																		<dt>邮箱：</dt>
																		<dd><input name="info[email]" value="" type="text" placeholder="请填写您的常用邮箱" class="licit" data-rules="['邮箱地址',0,50,'email']"><span class="must"></span></dd>
																</dl>

																<dl>
																		<dt>财务负责人：</dt>
																		<dd><input name="info[financeName]" value="" type="text" placeholder="请填写税务人姓名" class="licit" data-rules="['税务人姓名',0,32]"><span class="must"></span></dd>
																</dl>
																<dl>
																		<dt>财务电话：</dt>
																		<dd><input name="info[financePhone]" value="" type="text" placeholder="请填写税务人电话" class="licit" data-rules="['税务人电话',0,14,'phone']"><span class="must"></span></dd>
																</dl>
																<dl>
																		<dt></dt>
																		<dd><button class="ticket-btn btn" type="submit">提  交</button> </dd>
																</dl>
														</form>
														<!-- <script type="text/javascript">
																$(function () {
																		$('#cmp-suggestId').val($('#cmp-suggestId').attr('d-value'));
																});

																function G(id) {
																		return document.getElementById(id);
																}
																var map = new BMap.Map("cmp-container");
																var point = new BMap.Point(116.3964,39.9093);
																map.centerAndZoom(point,13);
																map.enableScrollWheelZoom();


																/*var ads = $("#province option:selected").text();
																var map = new BMap.Map("l-map");
																map.centerAndZoom("北京",12);*/


																var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
																		{"input" : "cmp-suggestId"
																				,"location" : map
																		});

																ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
																		var str = "";
																		var _value = e.fromitem.value;
																		var value = "";
																		if (e.fromitem.index > -1) {
																				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
																		}
																		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

																		value = "";
																		if (e.toitem.index > -1) {
																				_value = e.toitem.value;
																				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
																		}
																		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
																		G("cmp-searchResultPanel").innerHTML = str;
																});

																var myValue;
																ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
																		var _value = e.item.value;
																		myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
																		G("cmp-searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
																		setPlace();
																});

																function setPlace(){
																		var myGeo = new BMap.Geocoder();// 将地址解析结果显示在地图上,并调整地图视野
																		myGeo.getPoint(myValue, function(point){
																				if (point) {
																						$("#company-form>input[name='info[lng]']").val(point.lng);
																						$("#company-form>input[name='info[lat]']").val(point.lat);
																						map.centerAndZoom(point, 16);
																						map.addOverlay(new BMap.Marker(point));
																				}
																		}, "北京");
																}

														</script> -->
													</div>
											</div>
									</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order change-phone">
												<h2>个人设置<span>修改密码</span></h2>
												<div class="phone-wrap">
														<form id="ch-form" action="/index.php?m=&amp;c=UserInfo&amp;a=changePwd" class="licitform" method="post">
																<dl>
																		<dt>当前密码：</dt>
																		<dd>
																				<div class="phone-change-box fl">
																						<input type="password" name="info[opwd]" class="phone-input licit" data-rules="['原密码','1','32','password']" data-show="tips">
																				</div>
																				<a class="forget-word" href="/index.php?m=&amp;c=User&amp;a=forget">忘记密码？</a>
																		</dd>
																</dl>
																<dl>
																		<dt>新密码：</dt>
																		<dd>
																				<div class="phone-change-box">
																						<input type="password" id="pwd" name="info[pwd]" class="phone-input licit" data-rules="['新密码','1','32','password']" data-show="tips">
																				</div>
																		</dd>
																</dl>
																<dl>
																		<dt>确认密码：</dt>
																		<dd>
																				<div class="phone-change-box">
																						<input type="password" id="repwd" name="info[repwd]" class="phone-input licit" data-rules="['确认密码','1','32','password']" data-show="tips">
																				</div>
																		</dd>
																</dl>
																<dl>
																		<dt> <p class="tips" id="tips"><img src="/static/images/error.png"><span></span></p></dt>
																		<dd><button type="submit" class="btn ticket-btn" id="ch-sub">提  交</button> </dd>
																</dl>
														</form>
												</div>
										</div>
								</div>
						</div>

						<div class="slide-wrap" style="display:none">
								<div id="slide-main">
										<div class="order change-phone">
												<h2>个人设置<span>更换认证手机</span></h2>
												<div class="phone-wrap">
														<form action="/index.php?m=&amp;c=UserInfo&amp;a=changePhone" class="licitform" method="post">
																<dl>
																		<dt>当前认证手机：</dt>
																		<dd>13265929386</dd>
																</dl>
																<dl>
																		<dt>更换认证手机：</dt>
																		<dd>
																				<div class="phone-change-box">
																						<input type="text" id="phone" name="phone" class="phone-input licit" data-rules="['手机号','1','11','phone']" data-show="tips">
																				</div>
																		</dd>
																</dl>
															<dl>
																		<dt>图文验证码：</dt>
																		<dd>
																				<div class="phone-change-box">
																						<input type="text" id="verify" name="verify" class="code-input licit" data-rules="['验证码','1','6']" data-show="tips">
																						<img id="verify_btn" src="/index.php?m=&amp;c=Public&amp;a=verify&amp;ajax=t" style="float:left;cursor: pointer;" onclick="this.src='/index.php?m=&amp;c=Public&amp;a=verify&amp;ajax=_verify&amp;t='+Math.random();">
																				</div>
																		</dd>
																</dl>

																<dl>
																		<dt>短信验证码：</dt>
																		<dd>
																				<div class="phone-change-box">
																						<input type="text" name="sms_code" class="code-input licit" data-rules="['短信验证码','1','6']" data-show="tips">
																						<button type="button" class="send-code" id="send_scode" data-beid="355785">获取验证码</button>
																				</div>
																		</dd>
																</dl>
																<dl>
																		<dt><p class="tips" id="tips"><img src="/static/images/error.png"><span></span></p></dt>
																		<dd><button type="submit" class="btn ticket-btn">提  交</button> </dd>
																</dl>
														</form>
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
		init(){
			$("#slide").on("click",".slide-item",function(){
				// $(this).addClass("active").siblings().removeClass('active');
				$(".slide-wrap").eq($(this).index()).css({
					"display":"block"
				}).siblings().css({
					"display":"none"
				})
				$("#slide").css({
					"display":"block"
				})
			})
		}
	}
}
</script>

