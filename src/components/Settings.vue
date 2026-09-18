<script setup lang="js">
import { ref } from 'vue';

const fontSize = ref(1);
</script>

<template>

  <h2>Select mode:</h2><v-divider></v-divider>
  <v-container>
    <v-switch label="Dark modus" inset true-icon="mdi-check" false-icon="mdi-close"></v-switch>
    <v-slider label="Font size" :max="2" :ticks="{
      0: 'Small',
      1: 'Normal',
      2: 'Big',
    }" show-ticks="always" step="1" tick-size="3" v-model="fontSize"></v-slider>
  </v-container>
</template>