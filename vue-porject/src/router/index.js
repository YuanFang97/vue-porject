import Vue from 'vue'
// 引入vue-router模块
import VueRouter from 'vue-router'
// 引入各个组件
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import Classify from '../components/Classify.vue'
import Special from '../components/Special.vue'
import My from '../components/My.vue'
import HomeClass from '../components/Classifys.vue'
// 安装（使用）路由
Vue.use(VueRouter);
// 实例化router并配置参数
let router = new VueRouter({
    // mode:'history' -> /xxx ,// 默认hash -> /#/xxx  
    routes: [{
            // 当url路径为/home时渲染home组件到<router-view>上
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        {
            name: 'classify',
            path: '/classify',
            component: Classify
        },
        {
            name: 'special',
            path: '/special',
            component: Special
        },
        {
            name: 'my',
            path: '/my',
            component: My
        },
        {
            name: 'homeclass',
            path: '/homeclass/:id',
            component: HomeClass
        },
        {
            // 当浏览器路径为/时，重定向到/home
            path: '/',
            redirect: {
                name: 'home'
            }
        }
    ]
})

export default router;