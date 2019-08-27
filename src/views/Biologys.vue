<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>
    <div class="class-wrap" style="min-height: 520px;">
        <div class="list_box">
            <ul class="list_hot">
                <li v-for="(data,index) in datalist" @click="toDetail(data.id)">
					<div class="inner">
						<div  style="cursor:pointer;" :title="data.title">
							<img :src="HOST+data.imagesArr[0]" style="width:180px;height:180px;;">
                        	
                            <div class="hotitle" :title="data.title">{{data.title}}</div>
                           
                        </div>
                    </div>
                </li>
          	</ul>
          	
          	 </div>
     
    </div>
    <div style="margin-bottom:20px;">
    	<v-Page :total.sync="totalElements" :current-page.sync='page.page+1' :display.sync = 'page.size' @pagechange="pagechange"></v-Page>
   	</div>
    <v-footersimper></v-footersimper>
  </div>
</template>

<script>
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import  vPage from "../components/vPage.vue";
import { webRpc } from '../rpc/index';
import { HOST } from '../config';


export default {
  data () {
    return {
      	HOST:HOST,
        datalist: [],
        totalElements:0,
        query:{ 
        	categoryCode:'wnjg',
        	saleable:1
        },
        page:{
           	page:0,
			size:10
		},
    }
  },
  components: {
      vHeader,
      vSider,
      vFootersimper,
      vPage
  },
  created () {
		this.getData();
	},
	methods: {
      	//获取分页
		getData() {
            webRpc.invoke("productWebRpc.findPage",this.query,this.page).then(result=>{
				this.datalist = result.data.content;
				this.totalElements = result.data.totalElements;
		    }).catch(error =>{});
		},
		//去详情页
		toDetail(id){
			this.$router.push('/product?id='+id);
		},
		pagechange(val){
			this.page.page = val-1;
			this.getData();
		},
	}
}
</script>

<style scoped>
.list_hot{
    margin-top: 30px;
}
.list_hot li{
    width: 250px;
    height: 280px;
    float: left;
    margin-bottom: 20px;
}

.list_hot li .inner { 
    background: #fff; 
    width: 234px; 
    height: 240px; 
    padding: 15px 0px;
    text-align:center; 
    border: 1px solid #eee;
}
.hotitle{   
    color:#333;
    font-size:16px;
    text-align:center;
    font-weight:bold;
    overflow:hidden;
    width:216px;
    padding:12px 8px 0px 8px;
    height:32px;
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis; 
}
.list_hot .inner a:hover{
    text-decoration:none;color:#fff;
}
.hotprice{
    color:#f60;
    font-size:16px;
    padding-top:10px;
    text-align:center;
}
.hotprice a:hover{
    text-decoration:none;
    color:#fff;
}
.btnbook {
    margin:0 auto;
    background: #2ebf7b;
    display: block;
    line-height: 36px;
    width: 110px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
}
</style>


