<template>
  <v-app>
    <v-main>
      <Menu/>
      <v-container>
        <v-row class="text-center">
          <v-col>
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Menu from '@/components/Menu.vue'
  export default {
    name: 'App',

    components: {
      Menu
    }
  };
</script>
