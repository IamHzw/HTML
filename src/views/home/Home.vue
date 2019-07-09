<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div id="content">
		<div class="wrap">
			<div id="slide">
				<router-link to="/home/personal">
					<div class="slide-item" :class="{chickColor:0==current}" @click="addClass(0)">
						<h2>
							<a href="javascript:;" class="userCenter" >个人中心</a>
						</h2>
					</div>
				</router-link>
				<router-link :to="{name:'OrderManagement'}">
					<div class="slide-item" :class="{chickColor:1==current}" @click="addClass(1)">
						<h2>
							<a href="javascript:void(0)" class="myorder">订单管理</a>
						</h2>
					</div>
				</router-link>
				<router-link :to="{name:'MessageCenter'}">
					<div class="slide-item msgsa" :class="{chickColor:2==current}" @click="addClass(2)">
						<h2 style="position: relative">
							<a href="javascript:void(0)" class="messages">
								消息中心
								<span id="Nomsg" style="margin-top: 10px;position: absolute;right: 20px;top:20px;"></span>
							</a>
						</h2>
					</div>
				</router-link>
				<router-link :to="{name:'Collect'}">
					<div class="slide-item" :class="{chickColor:3==current}" @click="addClass(3)">
						<h2>
							<a href="javascript:void(0)" class="myshouchang">我的收藏</a>
						</h2>
					</div>
				</router-link>
				<router-link :to="{name:'Appointment'}">
					<div class="slide-item" :class="{chickColor:4==current}" @click="addClass(4)">
						<h2>
							<a href="javascript:void(0)" class="yijianyuye">
								一键预约
							</a>
						</h2>
					</div>
				</router-link>
				<router-link :to="{name:'PersonalSetting'}">
					<div class="slide-item" :class="{chickColor:5==current}" @click="addClass(5)">
						<h2>
							<a href="javascript:void(0)" class="myseting" style="border-bottom: 1px solid #c2c2c2;">
								个人设置
							</a>
						</h2>
					</div>
				</router-link>
			
			</div>

			<div class="slide-wrap">
				<transition>
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
import $ from "jquery";
import  vHeader  from "../../components/vHeader.vue";
import  vSider from "../../components/vSider.vue";
import  vFootersimper from "../../components/vFooterSimper.vue";
export default {
  data () {
    return {
			current:0,
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
		addClass:function(index){					
			this.current=index;
		},

		init(){
			$("#slide").on("click",".slide-item",function(){
				// console.log($(this).addClass("chickColor").siblings());
				
				$(this).addClass("chickColor").siblings().removeClass("chickColor");
			})
		}
	}
}
</script>

<style scoped>
.chickColor{
	background: #c8c8c8;
}
</style>
