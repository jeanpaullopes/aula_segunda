
<template>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">{{ receita.nome }}</div>
        <div class="text-subtitle2">Tempo de Preparo: {{ receita.tempoPreparo }}</div>
        <div class="text-subtitle2">{{ receita.porcoes }} porções</div>
        <div class="text-subtitle2">Dificuldade: {{ receita.dificuldade }}</div>
      </q-card-section>

      <q-card-section>
        Ingredientes:
        <ul>
          <li v-for="ing in receita.ingredientes" v-bind:key="ing">{{ ing.nome }}</li>
        </ul>
        Modo de Preparo:
        <ol>
          <li v-for="m in receita.modo" v-bind:key="m">{{ m }}</li>

        </ol>

      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat @click="deletar">Excluir</q-btn>
      </q-card-actions>
    </q-card>



</template>

<script>
export default {
  name: "ReceitaCard",
  props: {
    receita: Object
  },
  data() {
    return {

    }
  },
  computed:{

  },
  setup(props) {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    deletar() {
      this.$emit('delete', this.receita.id, this.receita.nome)
    }
  },
}
</script>

<style>

</style>
