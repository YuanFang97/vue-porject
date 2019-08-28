import Vue from 'vue'
import App from './App.vue'

// 导入router文件
import router from './router'

Vue.config.productionTip = false


new Vue({
  // 注入实例
  router,
  render: h => h(App),
}).$mount('#app')
