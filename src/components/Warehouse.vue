<template>
  <div class="card">
    <h3><span v-text="name"></span> - <span v-text="code"></span></h3>
    <address>
      <strong>Endereço: <span v-text="address"></span>, <span v-text="city"></span></strong><br/>
    </address>
    <p>Área total: <span v-text="area"></span> m²</p>
  </div>
</template>
<script>
export default {
  name: 'Warehouse',

  props: {
    id: Number,
    name: String,
    code: String,
    city: String,
    area: Number,
    address: String,
    CEP: Number,
    description: String
  }
}

</script>

<style>
  .card{
    background: azure;
    margin: 10px 0 10px 0;
    width: 30%;
    border-radius: 5px;
  }
</style>