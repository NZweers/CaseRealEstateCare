<script setup>
import Dashboard from './components/DashBoard.vue'
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'
</script>

<template id="app">
  <v-app>
    <AppBar />
    <v-main>
      <Dashboard />
    </v-main>
    <Footer />
  </v-app>
</template>
