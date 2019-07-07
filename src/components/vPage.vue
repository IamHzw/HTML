<template>
	<nav>
    	<ul class="pages">
      		<li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"> « </a></li>
      		<li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li>
      		<li v-for="p in grouplist" >
      			<a :class="{'ac': current == p.val}" href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a>
      		</li>
      		<li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li>
      		<li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"> »</a></li>
    	</ul>
  	</nav>
</template>
 
<script>
	export default{
    	data(){
      		return {
        		current: this.currentPage
      		}
    	},
    	props: {
      		total: {// 数据总条数
        		type: Number,
        		default: 0
      		},
      		display: {// 每页显示条数
        		type: Number,
        		default: 10
      		},
      		currentPage: {// 当前页码
        		type: Number,
        		default: 1
      		},
      		pagegroup: {// 分页条数
        		type: Number,
        		default: 5,
        		coerce: function (v) {
          			v = v > 0 ? v : 5;
          			return v % 2 === 1 ? v : v + 1;
        		}
      		}
    	},
    	computed: {
      		page: function () { // 总页数
        		return Math.ceil(this.total / this.display);
      		},
      		grouplist: function () { // 获取分页页码
        		var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        		if (len <= this.pagegroup) {
          			while (len--) {
            			temp.push({text: this.page - len, val: this.page - len});
          			};
          			return temp;
        		}
        		while (len--) {
          			temp.push(this.page - len);
        		};
        		var idx = temp.indexOf(center);
        		(idx < count) && ( center = center + count - idx);
        		(this.current > this.page - count) && ( center = this.page - count);
        		temp = temp.splice(center - count - 1, this.pagegroup);
        		do {
          			var t = temp.shift();
          			list.push({
            			text: t,
            			val: t
          			});
        		} while (temp.length);
        		if (this.page > this.pagegroup) {
          			(this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          			(this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        		}
        		return list;
      		}
    	},
    	methods: {
      		setCurrent: function (idx) {
        		if (this.current != idx && idx > 0 && idx < this.page + 1) {
          			this.current = idx;
          			this.$emit('pagechange', this.current);
        		}
      		}
    	},
    	
		watch: {
    		currentPage: {
      			immediate: true,
      			handler(val) {
        			this.currentPage = val;
        			this.current = val;
      			}
    		},

   		}
    	
  }
</script>
 
<style >
.pages{font-size: 0;text-align: center;}
.pages li{display: inline-block;margin: 0 5px;}
.pages li a{display: block;padding: 0 17px;font-size: 14px;line-height: 37px;border: 1px solid #e6e6e6;color: #666666;transition: all .3s;background: #fff;}
.pages li a.ac,.pages li a:hover{color: #fff;background: #ed4d01;border-color: #ed4d01;}
 
</style>