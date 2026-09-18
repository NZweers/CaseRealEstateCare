<script setup lang="js">
import { ref, onMounted } from 'vue';
import ApiService from '@/api.service';
import { useRoute } from 'vue-router';
import { inspectionsStore } from '@/stores/InspectionsStore';

const route = useRoute();
let state = ref("");
let inspections = ref([]);

onMounted(() => {
    state.value = route.params.state;
    ApiService.getAllDoneInspections(state)
    .then(data => inspections.value = data);
});
</script>


<template>
    <h2 v-if="state === 'done'">Uitgevoerde Inspecties</h2>
    <h2 v-else-if="state === 'open'">Openstaande Inspecties</h2>
    <h2 v-else>Inspecties</h2>
    <v-divider></v-divider>
    <v-list>
        <template v-for="(inspection, index) in inspections" :key="inspection.id">
            <v-list-item>
                <v-list-item-title>Inspectie ({{ inspection.id }}) - {{ inspection.date }}</v-list-item-title>
                <v-list-item-subtitle>Hier iets over de inspectie</v-list-item-subtitle>
            </v-list-item>
            <v-divider></v-divider>
        </template>
    </v-list>
</template>