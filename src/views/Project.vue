<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>

    <div class="class-filter">
        <div class="appoint-filter wrap">
            <dl>
                <dd class="clearfix">
                    <a href="javascript:void(0)"  v-for="category in categoryList" v-if="category.code !='wnjg'" @click="changeCategory(category.id)"  :class="{ 'ac': category.id == query.categoryId}" >
                    	{{category.name}}
                    </a>
                </dd>
            </dl>
           
        </div>
    </div>
    <div id="index-class">
        <div class="class-wrap">
            <div class="class-slide" v-for="(data,index) in datalist" @click="toDetail(data.id)">
                <div class="class-pic">
                    <a href="javascript:void(0)">
                      <img :src="HOST+data.imagesArr[0]">   
                    </a>
                </div>
                <h2>
                  <a href="javascript:void(0)" style="display: inline-block;line-height: 22px;">{{data.title}}</a>
                </h2>
                <h3 style="font-size: 12px !important;padding-top: 6px">{{data.subTitle}}</h3>
            </div>
        </div>
        
         <div class="class-not" v-if="totalElements<=0">
                	暂无数据
        </div>
        <v-Page v-if="totalElements>0" :total.sync="totalElements" :current-page.sync='page.page+1' :display.sync = 'page.size' @pagechange="pagechange"></v-Page>
    </div>
    <v-Footersimper></v-Footersimper>
  </div>
</template>

<script>
// import $ from "jquery";
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
        	categoryId:'',
        	saleable:1,
        	disabled:false
        },
        categoryList:{},
        page:{
          page:0,
          size:8
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
	
		this.findByParentCode();
	},
	methods: {
		//获取分类
    	findByParentCode(){
      		webRpc.invoke("categoryWebRpc.findByParentCode","product").then(result=>{
		    	if(result.retCode==0){
					this.categoryList = result.data;
					
					var qtype = this.$route.query.type;
					if(qtype){
						this.categoryList.forEach((c)=>{
						 	if(c.code==qtype){
						 		this.query.categoryId = c.id;
						 	}
						});	
					}else{
						this.query.categoryId = this.categoryList[0].id;
					}
				}else{
					alert("类型加载失败:"+result.message);
				}
				this.getData();		
		    }).catch(error =>{});
      	},
      	//获取分页
		getData() {
          webRpc.invoke("productWebRpc.findPage",this.query,this.page).then(result=>{
            this.datalist = result.data.content;
            this.totalElements = result.data.totalElements;
          }).catch(error =>{});
		},
		//切换类型
		changeCategory(id){
			this.query.categoryId = id;
			//初始页码，重加数据
			this.page.page = 0;
			this.getData();
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
};
</script>

<style scoped>
    .class-not{
  	    clear: both;
    text-align: center;
    width: 1250px;
    margin: 30px;
  }
</style>
