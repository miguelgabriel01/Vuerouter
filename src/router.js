import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[{
    path: '/',//informa que o /(home) vai ser o componente Inicio
    component: Inicio,//informamos o componente
  },
  {
    path:'/usuario/',
    component: Usuario,
    props:true,//os parametros serão passados como propiedade
    children:[
     //os filhos do componentes
     {path:'', component: UsuarioLista}, 
     {path:':id', component: UsuarioDetalhe, props:true},
     {path:':id/editar', component:UsuarioEditar, props:true, name:"editarUsuario"} 
    ]
  }]
})