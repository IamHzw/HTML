<template>
	<div>
	    <div id="slide-main" class="setting">
	        <h2>个人设置</h2>
	        <div class="user-msg">
	            <div class="user-pic fl"><a><img src="../../assets/images/head.jpg"></a></div>
	            <div class="user-text">
	                <h3>{{currentMember.mobile}}</h3>
	                <h4></h4>
	                <h5>资料完整度<span class="user-percent"><i style="width: 22%;"></i></span>22%</h5>
	                
	                <router-link :to="{name:'ChangePass'}" >
	                	<a href="javascript:;">修改密码</a>
	              	</router-link>
	            </div>
	        </div>
	        <div class="setting-form">
	            <dl>
	                <dt>单位性质</dt>
	                <dd>
	                	<label><input type="radio" value="1" v-model ="currentMember.type">普通用户</label>
	                    <label><input type="radio" value="2" v-model ="currentMember.type">高校用户</label>
	                    <label><input type="radio" value="3" v-model ="currentMember.type">企业用户</label>
	                </dd>
	            </dl>
	
	            <div>
					<dl>
	                	<dt>手机号码：</dt>
	                    <dd>
	                    	{{currentMember.mobile}}
	                    	
	                    	<!--<router-link :to="{name:'ReplacePhone'}" >
                        		<a hhref="javascript:;">更换认证手机&gt;&gt;</a>
                        	</router-link>
	                    	-->
	                    </dd>
	                </dl>
	                <dl>
	                    <dt>真实姓名：</dt>
	                    <dd>
	                    	<input type="text" v-model ="currentMember.userName"  class="licit" />
	                    	<span class="must">*</span>
	                    </dd>
	                </dl>
	              
	                <dl>
	                    <dt>单位名称：</dt>
	                    <dd>
	                    	<input type="text" v-model ="currentMember.companyName" placeholder="请填写您所在单位" class="licit" />
	                    </dd>
	                </dl>
	                <dl>
	                    <dt>取样地址：</dt>
	                    <dd>
	                    	<input type="text"  v-model ="currentMember.address" placeholder="请精确到实验室门牌号" class="licit" />
	                    </dd>
	                </dl>
	
	                <dl>
	                    <dt>所在院系：</dt>
	                    <dd>
	                    	<input type="text" v-model ="currentMember.school" placeholder="请填写您所在院系" class="licit" />
	                    </dd>
	                </dl>
	
	                <dl>
	                    <dt>QQ：</dt>
	                    <dd>
	                    	<input type="text" v-model ="currentMember.qq" placeholder="请填写您的QQ" class="licit qq" />
	                    </dd>
	                </dl>
	           
	                <dl>
	                    <dt>邮箱：</dt>
	                    <dd>
	                    	<input type="text" v-model ="currentMember.email"  placeholder="请填写您的常用邮箱" class="licit email" />
	                    </dd>
	                </dl>
	                <dl>
	                    <dt>导师姓名：</dt>
	                    <dd>
	                    	<input type="text" v-model ="currentMember.teacher"  class="licit" />
	                    </dd>
	                </dl>
	                <dl>
	                    <dt></dt>
	                    <dd>
	                        <button class="ticket-btn btn sub" type="button" @click="save()">提 交</button>
	                    </dd>
	                </dl>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
import $ from 'jquery';
import { webRpc } from '../../rpc/index';

export default {
    data () {
        return {
            currentMember:{},
        }
    },
    created () {
		if(sessionStorage.currentMember!=null){
			this.currentMember = JSON.parse(sessionStorage.getItem('currentMember'))
        }
    },
    methods: {
		//普通登陆
		save(){
			webRpc.invoke("memberWebRpc.saveOrUpdate",this.currentMember).then(result=>{
				if(result.retCode==0){
                	this.getCurrentMemeber();
				}else{
					layer.msg(result.message);
				}
		    }).catch(error =>{});
		},
  		//获取当前用户
		getCurrentMemeber(){
			webRpc.invokeCross("memberWebRpc.currentMember").then(result=>{
            	layer.msg("修改成功");
               	sessionStorage.setItem('currentMember',JSON.stringify(result.data));
               	this.currentMember = result.data;
               
		   	}).catch(error =>{});
		}
    }
}

</script>
