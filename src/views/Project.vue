<template>
  <div class="home">
    <v-Header></v-Header>
    <v-Sider></v-Sider>

    <div class="class-filter">
        <div class="appoint-filter wrap">
            <dl>
                <dd class="clearfix">
                    <a href="javascript:void(0)" @click="changeCategory(category.id)"  :class="{ 'ac': category.id == query.categoryId}"  v-for="category in categoryList">
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
        <ul class="pages index-pages">  
          <li>
            <a class="ac">1</a>
          </li>
          <li>
            <a href="javascript:void(0)">2</a>
          </li> 
          <li>
            <a class="next" href="javascript:void(0)">下一页</a>
          </li> 
        </ul>
    </div>
    <v-Footersimper></v-Footersimper>
  </div>
</template>

<script>
// import $ from "jquery";
import  vHeader  from "../components/vHeader.vue";
import  vSider from "../components/vSider.vue";
import  vFootersimper from "../components/vFooterSimper.vue";
import { webRpc } from '../rpc/index';
import { HOST } from '../config';

export default {
  data () {
    return {
      	HOST:HOST,
        datalist: [],
        totalElements:1,
        query:{
        	categoryId:''
        },
        categoryList:{},
        page:{
           	page:0,
			size:7
		},
    }
  },
  components: {
      vHeader,
      vSider,
      vFootersimper
  }, 
	created () {
		this.findByParentCode();
	},
	methods: {
		//获取分类
    	findByParentCode(){
      		webRpc.invoke("categoryWebRpc.findByParentCode","product").then(result=>{
		    	if(result.retCode==0){
					console.log(result);
					this.categoryList = result.data;
					this.query.categoryId = this.categoryList[0].id;
					console.log(this.query.categoryId );
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
	}
};
</script>

<style scoped>
  
</style>
