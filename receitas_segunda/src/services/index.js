
import apiDaSegunda from "./ApiReceitas"
const servicos = {
  getAllReceitas( callback ) {
    apiDaSegunda.get('receitas').then( (resposta)=> {
      if (callback != undefined) {
        callback(resposta.data)
      }
    } ).catch((err)=> alert(err.message))
  },

  saveReceita( receita, callback ) {
    console.log('chamou save')
    apiDaSegunda.post('receitas', receita).then( (resposta)=>{
      if (callback != undefined) {
        callback(resposta.data)
      }
    })
  },
  deleteReceita(id) {
    apiDaSegunda.delete('receitas/'+id)
  }

}

export default servicos
