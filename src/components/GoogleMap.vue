<template>
  <div>
    <v-btn color="success" @click="addMarker">Add Marker</v-btn>
    <v-btn color="success" @click="addMarker2">Add Marker2</v-btn>
    <v-btn color="success" @click="clearMap">Clear Map</v-btn>
    <v-btn color="success" @click="getData">test</v-btn>
    <h3>input : {{ input }}</h3>
    <h3>test : {{ test }}</h3>
    <GmapMap
      :center="center"
      :zoom="8"
      map-type-id="terrain"
      style="width: 900px; height: 900px; margin: 32px auto"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
const bangkok = { lat: 13.764953, lng: 100.530104 };
const chiangmai = { lat: 18.81446096, lng: 98.98084261 };
const ChonBuri = { lat: 13.2178207, lng: 100.9435778 };
const Ratchaburi = { lat: 13.532555, lng: 99.814873 };
const Loei = { lat: 13.76393629, lng: 100.529078 };

//import axios from "../controller/api.js";

export default {
  name: "GoogleMap",
  props: ["input"],
  data() {
    return {
      markers: [],
      center: bangkok,
      test: "",
    };
  },
  methods: {
    getData() {
    //   axios.get("").then((res) => {
          setTimeout(() => (this.test = "motharfaker"), 2000);
          setTimeout(() => (this.test = ""), 3000);
        //this.test = res.data;
        console.log(this.test);
      //});
    },
    addMarker() {
      this.markers = [];
      this.markers = [
        {
          position: bangkok,
        },
        {
          position: chiangmai,
        },
      ];
      alert("Marker added");
    },
    addMarker2() {
      this.markers = [];
      this.markers = [
        {
          position: ChonBuri,
        },
        {
          position: Ratchaburi,
        },
        {
          position: Loei,
        },
      ];
      alert("Marker added2");
    },
    clearMap() {
      this.markers = [];
    },
  },
  created:{
      getData(){}
  },
};
</script>
