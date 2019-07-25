<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div class="class-wrap">
      <div class="top_title">发布需求</div>
      <div class="confirm_box">
          <div style="float:left;width:60%">
              <ul class="user_contact brdn">
                  <li class="require">
                      <div class="txt">
                          <span>需求类别</span><span style="color:#fc916d;margin-right:5px">*</span>
                      </div>
                      <input id="requiretype" type="hidden" name="requiretype" value="0">
                      <label class="requiretype" data-value="0" style="float:left;height:40px;margin-right:15px;padding-left:20px;position:relative;cursor:pointer;position:relative">
                          <img class="require-on" src="../assets/images/Newdemand_icon_1.png" style="position:absolute;left:0;top:14px;">
                          <img class="require-off" src="../assets/images/Newdemand_icon_2.png" style="display:none;position:absolute;left:0;top:14px">
                          <span style="display:block;line-height:40px;font-size:14px;color:#666">实验测试</span>
                      </label>
                      <label class="requiretype" data-value="1" style="float:left;height:40px;margin-right:15px;padding-left:20px;position:relative;cursor:pointer;position:relative">
                          <img class="require-on" src="../assets/images/Newdemand_icon_1.png" style="display:none;position:absolute;left:0;top:14px">
                          <img class="require-off" src="../assets/images/Newdemand_icon_2.png" style="position:absolute;left:0px;top:14px">
                          <span style="display:block;line-height:40px;font-size:14px;color:#666">科研绘图</span>
                      </label>
                      <label class="requiretype" data-value="2" style="float:left;height:40px;margin-right:15px;padding-left:20px;position:relative;cursor:pointer;position:relative">
                          <img class="require-on" src="../assets/images/Newdemand_icon_1.png" style="display:none;position:absolute;left:0px;top:14px">
                          <img class="require-off" src="../assets/images/Newdemand_icon_2.png" style="position:absolute;left:0px;top:14px">
                          <span style="display:block;line-height:40px;font-size:14px;color:#666">数据分析</span>
                      </label>
                  </li>
                  <li>
                      <div class="txt">
                          <span>联系人</span><span style="color:#fc916d;margin-right:5px">*</span>
                      </div>
                      <input type="text" id="contacter" name="contacter" style="width:420px;" value="" class="tt" maxlength="4" placeholder="请留下您的姓名" />
                  </li>
                  <li>
                      <div class="txt">
                          <span>联系号码</span><span style="color:#fc916d;margin-right:5px">*</span>
                      </div>
                      <input type="text" id="contactel" name="contactel" style="width:420px;" value="" class="tt" maxlength="20" placeholder="请留下您的联系方式（手机号码或座机号）" />
                  </li>
                  <li>
                      <div class="txt">
                          <span>电子邮箱</span><span style="color:#fc916d;margin-right:5px">*</span>
                      </div>
                      <input type="text" id="contactemail" name="contactemail" style="width:420px;" value="" class="tt" maxlength="20" placeholder="请留下您的电子邮箱" />
                  </li>
                  <li>
                      <div class="txt">样品数量</div>
                      <input type="text" value="" id="patterncnt" name="patterncnt" style="width:420px;" class="tt" placeholder="请填写样品数量" maxlength="50" />
                  </li>
                  <li>
                      <div class="txt">预算范围</div>
                      <input type="text" value="" id="budget" name="budget" style="width:420px;" class="tt" maxlength="20" placeholder="请填写您的预算范围" />
                  </li>
                  <li>
                      <div class="txt">完成周期</div>
                      <input type="text" value="" id="period" name="period" style="width:420px;" class="tt" placeholder="如：一周、10天、1个月、2018-12-11截至" maxlength="100" />
                  </li>
                  <li>
                      <div class="txt">添加附件</div>
                      <div style="width:50px;height:50px;border:1px dashed #ccc;position:relative;float:left;cursor:pointer">
                          <img src="../assets/images/Newdemand_icon_3.png" style="width:20px;height:20px;position:absolute;top:15px;left:15px;">
                          <input id="uploadify" type="file" name="uploadify" style="width:50px;height:50px;opacity:0;position:relative;z-index:100;cursor:pointer" onchange="upfileoss(this);" />
                      </div>
                      <div class='file-list' style="float:left">
                          <div style="clear:both"></div>
                      </div>
                      <span id="uploadify_alt" style="display:inline-block;height:50px;line-height:50px;font-size:14px;color:#999;float:left;margin-left:10px">未选择文件</span>
                  </li>
                  <li class="mesg">
                      <div class="txt">
                          <span>需求描述</span><span style="color:#fc916d;margin-right:5px">*</span>
                      </div>
                      <textarea class="ta" id="detail" name="detail" style="width:420px;font-family:'Microsoft YaHei', SimSun, 'Arial Narrow', HELVETICA!important" placeholder="必填，请尽量填写仪器名称 + 检测项目 + 所用标准 + 报告用途(10-500个字)" maxlength="350" placeholder-class="placeholderfont"></textarea>
                      <div style="color:#fb8245;padding-left:90px;">需求请尽量详细，以便更精确的匹配到合适的测试项目</div>
                  </li>
                  <li id="boxmatchingitem" style="display:none;">
                      <input type="hidden" value="0" id="principalsaccountid" name="principalsaccountid" /> <!-- 项目负责人 -->
                      <input type="hidden" value="0" id="instrumentid" name=" instrumentid" />                <!-- 项目ID -->
                      <div class="txt">
                          <span>匹配仪器</span><span style="color:#fc916d;margin-right:5px">*</span>
                      </div>
                      <ul class="matching-list">
                          <input id="matchinginstrument" type="hidden" name="matchinginstrument">
                      </ul>
                  </li>
                  <li style="padding-left:89px">
                      <input type="button" id="task-submit" name="task-submit" value="提交" class="btn big_btn" style="padding:0">
                  </li>
              </ul>
          </div>
          <div style="float:right;width:40%">
              <div class="contact_tc clearfix" style="float:right;box-sizing:border-box">
                  <div class="row" style="font-size:14px;">尊敬的用户：</div>
                  <div class="row" style="font-size:14px;">您好！现在提交需求后，我们会在<br/><span style="color:#fc916d;font-weight:bold" id="boxsecond">loading</span><br/>之前和您联系。科学指南针，真心为您！</div>
              </div>
              <div style="width:300px;margin-top:20px;border:1px solid #dedede;border-top:2px solid #dedede;padding:30px 20px 30px 20px;font-size:14px;text-align:center;float:right;box-sizing: border-box">
                  <div style="line-height:26px;color:#666">
                      服务用户&nbsp;<span style="color:#fc916d">10万+</span><br />
                      客户满意度&nbsp;<span style="color:#fc916d">98.8%</span><br />
                      每天处理样品数&nbsp;<span style="color:#fc916d">2000+</span><br />
                  </div>
                  <img src="../assets/images/Newdemand_icon_4.png" style="margin-top:20px;" />
                  <br />
                  <div style="line-height:40px;padding-top:30px;">
                      <img src="../assets/images/Newdemand_icon_5.png" />
                      <div style="font-size:16px;font-weight:bold;line-height:26px;color:#fc916d">400-831-0631</div>
                      <div style="line-height:32px;font-weight:bold;color:#666">
                          周一到周五&nbsp;&nbsp;&nbsp;&nbsp;09:00-21:00
                      </div>
                  </div>
              </div>
              <div style="clear:both"></div>
          </div>
          <div style="clear:both"></div>
      </div>
    </div>
    <div style="clear:both"></div>
    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
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
}
</script>

<style scoped>
  .container{padding-bottom:70px}
  .user_contact li .txt {height:40px;line-height:40px;font-size:14px;width:120px;color:#4e4e4e;position:relative}
  .user_contact li .tt{height:40px;}
  .top_title{
    width:100%;
    height:50px;
    line-height:50px;
    font-size:18px;
    color:#4e4e4e;
    font-weight:bold;
    padding-left:12px;
    margin-top: 30px;
    position:relative
    }
  .top_title:after{content:'';display:block;width:2px;height:20px;background:#32d693;position:absolute;left:0;top:15px}
  .confirm_box{width:100%;padding:30px 60px 37px 46px;margin:0 auto;background:#fff}
  .confirm_box .user_contact li{margin-bottom:19px;}
  .confirm_box .user_contact li:after{content:'';display:block;clear:both}
  .confirm_box .user_contact .txt{width:89px;height:40px;text-align:right;float:left;padding-right:19px;position:relative}
  .confirm_box .user_contact span{display:inline-block;height:40px;line-height:40px;float:right}
  .confirm_box .user_contact input{border:1px solid #e8e8e8;padding-left:21px;font-size:14px;color:#333}
  .confirm_box .user_contact .ta{height:80px;border:1px solid #e8e8e8;padding:11px 21px;outline:none;font-size:14px;color:#333}
  .confirm_box .user_contact .big_btn{width:200px;height:40px;line-height:40px;border-radius:5px;background:#32d693;text-align:center;font-size:16px;color:#fff;font-weight:bold;cursor:pointer}
  .confirm_box .contact_tc{width:300px;background:#fff7eb;border:1px solid #f2b892;padding:20px 15px;line-height:26px;color:#666}
  .placeholderfont{font-family:'Microsoft YaHei', SimSun, 'Arial Narrow', HELVETICA!important}
  .matching-list{ float: left; padding: 5px 0; max-width: 445px }
  .matching-list:after{ content: ""; display: block; clear: both; }
  .matching-list .matching-list-item{ display: inline-block; float: left; padding: 0 10px; height: 32px; line-height: 30px; border: 1px solid #dedede; font-size: 14px; color: #666; border-radius: 6px; margin:0 10px 12px 0; cursor: pointer; }
  .matching-list .matching-list-item-active{ border-color: #32d693; background-color: #32d693; color: #fff; }
</style>

