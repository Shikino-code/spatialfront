<template>
  <div>
    <h1>Page for 5)</h1>
    <v-container>
      <!--get5a-->
      <h3>
        Given a year input from the user, visualize all the city points of all
        countries.
      </h3>
      <v-text-field placeholder="Year"></v-text-field>
      <v-btn color="primary" @click="get5a">Generate Map</v-btn>
      <!--get5b-->
      <h3>Visualize the 50 closest city points to Bangkok.</h3>
      <v-btn color="primary" @click="get5b">Generate Map</v-btn>
      <!--get5c-->
      <h3>
        Visualize all the city points of Thailand’s neighboring countries in
        2018.
      </h3>
      <v-btn color="primary" @click="get5c">Generate Map</v-btn>
      <!--get5d-->
      <h3>
        Visualize the four points of MBR covering all city points in Thailand in
        2009.
      </h3>
      <v-btn color="primary" @click="get5d">Generate Map</v-btn>
      <!--get5e-->
      <h3>
        Visualize all city points of countries having the highest no. of city
        points in 2011.
      </h3>
      <v-btn color="primary" @click="get5e">Generate Map</v-btn>
      <!--get5f-->
      <h3>
        Given a year input from the user, visualize all the city points which
        are considered as “low income” (as specified in column wbinc16_text).
      </h3>
      <v-text-field placeholder="Year" v-model="value"></v-text-field>
      <v-btn color="primary" @click="get5f">Generate Map</v-btn>
    </v-container>
    <v-container>
      <h2>Map</h2>
      <h2>Your Input is :{{ value }}</h2>
      <GoogleMap :input="value" />
    </v-container>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";
import axios from "../controller/api.js";
export default {
  components: {
    GoogleMap,
  },
  data: () => ({
    value: "",
  }),
  methods: {
    get5a() {
      //alert("clicked")
      axios.get(`/api/5a/${this.year}`).then((res) => {
        alert("get5a");
        console.log(res.data);
      });
    },
    get5b() {
      //alert("clicked")
      axios.get(`/api/5a/${this.year}`).then((res) => {
        alert("get5a");
        console.log(res.data);
      });
    },
     get5c() {
      //alert("clicked")
      axios.get(`/api/5a/${this.year}`).then((res) => {
        alert("get5a");
        console.log(res.data);
      });
    },
     get5d() {
      //alert("clicked")
      axios.get(`/api/5a/${this.year}`).then((res) => {
        alert("get5a");
        console.log(res.data);
      });
    },
     get5e() {
      //alert("clicked")
      axios.get(`/api/5a/${this.year}`).then((res) => {
        alert("get5a");
        console.log(res.data);
      });
    },
     get5f() {
      //alert("clicked")
      axios.get(`/api/5a/${this.year}`).then((res) => {
        alert("get5a");
        console.log(res.data);
      });
    },
  },
};
</script>
