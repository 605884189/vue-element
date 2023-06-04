const { defineConfig } = require('@vue/cli-service')

const path = require('path')
const defaultSettings = require('./src/settings.js')

const name = defaultSettings.title || 'Admin' // 标题

const port = process.env.port || process.env.npm_config_port || 8081 // 开发端口

module.exports = defineConfig({
	// transpileDependencies: true,
	devServer:{
		proxy:{
		  '/api':{//表示拦截以/api开头的请求路径
			target:'http://localhost:10006', //（这里填你项目真实的后端地址）
			changOrigin: true,//是否开启跨域
			pathRewrite:{
			  '^/api':'' //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
			}
		  }
		}
	},
	transpileDependencies: true,
	lintOnSave: false
})
