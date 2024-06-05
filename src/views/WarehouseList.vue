<template>
  <div>
    <h1>Galpões cadastrados</h1>
    <v-text-field v-model="query" id="search" type="text" placeholder="Buscar Galpão"></v-text-field>
    <br/>
    <v-card>
      <v-card-text>
        <warehouse-table :warehouses="filterWarehouses"></warehouse-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<!---->

<script>
  import Warehouse from '@/components/Warehouse.vue'
  import WarehouseTable from "@/components/WarehouseTable.vue";

  export default {
    name: "WarehouseList",

    components: {
      WarehouseTable,
      Warehouse
    },

    data() {
      return {
        warehouseList: [],
        query: ""
      }
    },

    mounted() {
      this.getWareHouses()
    },

    methods: {
      async getWareHouses() {
        const response = await this.$http.get('http://localhost:3000/api/v1/warehouses');
        const result = await response.json();

        this.warehouseList = result;

        // return this.warehouseList;
      },
    },

    computed:{
      filterWarehouses(){
        return this.warehouseList.filter(warehouse => {
              return warehouse.name.toLowerCase().includes(this.query.toLowerCase())
            }
        )
      }
    }
  }
</script>
<!---->

<style scoped>
  th, tr, td {
    border: black solid 3px;
  }

  .warehouses-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .divider{
    display: flex;
    align-self: center;
    width: 20%;
    height: 1px;
    background: black;
  }
</style>