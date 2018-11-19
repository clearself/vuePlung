// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import store from './store/'
//自定义组件库
import FLYmodules from './components/modules/index.js'
Vue.use(FLYmodules)
//自定义全局方法库
import PublicFun from './assets/js/exit_fun.js'
Vue.use(PublicFun)
//自定义过滤器
import filters from './assets/js/filters.js'
//过滤器统一处理加载
Object.keys(filters).forEach(key => {  
  Vue.filter(key, filters[key]);
}) 
//指令统一处理加载
import directives from './assets/js/directives.js'
Object.keys(directives).forEach(key => {  
  Vue.directive(key, {
  	bind:directives[key].bind,
	  inserted:directives[key].inserted,
	  update:directives[key].update,
	  componentUpdated:directives[key].componentUpdated,
	  unbind:directives[key].unbind,
  });
}) 

Vue.component('my-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // this allows using the `value` prop for a different purpose
    value: String,
    // use `checked` as the prop which take the place of `value`
    checked: {
      type: Number,
      default: 0
    }
  },
  // ...
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
