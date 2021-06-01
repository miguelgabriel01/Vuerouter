<template>
  <div class="usuario">
    <h2>Usuarios</h2>
    <hr>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods:{
    irParaInicio(){
      //pode usar assim
      //this.$router.push('/')

      //ou assim
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style>

</style>