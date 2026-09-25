<script setup lang="js">
import { ref, onBeforeMount, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { inspectionsStore } from '@/stores/InspectionsStore';

const route = useRoute();
const router = useRouter();
const hasInspection = ref(false);
let id = ref("");
let myInspectionStore;
let inspection;

onBeforeMount(async () => {
    id.value = route.params.id;
    myInspectionStore = inspectionsStore();
    await myInspectionStore.loadInspection(id.value);
    inspection = myInspectionStore.inspection;
    hasInspection.value = !!inspection;
});

function save() {
    console.log("Save inspection in the real world, for now ignore");
    console.log(JSON.stringify(inspection, null, 2));
    cancel();
}

function cancel() {
    router.go(-1);
}
</script>

<template>
    <span v-if="!hasInspection">
        Inspection with id {{ id }} is not found!
    </span>
    <v-card v-if="hasInspection">
        <v-card-title>Inspection - {{ inspection.id }} - {{ inspection.state }}</v-card-title>
        <v-card-text>
            <v-form ref="v-form " @submit.prevent="save()">
                <v-date-input v-model="inspection.date" name="date" label="Date" placeholder="Enter a date"
                    required></v-date-input>
                <v-text-field v-model="inspection.location" name="location" label="Location"
                    placeholder="Enter a location" required></v-text-field>
                <v-select v-model="inspection.installation_type" name="installation_type" label="Installation type"
                    placeholder="Enter an installation type" required
                    :items="['Koeling', 'Openhaard', 'Kraan', 'Elektra', 'Deuren', 'Douche']"></v-select>
                <v-textarea v-model="inspection.reported_failures" name="reported_failures" label="Failures"
                    placeholder="Describe the failures" required></v-textarea>
                <v-textarea v-model="inspection.description" name="description" label="Description"
                    placeholder="Describe the failures" required></v-textarea>
                <v-btn type="button" class="mt-4" value="Cancel" @click="cancel">Cancel</v-btn>&nbsp;
                <v-btn type="submit" color="primary" class="mt-4" value="Update">Update</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>