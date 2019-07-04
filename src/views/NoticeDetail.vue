<template>
  <div class="partnership">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div id="index-banner">
        <div class="wrap"><img src="../assets/images/noticebanner.jpg" class="banner-bg"></div>
    </div>
    <div id="index-article">
        <div class="wrap clearfix">
            <div class="article-cont fl">
                <h2>{{data.title}}</h2>
                <h3>{{data.subTitle}} </h3>
                <div class="article-text"  v-html="data.content">
                  
                </div>
                <div class="article-btns">
                    <p>{{data.lastUpdated}}  来源：本站  </p>  
                    <router-link :to="{name:'Notice'}"> <a class="article-return"> 返回列表》 </a> </router-link>
                </div>
            </div>
            <div class="article-slide fr">
                <h2>公告</h2>
                <ul>
                    <li v-for="(item,index) in topList" @click="toDetail(item[1])" >
                        <span>{{index+1}}</span>
                        <router-link :to="{name:'NoticeEighth'}"><a href="javascript:void(0);">{{item[0]}}</a></router-link>
                    </li>
              
                </ul>
            </div>
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
      data: {},
      topList:{},
      query:{}
    }
  },
  components: {
      vHeader,
      vSider,
      vFooter
  },
  	created () {
  		this.data.id = this.$route.query.id;
		this.getData();
		this.findTopList();
	},
	methods: {
		getData() {
            webRpc.invoke("articleWebRpc.findById",this.data.id).then(result=>{
            	if(result.retCode==0){
                	this.data = result.data;
				}else{
					alert(result.message);
				}
				
		    }).catch(error =>{});
		},
		findTopList(){
			 webRpc.invoke("articleWebRpc.findTopList",this.query,10).then(result=>{
				this.topList = result.data;
		    }).catch(error =>{});
		
		},
		//去详情页
		toDetail(id){
			this.$router.push('/noticeDetail?id='+id);
		},
	}
}
</script>

