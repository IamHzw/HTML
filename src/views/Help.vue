<template>
  <div class="help">
    <v-Header></v-Header>
    <div id="help">
        <div class="help-slide">
          <iframe src="index.php-m=&amp;c=HelpCenter&amp;a=help_left.html"  frameborder="no" id="menu-frame" name="menu" width="100%" height="99%"></iframe>
        </div>
        <div class="help-cont">
          <iframe src="index.php-m=&amp;c=HelpCenter&amp;a=help_right.html" id="drag-frame" name="drag-frame" frameborder="no" width="100%" height="99%"></iframe>
        </div>
    </div>
  </div>
</template>

<script>
import  vHeader  from "../components/vHeader.vue";
export default {
  data () {
    return {
      
    }
  },
  components: {
    vHeader
  }
}
</script>

