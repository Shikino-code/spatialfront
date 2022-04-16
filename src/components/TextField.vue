<template>
     <v-text-field
            v-model="description"
            :rules="rules"
            counter
            maxlength="50"
            label="Colors"
          ></v-text-field>
</template>
<script>
export default {
  name: "TextField",
};
</script>
