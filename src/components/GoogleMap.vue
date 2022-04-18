<template>
  <div>
    <!--<h3>input : {{ point }}</h3>-->
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

//import axios from "../controller/api.js";

export default {
  name: "GoogleMap",
  props: ["point"],
  data() {
    return {
      markers: [],
      center: {lat: 18.81446096, lng: 98.98084261},
      test: "",

      // points:[lat:this,
      // lng]
    };
  },
  methods: {
    getData() {
    },
  },
  created() {
    this.markers = this.point
    console.log(this.markers)
  },
};
</script>
