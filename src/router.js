import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router)

const router =  new Router({
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
     {path:':id', component: UsuarioDetalhe, props:true, beforeEnter:(to,from,next) => {
       console.log('antes da rota --> usuario detalhe')
       next()
     }},
     {path:':id/editar', component:UsuarioEditar, props:true, name:"editarUsuario"} 
    ]
  },
  {
    path:'*',//qualquer rota desconhecida
    redirect:'/'//vai ser redirecionada para a home
  }]
})

router.beforeEach((to,from,next) => {
  console.log("NAtes das rotas --> global");
/*   //exemplo de como fazer um usuario n sair de detrminada pag
  if(to.path !== '/usuario'){
    next('/usuario')
  }else{
    next()
  }
 */
next()
})

export default router