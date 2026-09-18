import { defineStore } from "pinia";
import { Inspection } from "@/models/Inspection";
import axios from "axios";
import { ref } from "vue";
import Inspections from "@/components/Inspections.vue";

const url = "/inspections.json";

export const inspectionsStore = defineStore('inspections', {
    state: () => {
        return {
            inspections: ref([])
        }
    },
    actions:{
        getAllInspections: async (state) => {
            console.log("State: "+state);

            try{
                const response = await axios.get(url);
                const data = await response.data.inspections;
                this.inspections = data
                .filter(inspection => inspection.state === state)
                .map(inspection => new Inspection(inspection));
            } catch (error){
                this.inspections = [];
                console.log('Looks like there was a problem: \n', error);
            }
        },
        clearInspections(){
            this.inspections = [];
        }
    },
    methods:{
        
    }
})