import { createApp } from 'vue'

// 按需引入
import { LayButton } from '@layui/layui-vue'
// 全局引入 
// import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import '@layui/icons-vue/lib/index.css'

import App from './App.vue'

const app = createApp(App)

// 按需引入
app.component("LayButton",LayButton)

// 全局引入 
// app.use(Layui)
app.mount('#app')
