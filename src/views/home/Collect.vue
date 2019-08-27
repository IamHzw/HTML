<template>
  <div>
    <div id="slide-main">
        <div class="order appoint">
            <h2>我的收藏</h2>
            <div class="collection-wrap clearfix" style="min-height: 500px">
				<div class="collection-item"  v-for="(data,index) in datalist">
                    <div class="collection-pic">
                    	<a><img :src="HOST+data.imagesArr[0]"></a>
                    </div>
                    <p>{{data.title}}</p>
                    <a class="collection-btn" @click="unCollect(data.productId)"></a>
                </div>
                
                <div v-if="datalist==null || datalist.length<=0"  class="order-item" align="center" style="height: 60px;line-height: 60px">您还未收藏任何项目哦!</div>     
			</div>
			
			<v-Page v-if="datalist.length>0" :total.sync="totalElements" :current-page.sync='page.page+1' :display.sync = 'page.size' @pagechange="pagechange"></v-Page>                                 
        </div>
    </div>
  </div>
</template>


<script>
import { webRpc } from '../../rpc/index';
import  vPage from "../../components/vPage.vue";
import { HOST } from '../../config';

export default {
    data () {
        return {
        	HOST:HOST,
            datalist: [],
	        totalElements:0,
	        currentMember:{},
	        query:{
	        	memberId:''
	        },
	        page:{
           		page:0,
				size:10
			},
        }
    },
    created () {
    	
		this.currentMember = JSON.parse(sessionStorage.getItem('currentMember'));
		this.query.memberId = this.currentMember.id;
        
		this.getData();
    },
 	components: {
    	vPage
  	}, 
    methods: {
		//获取分页
		getData() {
            webRpc.invoke("collectWebRpc.findPage",this.query,this.page).then(result=>{
				this.datalist = result.data.content;
				this.totalElements = result.data.totalElements;
		    }).catch(error =>{});
		},
		pagechange(val){
			this.page.page = val-1;
			this.getData();
		},
		unCollect(id){
			webRpc.invoke("collectWebRpc.delete",id,this.currentMember.id).then(result=>{
				if(result.retCode==0){
					layer.msg("成功取消收藏");
	               	this.getData();
				}else{
					alert(result.message);
				}
					
			}).catch(error =>{});
			    
		}
    }
}

</script>