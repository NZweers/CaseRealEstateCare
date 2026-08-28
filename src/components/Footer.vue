<script>

</script>
<template>
    <v-bottom-navigation class="bottom" grow>
        <v-btn><v-icon>mdi-wrench</v-icon>
        Active task
        </v-btn>
        <v-btn disabled><v-icon>mdi-magnify</v-icon>
        Search
        </v-btn>
        <v-btn disabled><v-icon>mdi-information</v-icon>
        Information
        </v-btn>
    </v-bottom-navigation>
</template>

<style>
.bottom {
    color: white;
    background-color: var(--accent);
}
</style>