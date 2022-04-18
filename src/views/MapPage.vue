<template>
  <div>
    <h1>Page for 5)</h1>
    <v-container>
      <!--get5a-->
      <h3>
        Given a year input from the user, visualize all the city points of all
        countries.
      </h3>
      <v-text-field placeholder="Year" v-model="year"></v-text-field>
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
        are considered as “low income”.
      </h3>
      <v-text-field placeholder="Year" v-model="value"></v-text-field>
      <v-btn color="primary" @click="get5f">Generate Map</v-btn>
    </v-container>
    <v-container>
      <h2>Map</h2>
      <GoogleMap :key="componentkey" :point="points" />
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
    year: "",
    city: "",
    points: "",
    componentkey: 0,
  }),
  methods: {
    get5a() {
      axios.get(`/api/5a/${this.year}`).then((res) => {
        this.points = res.data.map((item) => {
          return {
            position: {
              lat: item.Geom.points[0].x,
              lng: item.Geom.points[0].y,
            },
          };
        });
        this.componentkey += 1;
      });
    },
    get5b() {
      axios.get(`/api/5b`).then((res) => {
        this.points = res.data.map((item) => {
          return {
            position: {
              lat: item.Geom.points[0].x,
              lng: item.Geom.points[0].y,
            },
          };
        });

        this.componentkey += 1;
      });
    },
    get5c() {
      axios.get(`/api/5c`).then((res) => {
        this.points = res.data.map((item) => {
          return {
            position: {
              lat: item.Geom.points[0].x,
              lng: item.Geom.points[0].y,
            },
          };
        });

        this.componentkey += 1;
      });
    },
    get5d() {
      axios.get(`/api/5d`).then((res) => {
        this.points = res.data[0][""].points.map((item) => {
          return { position: { lat: item.x, lng: item.y } };
        });
        this.componentkey += 1;
      });
    },
    get5e() {
      axios.get(`/api/5e`).then((res) => {
        this.points = res.data.map((item) => {
          return {
            position: {
              lat: item.Geom.points[0].x,
              lng: item.Geom.points[0].y,
            },
          };
        });
        this.componentkey += 1;
      });
    },
    get5f() {
      axios.get(`/api/5f/${this.value}`).then((res) => {
        this.points = res.data.map((item) => {
          return {
            position: {
              lat: item.Geom.points[0].x,
              lng: item.Geom.points[0].y,
            },
          };
        });
        this.componentkey += 1;
      });
    },
  },
};
</script>
