<script setup>
    import logo from '../assets/real_estate_logo_white.png'
</script>
<template>
    <v-app-bar class="top_bar">
        <v-img :src="logo" contain></v-img>

    <v-btn icon>
        <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn icon>
        <v-icon>mdi-cog</v-icon>
    </v-btn>

    </v-app-bar>
</template>

<style>
.top_bar {
    color: white;
    background-color: var(--accent-bg);
}
</style>