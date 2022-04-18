<template>
  <div>
    <h2>Insert Flie</h2>
    <v-btn class="ml-3 align-self-center mb-3" @click="onPickFile">
      INSERT DATA</v-btn
    >
    <input
      type="file"
      @change="onSelectedFile"
      style="display: none"
      ref="fileInput"
      accept=".xlsx"
    />

    <h1>Page for 4)</h1>
    <v-container>
      <!--get4a-->
      <h3>
        List country and city names whose PM 2.5 values are greater than 50 in
        2015.
      </h3>
      <v-btn color="primary" @click="get4a">Get File</v-btn>
      <!--get4b-->
      <h3>
        Calculate the AVG(PM 2.5) by country (show the results in a decreasing
        order).
      </h3>
      <v-btn color="primary" @click="get4b">Get File</v-btn>
      <!--get4c-->
      <h3>show a historical PM 2.5 values by year.</h3>
      <v-text-field label="Country" v-model="country"></v-text-field>
      <v-btn color="primary" @click="get4c">Get File</v-btn>
      <h3>country : {{ country }}</h3>
      <!--get4d-->
      <h3>calculate a total of the affected population (in number).</h3>
      <v-text-field label="Year" v-model="year"></v-text-field>
      <v-text-field label="Color" v-model="color"></v-text-field>
      <v-btn color="primary" @click="get4d">Get File</v-btn>
    </v-container>
  </div>
</template>

<script>
import axios from "../controller/api.js";
export default {
  data: () => ({
    country: "",
    year: "",
    color: "",
  }),
  methods: {
    onSelectedFile(event) {
      if (confirm("Upload File ?")) {
        const files = event.target.files[0];
        let formData = new FormData();
        let blob = new Blob([files], { type: "application/xlsx" });
        formData.set("file", blob);
        // axios
        //   .post("", formData, {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   })
        //   .then((res) => {
        //     alert("upload successed");
        //     // window.open(`${axios.defaults.baseURL}/air-pollution/error.log`)
        //   })
        //   .catch((err) => {
        //     this.$refs.fileInput.remove();
        //     alert("Failed to upload");
        //   });
      }
    },

    // post multiple Lottery image to backend
    // trigger input
    onPickFile() {
      this.$refs.fileInput.click();
    },
    get4a() {
      window.open(`${axios.defaults.baseURL}/api/4a`);
    },
    get4b() {
      window.open(`${axios.defaults.baseURL}/api/4b`);
    },
    get4c() {
      window.open(`${axios.defaults.baseURL}/api/4c/${this.country}`);
    },
    get4d() {
      window.open(
        `${axios.defaults.baseURL}/api/4d/${this.year}/${this.color}`);
    },
  },
};
</script>
