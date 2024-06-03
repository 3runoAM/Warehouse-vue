import Vue from 'vue'
import VueRouter from 'vue-router'
import WarehouseList from '../views/WarehouseList.vue'
import WarehouseNew from '../views/WarehouseNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/warehouses',
    name: 'warehouses',
    component: WarehouseList
  },
  {
    path: '/warehouses/new',
    name: 'NewWarehouse',
    component: WarehouseNew
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router