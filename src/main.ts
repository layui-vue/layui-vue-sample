import { createApp } from 'vue'

// 按需引入
import { LayButton, LayTable } from '@layui/layui-vue'

// 全局引入 
// import Layui from '@layui/layui-vue'

// 样式按需
import '@layui/layui-vue/es/button/index.css'
import '@layui/layui-vue/es/table/index.css'

// 引入样式
import '@layui/layui-vue/lib/index.css'

// 图标样式
import '@layui/icons-vue/lib/index.css'

import App from './App.vue'

const app = createApp(App)

// 按需引入
app.component("LayButton",LayButton)
app.component("LayTable",LayTable)

// 全局引入 
// app.use(Layui)
app.mount('#app')
