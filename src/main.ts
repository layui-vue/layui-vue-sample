import { createApp } from 'vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import '@layui/icons-vue/lib/index.css'

import App from './App.vue'

createApp(App)
.use(Layui)
.mount('#app')
