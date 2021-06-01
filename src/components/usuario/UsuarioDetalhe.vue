<template>
  <div class="usuario-detalhe">
    <h3>Usuario detalhe</h3>
    <hr>
    <p><strong>Codigo:</strong>{{id}}</p>

  </div>
</template>

<script>
export default {
props:['id'], 
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