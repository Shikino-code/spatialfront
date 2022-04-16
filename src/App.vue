<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Spatial Project</h1>
      </div>

      <v-spacer></v-spacer>
      <v-btn flat text color="white" to="homepage"
        ><span>Assignment 4</span></v-btn
      >
      <v-btn flat text color="white" to="map"><span>Assignment 5</span></v-btn>
    </v-app-bar>

    <v-main>
      <v-container grid-list-xs>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
