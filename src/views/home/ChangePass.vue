<template>
  <div>
    <div id="slide-main">
        <div class="order change-phone">
            <h2>个人设置<span>修改密码</span></h2>
            <div class="phone-wrap">
                <form id="ch-form" class="licitform">
                    <dl>
                        <dt>当前密码：</dt>
                        <dd>
                            <div class="phone-change-box fl">
                                <input type="password" name="info[opwd]" class="phone-input licit" data-rules="['原密码','1','32','password']" data-show="tips">
                            </div>
                            <a class="forget-word" href="javascript:;">忘记密码？</a>
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
                        <dt> <p class="tips" id="tips"><img src="../../assets/images/error.png"><span></span></p></dt>
                        <dd><button type="submit" class="btn ticket-btn" id="ch-sub">提  交</button> </dd>
                    </dl>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>
