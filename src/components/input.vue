<template>
	<div class="container">
		<div class="item">
			<!-- <input type="text" v-model="text"/> -->
			<el-input v-model="item.name" placeholder="请输入内容"></el-input>
			<el-button type="primary"  @click="save">储存</el-button>
			<el-button type="warning">取消</el-button>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		item:{
			type:[Number,String],
			default:''
		}
	},
	data(){
		return{
			item:this.item
		}
	},
	methods:{
		save(){
			// console.log(this.item)
			// let str = 123;
			let obj = this.item
			this.$emit('check',obj)
		}
	}
}
</script>

<style>

</style>