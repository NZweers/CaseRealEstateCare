<script setup>
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'
import { useRouter } from 'vue-router'
import { loginStore } from './stores/LoginStore.js';

const myLoginStore = loginStore();

myLoginStore.init();
if (!loginStore().isAuthenticated) {
  useRouter().replace({name: "login"})
}
</script>

<template id="app">
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>
