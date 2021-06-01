import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[{
    path: '/',//informa que o /(home) vai ser o componente Inicio
    component: Inicio,//informamos o componente
  },
  {
    path:'/usuario/:id',
    component: Usuario,
  }]
})