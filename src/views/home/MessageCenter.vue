<template>
  <div>
    <div id="slide-main">
        <div class="order">
            <h2>消息中心</h2>
            <div class="notice-top">
                <div class="notice-filter fl">
                    <a class="ac" href="javascript:;">全部</a>
                </div>
                <div class="fr notice-static">状态</div>
                <div class=" notice-static1 fr">发送时间</div>
            </div>
            <ul class="notice-list">
                <li v-if="datalist==null || datalist.length<=0" class="import" style="text-align: center;">暂无数据!</li>                        
                <li class="import"  v-for="(data,index) in datalist" >
                    <p><a>{{data.content}}</a></p>
                    <div class="fr notice-static">{{data.state}}</div>
                	<div class=" notice-static1 fr">{{data.dateCreated}}</div>
                </li>
            </ul>
            
            <v-Page v-if="datalist.length>0" :total.sync="totalElements" :current-page.sync='page.page+1' :display.sync = 'page.size' @pagechange="pagechange"></v-Page>
        </div>
    </div>
  </div>
</template>

<script>
import { webRpc } from '../../rpc/index';
import  vPage from "../../components/vPage.vue";

export default {
    data () {
        return {
            datalist: [],
	        totalElements:0,
	        query:{
	        	toMemberId:''
	        },
	        page:{
           		page:0,
				size:1
			},
        }
    },
    created () {
    	
		var	currentMember = JSON.parse(sessionStorage.getItem('currentMember'));
		this.query.toMemberId = currentMember.id;
        
		this.getData();
    },
 	components: {
      vPage
  	}, 
    methods: {
		//获取分页
		getData() {
            webRpc.invoke("messageWebRpc.findPage",this.query,this.page).then(result=>{
				this.datalist = result.data.content;
				this.totalElements = result.data.totalElements;
		    }).catch(error =>{});
		},
		pagechange(val){
			this.page.page = val-1;
			this.getData();
		},
    }
}

</script>