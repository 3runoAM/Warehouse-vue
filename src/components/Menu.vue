<template>
  <nav>
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar flat color="grey lighten-4">
            <v-toolbar-title>Galpões & Estoque!   </v-toolbar-title>
            <v-spacer></v-spacer>
            <nav>
              <v-btn to="/">Home</v-btn>
              <v-btn to="/warehouses">Listar Galpões</v-btn>
              <v-btn to="/warehouses/new">Cadastrar Galpões</v-btn>
            </nav>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
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