<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div id="content" class="edit-content">
        <div class="wrap">
           
         	
	<div style="margin-top:20px;padding:100px;text-align:center;background-color:#ffffff;">
        <div>
            <img src="../assets/images/message_success.png" style="width:72px;height:72px;" alt="">
        </div>
        <div style="font-size:30px;padding:20px 0px;">下单成功</div>
        <div style="padding:20px 0px;">
            <div style="padding:0px 150px;font-size:18px;line-height:28px;text-align:left;">
               	 我们会及时联系您确认报价，报价完成后请您及时支付并打印好预约单<span style="color:#666;">（有测试单也需打印）</span>，
               	 等待上门取样或自行寄样<span style="color:#666;">（无需寄样请忽略）</span>，如有问题可拨打电话020-61086425 转 8022
            </div>
        </div>
        <div style="padding:20px 0px;">
            <a href="#/home/orderManagement" style="padding:10px 20px;font-size:16px;border-radius:4px;border:solid 1px #32d693;color:#32d693;">查看订单</a>
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
    
  },
  methods: {
    selectProduct(i,index){
        this.$set(this.indexArrSelect, index, i);
    },
   
  }
}
</script>

<style scoped>


</style>


