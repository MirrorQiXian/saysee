import Vue from 'vue'
import App from './App.vue'
import router from './router'
import footerBar from "./components/zl/Footer.vue"
import { Tabbar, TabbarItem } from 'vant';
import 'vant/lib/tabbar/index.css';
import 'vant/lib/tabbar-item/index.css';
import { Uploader } from 'vant';
import { Toast } from 'vant'
import 'vant/lib/uploader/index.css';
//引入和配置mint-ui组件库
//1:完整引入mint-ui组件库
import MintUI from "mint-ui"
//2:单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
//3:将mint-ui对象注册Vue实例中
Vue.use(MintUI)
Vue.use(Uploader);
Vue.use(Toast);
Vue.use(Tabbar).use(TabbarItem);
//4:引入字体图标样式文件
import "./font/iconfont.css"
//main.js脚手架
//5.引入第三方axios
import axios from "axios"
//6.配置访问服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//7.保存session信息
//每次访问服务器将session id发送服务器验证使用
axios.defaults.withCredentials=true
//8.将axios注册Vue实例中
Vue.prototype.axios=axios; //因为有些不支持axios用vue.use，就写最原始的这种

//引入第三方库vuex
Vue.component('footerBar',footerBar);
//9.引入vuex
import Vuex from "vuex"
//10.注册vuex
Vue.use(Vuex)
//以下四行创建Vue实例放main.js最后
new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')
