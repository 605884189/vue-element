<template>
	<div class="container">
		<div class="item" v-for="(item,index) in list" :key="index" @click="ck(index)">
			{{item.id}} {{item.name}}
			<inputui v-if="item.has" :item="item" :keyId="index" @check="btn"></inputui>
		</div>
	</div>
</template>

<script>
var timer=null;
import inputui from '@/components/input';
export default {
	components:{
		inputui
	},
	data(){
		return{
			dbClick:false,
			list:[
				{id:1, name:'111', has:false},
				{id:2, name:'222', has:false},
				{id:3, name:'333', has:false}
			],
			// inputText:'',
			// item:""
		}
	},
	created() {
		
	},
	methods:{
		// 组件回调事件
		btn(val){
			console.log(val)
			// console.log(val.id)
			let key = 0;
			this.list.forEach((item,index)=>{
				// console.log(item.id)
				if(item.id == val.id){
					key = index
				}
			})
			// console.log('键：'+key)
			this.list[key] = val
			
		},
		// 点击事件
		ck(index){
			clearTimeout(timer);               // 这里防抖节流  存在之前的定时器 先清除掉

			this.dbClick=!this.dbClick;        //  第一次点击 先取反

			timer=setTimeout(()=>{             // 使用异步函数的操作
			  if(this.dbClick==true){        // 如果在300毫秒内用户没有点击 那么就是 true
				// console.log('用户点击')
			  }else{                         //  否则用户再一次点击了 将其转换成初始的false状态 就是双击了
				console.log('用户双击')
				// console.log(index)
				// this.list.forEach((item,index)=>{
				// 	item.has = false
				// })
				this.list[index].has = !this.list[index].has
				// this.inputText = this.list[index].id
				// this.item = this.list[index]
			  }
			  this.dbClick=false;            // 让其重新归位   保持原来的样式 如果不归位 变成 true的话  后面会出问题
			},300)
			
		}
	}
}
</script>

<style>
.item{
	padding: 20px 20px;
	border-bottom: 1px solid #e1e1e1;
	margin-bottom: 10px;
	text-align: left;
}
</style>