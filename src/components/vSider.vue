<template>
  <div id="mslide">
        <ul>
            <li>
                <!-- <script id="qd285215377156bd551e9b4e74592610182f67d9c06b" src="https://wp.qiye.qq.com/qidian/2852153771/56bd551e9b4e74592610182f67d9c06b" charset="utf-8" async defer></script> -->
                <a id="QQtent">
                  <i><img src="../assets/images/slideqq.png"></i>
                  <p>在线客服</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i><img src="../assets/images/slidep.png"></i>
                    <p>联系我们</p>
                    <div class="mslide"><h4>400-152-6858</h4></div>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i><img src="../assets/images/slidewx.png"></i>
                    <p>关注微信</p>
                    <div class="mslide"><img src="../assets/images/ewm.png"></div>
                </a>
            </li>
        </ul>
        <!-- <div ref="goTop" @click="onGoTop"></div> -->
        <div ref="goTop" @click="onGoTop" id="goTop"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    onGoTop(){

        // this.$refs.app.animate({scrollTop: 0}, 500);
        // this.$refs.app.scrollIntoView();
        document.getElementById("app").scrollIntoView();

    }
  }
}
</script>

