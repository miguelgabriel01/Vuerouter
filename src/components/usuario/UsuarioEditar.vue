<template>
  <div class="usuario-editar">
    <h3>Usuario editar</h3>
    <hr>
    <p><strong>Codigo:</strong>{{id}}</p>
    <p><strong>Codigo:</strong>{{$route.params.id}}</p>
    <small>completo: {{$route.query.complete ? ' sim': ' não'}}</small><br>
    <small>Lingua: {{$route.query.lingua}}</small>
    <hr>
    <button primario @click="confirmou=true">Confirmar</button>
  </div>
</template>

<script>
export default {
props:['id'], 
data(){
  return{
    confirmou:false
  }
},
beforeRouteLeave(to, from, next) {
  if(this.confirmou){
    next()
  }else{
    if(confirm('tem certeza?')){
      next()
    }else{
      nest(false)
    }
  }
}

}
</script>

<style>

</style>