<template>
  <div>
    <h1>Galpões cadastrados</h1>
    <div class="warehouses-container" v-for="w in warehouseList" :key="w.id">
      <warehouse
          :name = w.name
          :code = w.code
          :city = w.city
          :area = w.area
          :address = w.address></warehouse>
          <div class="divider"></div>
    </div>
  </div>
</template>

<!---->

<script>
  import Warehouse from '@/components/warehouse.vue'

  export default {
    name: "WarehouseList",

    components: {
      Warehouse
    },

    data() {
      return {
        warehouseList: []
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