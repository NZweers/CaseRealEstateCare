<script setup>
import logo from '../assets/real_estate_logo_white.png'
</script>
<template>
    <v-app-bar class="top_bar">
        <template v-slot:prepend>
            <router-link to="/">
                <v-img :src="logo" contain class="logo"></v-img>
            </router-link>
        </template>
        <template v-slot:append>
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-cog</v-icon>
            </v-btn>
        </template>
    </v-app-bar>
</template>

<style>
.top_bar {
    color: white;
    background-color: var(--accent-bg);
}

.logo {
    width: 160px;
    height: 64px;
    display: block;
}
</style>