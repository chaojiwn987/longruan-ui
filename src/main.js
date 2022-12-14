import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/public.css';
import '@/assets/font/iconfont.css';
import components from "@/index.js"
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(components)
new Vue({
  render: h => h(App),
}).$mount('#app')
