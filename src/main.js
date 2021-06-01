import './style.css'//importamos o css
import Vue from 'vue'//importamos o vue
import App from './App.vue'//importamos o componente App
import router from './router'//importamos o arquivo router

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
