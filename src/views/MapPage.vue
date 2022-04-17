<template>
  <div>
    <h1>Page for 5)</h1>
    <v-container>
      <h3>
        Given a year input from the user, visualize all the city points of all countries.
      </h3>
      <v-text-field  placeholder="Year"></v-text-field>
      <v-btn color="primary">Generate Map</v-btn>
      <h3>Visualize the 50 closest city points to Bangkok.</h3>
      <v-btn color="primary">Generate Map</v-btn>
      <h3>
        Visualize all the city points of Thailand’s neighboring countries in
        2018.
      </h3>
      <v-btn color="primary">Generate Map</v-btn>
      <h3>
        Visualize the four points of MBR covering all city points in Thailand in
        2009.
      </h3>
      <v-btn color="primary">Generate Map</v-btn>
      <h3>
        Visualize all city points of countries having the highest no. of city
        points in 2011.
      </h3>
      <v-btn color="primary">Generate Map</v-btn>
      <h3>
        Given a year input from the user, visualize all the city points which
        are considered as “low income” (as specified in column wbinc16_text).
      </h3>
      <v-text-field placeholder="Year" v-model="value"></v-text-field>
      <v-btn color="primary">Generate Map</v-btn>
    </v-container>
    <v-container>
      <h2>Map</h2>
      <h2>Your Input is :{{value}}</h2>
      <GoogleMap :input ="value"/>
    </v-container>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";
export default {
  components: {
    GoogleMap,
  },
  data: () => ({
    value:'' 
  }),

};
</script>
