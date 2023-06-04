<template>
	<div class="container">
		
		<div class="about">
		  <h1>This is an about page</h1>
		</div>
		<div>
			<el-row>
			  <el-button>默认按钮</el-button>
			  <el-button type="primary">主要按钮</el-button>
			  <el-button type="success">成功按钮</el-button>
			  <el-button type="info">信息按钮</el-button>
			  <el-button type="warning">警告按钮</el-button>
			  <el-button type="danger">危险按钮</el-button>
			</el-row>
		</div>
		
		<div>
			<el-button :loading="loading" @click="selectCancel">取消</el-button>
		</div>
	</div>
</template>

<script>
// import { list } from '@/api/user'
import { list } from '@/api/user'
// import axios from 'axios'
export default{
	data(){
		return{
			loading:false,
			query:{
				id:1
			}
		}
	},
	created() {
		
		// console.log(process.env.VUE_APP_URL) // 接口地址
		// console.log(process.env.NODE_ENV) // 开发环境
		
		this.list()
		
	},
	methods:{
		list(){
			// axios.get('api/home?ID=123456').then(function (response) {
			// 	console.log(response);
			//     }).catch(function (error) {
			// 	console.log(error);
			// })
			// // console.log(this.query)
			// return false
			
			this.loading = true
			list(this.query).then(res => {
				
			}).catch(() => {
				this.loading = false
			})
		}
	}
}
</script>