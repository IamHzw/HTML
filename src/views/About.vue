 <template> 
   <div class="partnership"> 
    <v-header></v-header> 
    <v-sider></v-sider> 
    <div id="index-banner" class="about-banner"> 
     <div class="wrap">
      <img src="../assets/images/aboutbanner.jpg" class="banner-bg" />
     </div> 
    </div> 
    <!--<img src="http://pic.ceshigo.com//20181111/2018111122540620369826.jpg" class="banner-bg">--> 
    <div id="aboutcsg" style="margin:0px;padding:70px 0px 140px;background:#F7F7F7;font-family:微软雅黑;font-size:14px;"> 
     <div class="wrap" style="margin:0px auto;padding:0px;"> 
      <h2 style="font-weight:normal;font-size:30px;color:#494949;text-align:center;"> 了解星尘实验室 </h2> 

      <p style="font-size:16px;color:#4F4F4F;"> 星辰实验室隶属于广州星辰科技有限公司，由广东省半导体产业技术研究院发起成立。依托广东省科学院专业庞大的资源，通过市场化运营的“互联网+科研”综合服务平台，聚集国内外著名高校、科研院所、第三方检测机构及科技服务企业等顶尖科研机构的科研资源，星尘实验室为广大科研团队及科研人员提供测试分析、微纳加工、数据分析、计算模拟、定制化研发解决方案等多种多样的一站式科技服务。
	  </p> 
     
     </div> 
    </div> 
    <div id="aboutreason" style="margin:0px;padding:70px 0px 140px;background:#FFFFFF;font-family:微软雅黑;font-size:14px;"> 
     <div class="wrap" style="margin:0px auto;padding:0px;"> 
      <h2 style="font-weight:normal;font-size:30px;color:#494949;text-align:center;"> 如需了解更多信息，烦请联系： </h2> 
      <div class="aboutresult-wrap" style="margin:0px;padding:80px 0px 0px;"> 
       <div class="aboutresult-item" style="margin:0px;padding:35px 24px 0px;background:#01707B;"> 
        <i><img title="reason1.png" style="height:62px;" alt="reason1.png" src="../assets/images/about_icon_1.png" /></i> 
        <h3 style="font-weight:normal;font-size:16px;color:#FFFFFF;text-align:center;"> 质量有保证 </h3> 
        <p style="color:#FFFFFF;"> 测试GO团队以严苛的标准 ， 对申请入驻平台的 320 余家测试单位的2300余台仪器设备的使用状态、测试人员水平、 数据质量可靠性进行了评估， 最终筛选出了入驻单位近170余家，入驻仪器近1500台 ， 测试数据可靠，质量有保证！ </p> 
       </div> 
       <div class="aboutresult-item" style="margin:0px;padding:35px 24px 0px;background:#01707B;"> 
        <i><img title="reason2.png" style="height:62px;" alt="reason2.png" src="../assets/images/about_icon_2.png" /></i> 
        <h3 style="font-weight:normal;font-size:16px;color:#FFFFFF;text-align:center;"> 测试周期短 </h3> 
        <p style="color:#FFFFFF;"> 测试GO平台入驻单位170余家，入驻仪器近1500台，测试资源丰富，每项测试均有多个测试单位和仪器设备可供选择，可快速为您调配测试资源！ </p> 
       </div> 
       <div class="aboutresult-item" style="margin:0px;padding:35px 24px 0px;background:#01707B;"> 
        <i><img title="reason3.png" style="height:62px;" alt="reason3.png" src="../assets/images/about_icon_3.png" /></i> 
        <h3 style="font-weight:normal;font-size:16px;color:#FFFFFF;text-align:center;"> 测试项目全 </h3> 
        <p style="color:#FFFFFF;"> 测试GO平台的测试项目已覆盖表面形貌分析、材料性能测试、成分结构测试、岩石地质测试等方面，常用的测试项目这里都找得到。测试GO团队还将不断拓宽测试领域为您提供更完善的服务！ </p> 
       </div> 
       <div class="aboutresult-item" style="margin:0px;padding:35px 24px 0px;background:#01707B;"> 
        <i><img title="reason4.png" style="height:62px;" alt="reason4.png" src="../assets/images/about_icon_4.png" /></i> 
        <h3 style="font-weight:normal;font-size:16px;color:#FFFFFF;text-align:center;"> 价格优惠 </h3> 
        <p style="color:#FFFFFF;"> “测试GO”利用平台优势为您筛选质优价廉的测试资源；另外，关注“测试GO”公众号即可享受终身免费包邮，预存还有优惠哟！ </p> 
       </div> 
      </div> 
     </div> 
    </div> 
    <v-footer></v-footer> 
   </div> 
  </template> 

<script>
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFooter from "../components/vFooter.vue";
export default {
  data () {
    return {
      
    }
  },
  components: {
      vHeader,
      vSider,
      vFooter
  },
}
</script>

