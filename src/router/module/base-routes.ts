import BaseLayout from '../../layouts/BaseLayout.vue';


export default [
  {
    path: '/',
    redirect: '/console',
    component: BaseLayout,
    meta: { title: '工作空间' },
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
    meta: { title: '错误页面' },
    children: [
      
    ]
  }
]