<template>
  <div class="usuario">
    <h2>Usuarios</h2>
    <hr>
    <p><strong>Codigo:</strong>{{id}}</p>
    <button sucesso @click="irParaInicio">Voltar</button>
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
 */  methods:{
    irParaInicio(){
      //pode usar assim
      //this.$router.push('/')

      //ou assim
      this.$router.push({path:'/'})
    }
  },
/*   watch:{
    //verificar mudanças no componente durante os links
    //to = parametro novo
    //from = parametro antigo
    $route(to, from){
      this.id = to.params.id
    }
  }
 */}
</script>

<style>

</style>