<template>
  <div class="usuario-detalhe">
    <h3>Usuario detalhe</h3>
    <hr>
    <p><strong>Codigo:</strong>{{id}}</p>
    <hr>
<!--     :to="`/usuario/${id}/editar`" -->
    <router-link tag="button" primario :to="{name:'editarUsuario',params:{id}, query:{complete:true, lingua:'pt'}}">
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
props:['id'], 
beforeRouteEnter(to, from, next) {
  console.log("Dentro do componente usuario detalhe")
  const autenticado = true
  autenticado ? next() : next(false)
}
/*   data(){
    return{
      id:this.$route.params.id
    }
  },
 */ 
/*   watch:{
    //verificar mudanças no componente durante os links
    //to = parametro novo
    //from = parametro antigo
    $route(to, from){
      this.id = to.params.id
    }
  }
*/
}
</script>

<style>

</style>