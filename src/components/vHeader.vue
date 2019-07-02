<template>
  <header class="login-header">
        <a href="" id="logo" class="fl" style="box-sizing: border-box;">
            <img src="../assets/images/logo.png">
        </a>
        <div class="header-right-box clearfix" style="box-sizing: border-box;">
            <div class="header-top fr">
                <div id="place" class="fl">
                    <span id="place-add"></span>
                    <!-- <a id="place-change">切换</a>
                    <div id="place-list">

                    </div>-->
                </div>
                <div id="allmap" style="display: none;"></div>
                <div class="fl">
                    <router-link :to="{name:'Login'}"><a href="" id="index-login">请登录</a>   </router-link>
                    <!-- <a href="" id="index-login">请登录</a>     -->
                </div>
                <div class="fl"><router-link :to="{name:'Login'}"><a href="" id="index-login">免费注册</a>   </router-link>
                    <!-- <a href="" id="index-login">免费注册</a>     -->
                </div>
                <div class="fl">
                    <a href="" id="index-login">联系客服</a>    
                </div>
                <div class="fl">
                    <a href="" id="index-login">微信公众号</a>    
                </div>
                <div class="fl">
                    <router-link :to="{name:'About'}"><a href="" id="index-login">关于我们</a></router-link>
                    <!-- <a href="" id="index-login">关于我们</a>     -->
                </div>
            </div>
            <div class="header-bottom fr">
                <div class="login-nav fl">
                    <div>
                        <!-- <a>测试分析</a> -->
                        <router-link :to="{name:'AllTest'}"><a>测试分析</a></router-link>
                        <!-- <div id="login-nav-list">
                        </div> -->
                    </div>
                    <div>
                        <!-- <a id="yjyy">微纳加工</a> -->
                        <router-link :to="{name:'Biologys'}"><a>微纳加工</a></router-link>
                        <div id="login-nav-list2" class="clearfix">

                        </div>
                        <form id="tempedit" action="">
                            <input type="hidden" id="tempid" name="tempid"/>
                            <input type="hidden" id="pid" name="pid"/>
                        </form>
                    </div>
                    <div class="clearfix">
                        <!-- <a href="">模拟计算</a> -->
                        <router-link :to="{name:'Simulate'}"><a href="">模拟计算</a></router-link>
                    </div>
                    <div class="clearfix">
                        <!-- <a href="">科研作图</a> -->
                        <router-link :to="{name:'Drafting'}"><a href="">科研作图</a></router-link>
                    </div>
                    <div class="clearfix">
                        <!-- <a href="">翻译润色</a> -->
                        <router-link :to="{name:'Scipolish'}"><a href="">翻译润色</a></router-link>
                    </div>
                    <div class="clearfix">
                        <a href="">一键预约</a>
                    </div>
                    <div id="header-search" class="clearfix">
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
import $ from 'jquery';
export default {
    data () {
        return {
            
        }
    },
    // mounted () {
    //   this.$nextTick(()=>{
    //       this.pullDown
    //   })  
    // },
    created () {
        this.$nextTick(function(){  //不使用this.$nextTick()方法会报错
           // this.pullDown();  //写入到DOM元素
            this.maps();
        });

    },
    methods: {
        pullDown(){
             $.post('http://www.ceshigo.com/index.php?m=Home&c=Index&a=index_top', {}, function (data) {
                var dd = data.data;

                if (dd != null) {
                    var func = dd['projectFunc'];
                    if (func != null) {
                        var html = "";
                        for (var i = 0; i < func.length; i++) {
                            html += "<a href='/index.php?m=Home&c=Project&a=index&type=2&pid=" + func[i]['id'] + "'>" + func[i]['name'] + "</a>";
                        }
                        $("#login-nav-list").html(html);
                    } else {
                        layer.tips(data.message, "#login-nav-list", {
                            tips: [1, '#9C9FA6'] //还可配置颜色
                        });
                    }
                }
            }, 'json');

        },
        maps(){
            // 百度地图API功能

            var map = new BMap.Map("allmap");

            var point = new BMap.Point(108.95,34.27);

            map.centerAndZoom(point,12);

            var geolocation = new BMap.Geolocation();

            geolocation.getCurrentPosition(function(r){console.log(r.point)

                if(this.getStatus() == BMAP_STATUS_SUCCESS){

                    var mk = new BMap.Marker(r.point);

                    map.addOverlay(mk);//标出所在地

                    map.panTo(r.point);//地图中心移动

                    // alert('您的位置：'+r.point.lng+','+r.point.lat);

                    var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息

                    var gc = new BMap.Geocoder();

                    gc.getLocation(point, function(rs){
                        $('#place-add').text(rs.addressComponents.city);
                        var addComp = rs.addressComponents; 
                        //console.log(rs.addressComponents.city);//地址信息

                        //alert(rs.address);//弹出所在地址

        

                    });

                }else {

                    alert('failed'+this.getStatus());

                }

            },{enableHighAccuracy: true})
        }
    }
}
</script>


