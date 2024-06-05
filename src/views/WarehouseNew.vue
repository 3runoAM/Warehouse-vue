<template>
  <div>
    <h1>Cadastro de Galpões</h1>
    <div class="form-container">

      <div v-text="message"></div>

      <form v-on:submit.prevent>
        <div class="form">
          <label for="name">Nome: </label>
          <input v-model="form.name" id="name" type="text" placeholder="Nome do galpão">
        </div>
        <br/>

        <div class="form">
          <label for="code">Código: </label>
          <input v-model="form.code" id="code" type="text" placeholder="Código do galpão">
        </div>
        <br/>

        <div class="form">
          <label for="city">Cidade: </label>
          <input v-model="form.city" id="city" type="text" placeholder="Cidade">
        </div>
        <br/>

        <div class="form">
          <label for="area">Área (m²): </label>
          <input v-model="form.area" id="area" type="number" placeholder="Área do galpão">
        </div>
        <br/>

        <div class="form">
          <label for="address">Endereço: </label>
          <input v-model="form.address" id="address" type="text" placeholder="Rua, número ou lote">
        </div>
        <br/>

        <div class="form">
          <label for="zip">CEP: </label>
          <input v-model="form.zip" id="zip" type="text" placeholder="CEP">
        </div>
        <br/>

        <div class="form">
          <label for="description">Descrição: </label>
          <textarea v-model="form.description" cols="30" rows="5" id="description" placeholder="Descrição"></textarea>
        </div>
        <br/>

        <div class="form">
          <button v-on:click="postWarehouse()">Cadastrar</button>
        </div>
        <br/>
      </form>
    </div>
  </div>
</template>

<!---->

<script>
  export default {
    name: "WarehouseNew",

    data(){
      return {
        message: "",
        form: {
          name: null,
          code: null,
          city: null,
          area: null,
          address: null,
          zip: null
        }
      }
    },

    methods:{
        async postWarehouse() {
          try{
            await this.$http.post('http://localhost:3000/api/v1/warehouses', {
              name: this.form.name,
              code: this.form.code,
              city: this.form.city,
              area: this.form.area,
              address: this.form.address,
              CEP: this.form.zip,
              description: this.form.description
            })
            this.message = "Galpão cadastrado com sucesso"
          } catch(err){
            console.log(err)
            this.message = "Erro ao criar galpão"
          }
        }

    }
  }
</script>


<style>

</style>
