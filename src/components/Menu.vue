<template>
  <nav>
    <router-link to="/warehouses">Listar Galpões</router-link> |
    <router-link to="/warehouses/new">Cadastrar Galpões</router-link>
  </nav>
</template>


<script>
  export default  {
    name: 'Menu'
  }
</script>


<style>
  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>