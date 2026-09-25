<script setup lang="js">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { inspectionsStore } from '@/stores/InspectionsStore';

const route = useRoute();
let state = ref("");
let myInspectionStore;

onBeforeMount(async () => {
    state.value = route.params.state;
    myInspectionStore = inspectionsStore();
    await myInspectionStore.loadAllInspections(state.value);
});
</script>

<template>
    <h2 v-if="state === 'done'">Uitgevoerde Inspecties</h2>
    <h2 v-else-if="state === 'open'">Openstaande Inspecties</h2>
    <h2 v-else>Inspecties</h2>
    <v-divider></v-divider>
    <v-list>
        <template v-for="(inspection, index) in myInspectionStore.inspections" :key="inspection.id">
            <v-list-item :to="{ name: 'inspection', params: { id: inspection.id } }">
                <v-list-item-title>Inspectie ({{ inspection.id }}) - {{ inspection.date }}</v-list-item-title>
                <v-list-item-subtitle>Hier iets over de inspectie</v-list-item-subtitle>
            </v-list-item>
            <v-divider></v-divider>
        </template>
    </v-list>
</template>