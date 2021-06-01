<template>
  <div class="usuario-editar">
    <h3>Usuario editar</h3>
    <hr>
    <p><strong>Codigo:</strong>{{id}}</p>
    <p><strong>Codigo:</strong>{{$route.params.id}}</p>
    <small>completo: {{$route.query.complete ? ' sim': ' não'}}</small><br>
    <small>Lingua: {{$route.query.lingua}}</small>
  </div>
</template>

<script>
export default {
props:['id'], 

}
</script>

<style>

</style>