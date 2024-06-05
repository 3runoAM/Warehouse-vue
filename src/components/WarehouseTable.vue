<template>
  <v-simple-table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Endereço</th>
        <th>Cidade</th>
        <th>área</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="w in warehouses" :key="w.id">
        <td v-text="w.code"></td>
        <td v-text="w.name"></td>
        <td v-text="w.address"></td>
        <td v-text="w.city"></td>
        <td v-text="w.area"></td>
      </tr>
    </tbody>

  </v-simple-table>
</template>


<script>
export default {
  name: 'WarehouseTable',

  props:{
    warehouses: []
  }
}
</script>

<style></style>