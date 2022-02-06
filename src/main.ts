import { createApp } from 'vue'

// 全局引入
import './style/index.less';
// import Layui from '@layui/layui-vue'

// 按需引入
import { LayTable, LayButton } from '@layui/layui-vue'

// 图标样式
import '@layui/icons-vue/lib/index.css'

import App from './App.vue'

const app = createApp(App)

// 按需引入
app.component("LayTable",LayTable)
app.component("LayButton",LayButton)

// 全局引入 
// app.use(Layui)
app.mount('#app')
