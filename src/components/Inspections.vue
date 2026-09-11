<script setup lang="js">
import { Inspection } from "../models/Inspection";

const props = defineProps({
    inspections: Array,
    state: String
});
</script>


<template>
    <h2 v-if="state === 'done'">Uitgevoerde Inspecties</h2>
    <h2 v-else-if="state === 'open'">Openstaande Inspecties</h2>
    <h2 v-else>Inspecties</h2>
    <v-list>
        <template v-for="(inspection, index) in inspections" :key="inspection.id">
            <v-list-item>
                <v-list-item-title>Inspectie ({{ inspection.id }}) - {{ inspection.date }}</v-list-item-title>
                <v-list-item-subtitle>Hier iets over de inspectie</v-list-item-subtitle>
            </v-list-item>
        </template>
    </v-list>
</template>