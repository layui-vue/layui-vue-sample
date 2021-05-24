import { createApp } from 'vue'
import ElementEnhance from 'element-enhance'
import 'element-enhance/lib/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'
import Router from './router'

createApp(App).use(ElementEnhance).use(ElementPlus).use(Router).mount('#app')
