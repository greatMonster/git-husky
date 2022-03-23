import { createRouter,createWebHashHistory} from "vue-router";

// Vue.use(Router)

export const constantRoutes = [

    {
      path: '/test',
      name: 'test',
      component: () => import('../views/test-1')
    },
  
    // {  
    //   path: '/404',
    //   component: () => import('@/views/404'),
    //   hidden: true
    // }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
  })
  
  export default router