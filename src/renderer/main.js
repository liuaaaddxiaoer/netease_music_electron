import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// iconfont
import './assets/iconfont.css'

// reset 
import './css/reset.css'

// Http
import Http from './http/ajax'


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
console.log(Http)

// Http
Vue.prototype.$http = Http

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
