<template>
  <header class="login-header">
  		<router-link  :to="{path:'/index'}" >
	        <a href="javascript:;" id="logo" class="fl" style="box-sizing: border-box;">
	            <img src="../assets/images/logo2.png">
	        </a>
        </router-link>
        <div class="header-right-box" style="box-sizing: border-box;">
            <div class="header-top fr">
                <div id="place" class="fl">
                    <span id="place-add">{{currentCity}}</span>
                </div>
                <div id="allmap" style="display: none;"></div>
                <div class="fl" v-if="currentMember.id==null">
                    <router-link :to="{name:'login'}"><a href="javascript:;" id="index-login">请登录</a></router-link>
                </div>
                <div class="fl" v-if="currentMember.id==null">
                	<router-link :to="{name:'register'}"><a href="javascript:;" id="index-login">免费注册</a></router-link>
                </div>
                <div class="fl" v-if="currentMember.id!=null">
                	<router-link to="home"><a href="javascript:;" id="index-login" style="margin-right: 0px;">个人中心</a>   </router-link>
                </div>
                <div class="fl" v-if="currentMember.id!=null" @click="loginOut()">
                	<a  id="index-login" style=" margin-right: 0;text-align: left;font-size: 14px; margin-top: 5px; color: blue;width: 50px;">
                		退出
                	</a>  
                </div>
                <div class="fl">
                    <a href="javascript:void(0)" id="index-login">联系客服</a>    
                </div>
                <!--<div class="fl">
                    <a href="javascript:void(0)" id="index-login">微信公众号</a>    
                </div>-->
                <div class="fl">
                    <router-link :to="{name:'about'}"><a href="javascript:;" id="index-login">关于我们</a></router-link>
                </div>
            </div>
            <div class="header-bottom fr">
                <div class="login-nav fl">
                    <div class="login-la">
                            <a href="javascript:;">测试分析</a>
                        <div id="login-nav-list">
                            <router-link :to="{name:'project'}">微观形状</router-link>
                            <router-link :to="{name:'project'}">材料性能</router-link>
                            <router-link :to="{name:'project'}">成分结构</router-link>
                            <router-link :to="{name:'project'}">模拟仿真</router-link>
                            <router-link :to="{name:'project'}">原位测试</router-link>
                            <router-link :to="{name:'project'}">地质医学</router-link>
                        </div>
                    </div>
                    <div>
                        <router-link :to="{name:'biologys'}"><a href="javascript:;">微纳加工</a></router-link>
                        <div id="login-nav-list2" class="clearfix">

                        </div>
                        <form id="tempedit" action="">
                            <input type="hidden" id="tempid" name="tempid"/>
                            <input type="hidden" id="pid" name="pid"/>
                        </form>
                    </div>
                    <div>
                        <router-link :to="{name:'simulate'}"><a href="avascript:;">模拟计算</a></router-link>
                    </div>
                    <div>
                        <router-link :to="{name:'drafting'}"><a href="avascript:;">科研作图</a></router-link>
                    </div>
                    <div>
                        <router-link :to="{name:'scipolish'}"><a href="avascript:;">翻译润色</a></router-link>
                    </div>
                    <div>
                        <a href="avascript:;" id="yjyy" @click="onYjyy">一键预约</a>
                        <div id="login-nav-list2" class="clearfix" v-if="result===0">
                            <a href='avascript:;' class="YjyySkip">
                                <p style='font-size: 16px;'>你还未登录，请点此登录!</p>
                            </a>
                        </div>
                        <div id="login-nav-list2" class="clearfix" v-else-if="result===1">
                            <a href='avascript:;' class="YjyySkip">
                                <p style='font-size: 16px;'>还未有预约模板哦，快去提交订单吧？</p>
                            </a>
                        </div>
                        <div id="login-nav-list2" class="clearfix" v-else-if="result===2">
                            <a href='avascript:;' class="YjyySkip">
                                <p style='font-size: 16px;'>查看更多>></p>
                            </a>
                        </div>
                        <div id="login-nav-list2" class="clearfix" v-else>
                        </div>
                    </div>
                    <div id="header-search">
                        <form action="" method="post">
                            <input type="text" name="keywords" value="" placeholder="扫描电子显微镜">
                            <button type="submit"></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style scoped>

</style>

<script>
// import $ from 'jquery';
import { webRpc,token } from '../rpc/index';
export default {
    data () {
        return {
            currentMember:{},
            currentCity:'',
            dataArr:[],
            result:3
        }
    },
    created () {
       

		if(sessionStorage.currentMember!=null){
			this.currentMember = JSON.parse(sessionStorage.getItem('currentMember'))
            // console.log(this.currentMember);
        }
        //从sessionStorage获取城市
        var city = sessionStorage.city;
        if(city==null || city == ""){
        	//处理只获取一次城市，不用每次进都获取
        	this.$nextTick(function(){  //不使用this.$nextTick()方法会报错
            	this.maps();
        	});
        
        }else{
        	this.currentCity = city;
        	// console.log("不用执行获取城市");
        }
        
    },
    
    methods: {
        maps(){
            // 百度地图API功能
			var that = this;
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(108.95,34.27);
            map.centerAndZoom(point,12);
            var geolocation = new BMap.Geolocation();

            geolocation.getCurrentPosition(function(r){
		
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);//标出所在地
                    map.panTo(r.point);//地图中心移动
                    // alert('您的位置：'+r.point.lng+','+r.point.lat);
                    var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
                    var gc = new BMap.Geocoder();
                    gc.getLocation(point, function(rs){
                        that.currentCity = rs.addressComponents.city;
						sessionStorage.setItem('city',rs.addressComponents.city);
						console.log(rs.addressComponents.city);
                    });

                }else {
                    alert('failed'+this.getStatus());
                }

            },{enableHighAccuracy: true})
        },
        loginOut(){
        	 webRpc.invokeCross("memberWebRpc.logout").then(result=>{
				if(result.retCode==0){
                	token.clear();
                	sessionStorage.removeItem('currentMember');
                	this.$router.push('/login');
				}else{
					alert(result.message);
				}
		    }).catch(error =>{});
        },
        onYjyy(){
            if(sessionStorage.currentMember==null){
                this.result=1
            }else{

            }
            // webRpc.invokeCross("").then(res=>{
            //     if(res.retCode==0){
            //         this.dataArr=res.data
            //     }
            // }).catch(error=>{})
            // this.$router.push({name:'orderAppointment'})
        }
    }
}

</script> 