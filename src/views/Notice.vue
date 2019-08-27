<template>
  <div class="partnership">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div id="index-banner">
        <div class="wrap"><img src="../assets/images/noticebanner.jpg" class="banner-bg">
        </div>
    </div>
    <div id="index-notice">
        <div class="wrap">
            <div class="notice-head">
                <div class="notice-item" v-for="(data,index) in datalist" @click="toDetail(data.id)">
					<div class="notice-pic fl">
						<img :src="HOST+data.imgUrl">
					</div>
                    <div class="notice-text">
                    	<h3><a>{{data.title}}</a></h3>
                       	<p>{{data.subTitle}}</p>
                            
                 	</div>
                   	<div class="notice-tip">
                    	<span>{{data.lastUpdated}}</span>
                   	</div>
                </div>
            </div>
            
            <ul class="pages index-pages">    
            </ul>    
        </div>
    </div>
    <v-Footer></v-Footer>
  </div>
</template>

<script>
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFooter from "../components/vFooter.vue";
import { webRpc } from '../rpc/index';
import { HOST } from '../config';

export default {
  data () {
    return {
      	HOST:HOST,
        datalist: [],
        totalElements:1,
        query:{},
        page:{
           	page:0,
			size:10
		},
    }
  },
  components: {
      vHeader,
      vSider,
      vFooter
  },
  	created () {
		this.getDataList();
	},
	methods: {
		getDataList() {
            webRpc.invoke("articleWebRpc.findPage",this.query,this.page).then(result=>{
				this.datalist = result.data.content;
		    }).catch(error =>{});
		},
		//去详情页
		toDetail(id){
			this.$router.push('/noticeDetail?id='+id);
		},
	}
  
}
</script>

