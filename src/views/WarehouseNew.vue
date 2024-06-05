<template>
  <div>
    <h1>Cadastro de Galpões</h1>
    <div class="form-container">

      <v-alert v-if="message != null" type="info">{{message}}</v-alert>

      <v-form v-on:submit.prevent>

        <v-text-field v-model="form.name" type="text" label="Nome"></v-text-field>

        <v-text-field v-model="form.code" type="text" label="Código"></v-text-field>

        <v-text-field v-model="form.city" type="text" label="Cidade"></v-text-field>

        <v-text-field v-model="form.area" type="text" label="Área"></v-text-field>

        <v-text-field v-model="form.address" type="text" label="Rua, número ou lote"></v-text-field>

        <v-text-field v-model="form.zip" type="text" label="CEP"></v-text-field>

        <v-textarea v-model="form.description" type="text" label="Descrição"></v-textarea>

        <v-btn color="primary" v-on:click="postWarehouse()">Cadastrar</v-btn>
      </v-form>
    </div>
  </div>
</template>

<!---->

<script>
  export default {
    name: "WarehouseNew",

    data(){
      return {
        message:null,
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
