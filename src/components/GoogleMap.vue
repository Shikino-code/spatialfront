<template>
  <div>
    <!--Google Map API-->
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
export default {
  name: "GoogleMap",
  props: ["point"],
  data() {
    return {
      markers: [],
      center: { lat: 13.74622118, lng: 100.5544779 },
    };
  },
  methods: {
    getData() {},
  },
  //import point from mapage
  created() {
    this.markers = this.point;
  },
};
</script>
