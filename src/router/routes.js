
// 采用异步按需加载组件模式
const HelloWorld = () => import('@/components/HelloWorld')

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    meta: {keepAlive: true},
    component: HelloWorld
  }
]

export default routes
