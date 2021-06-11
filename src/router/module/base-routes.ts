import BaseLayout from '../../layouts/BaseLayout.vue';


export default [
  {
    path: '/',
    redirect: '/console',
    component: BaseLayout,
    meta: { title: '工作空间', icon: 'el-icon-stopwatch' },
    children: [
      {
        path: '/analysis',
        component: () => import('../../views/Analysis/index.vue'),
        meta: { title: '分析页' },
      },
      {
        path: '/console',
        component: () => import('../../views/Console/index.vue'),
        meta: { title: '控制台' },
      }
    ]
  },{
    path: '/error',
    component: BaseLayout,
    meta: { title: '错误页面', icon: 'el-icon-stopwatch' },
    children: [
      {
        path: '/403',
        component: () => import('../../views/Error/403.vue'),
        meta: { title: '403' },
      },
      {
        path: '/404',
        component: () => import('../../views/Error/404.vue'),
        meta: { title: '404' },
      },
      {
        path: '/500',
        component: () => import('../../views/Error/500.vue'),
        meta: { title: '500' },
      },
    ]
  }
]