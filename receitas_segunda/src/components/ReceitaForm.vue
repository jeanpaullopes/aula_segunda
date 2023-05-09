
<template>
  <div>
    nome:
    <input type="text" v-model="objReceita.nome"/><br/>
    tempo Preparo:
    <input type="text" v-model="objReceita.tempoPreparo"/><br/>
    porções:
    <input type="num" v-model="objReceita.porcoes"/><br/>
    {{ objReceita }}

</div>
</template>

<script>
export default {

  props: {
    receita: Object
  },
  data() {
    return {
      objReceita: Object
    }
  },
  created() {
    console.log(this.receita)
    this.objReceita = this.receita
  },

}
</script>

<style>

</style>
