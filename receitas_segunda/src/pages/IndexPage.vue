<template>
  <q-page class="flex">
    <button @click="novaReceita">+</button>
    <button @click="editReceita">ed</button>

    <ReceitaCard :receita="rec" v-for="rec in receitas" v-bind:key="rec.id"
        @delete="onDelete"/>
    <ReceitaForm :receita="this.r"/>


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import servicos from '../services'
import ReceitaCard from '../components/ReceitaCard.vue';
import ReceitaForm from '../components/ReceitaForm.vue';
export default defineComponent({
  components: { ReceitaCard, ReceitaForm },
  name: 'IndexPage',
  data() {
    return {
      receitas: Array,
      r: Object,
      confirm: false
    }
  },
  created() {
    servicos.getAllReceitas( (dados)=>{this.receitas = dados; } )

  },

  methods: {
    editReceita() {
      console.log(this.r)
      this.r = this.receitas[0]
      console.log(this.r)
    },
    onDelete(id, nome) {
      if (confirm('confirma a exclusão da receita '+nome+"?")) {
        servicos.deleteReceita(id)
        this.receitas = this.receitas.filter((rec) => rec.id != id )
      }
    },
    novaReceita() {
      let r = {
      "tempoPreparo": "35 min",
      "porcoes": 5,
      "dificuldade": 3,
      "nome": "Arroz Carreteiro",
      "ingredientes": [
        {
          "nome": "Ovo"
        },
        {
          "nome": "Carne"
        },
        {
          "nome": "Arroz"
        },
        {
          "nome": "Sal e temperos"
        }
      ],
      "modo": [
        "Frite a carne temperada e reserve",
        "Refoque a cebola e o alho e o arroz",
        "junte a carne, molho de tomate e água",
        "cozinhe em fogo médio por 25 minutos acrescentando água se necessário"
      ]
    }
    servicos.saveReceita(r, (dado)=>this.receitas.push(dado) )

    }
  }
})
</script>
