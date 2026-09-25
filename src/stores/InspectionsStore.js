//https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

import { defineStore } from "pinia";
import { Inspection } from "@/models/Inspection";
import axios from "axios";

const url = "/inspections.json";

export const inspectionsStore = defineStore('inspections', {
    state: () => ({
        inspections: [],
        inspection: {}
    }),
    getters: {
        getNumberOpenInspections(){
            return 2;
        },
        getNumberDoneInspections(){
            return 3;
        }
    },
    actions: {
        loadAllInspections: async (state) => {
            // console.log("State: "+state);

            try {
                const response = await axios.get(url);
                const data = await response.data.inspections;
                inspectionsStore().inspections = data
                    .filter(inspection => inspection.state === state)
                    // .sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
                    .sort((a, b) => {
                        if (a.date > b.date) {
                            return 1;
                        } else if (b.date > a.date) {
                            return -1;
                        } else {
                            return 0;
                        }
                    })
                    .map(inspection => new Inspection(inspection));
            } catch (error) {
                console.log('Looks like there was a problem: \n', error);
                inspectionsStore().inspections = [];
            }
        },
        loadInspection: async (id) => {
            // console.log("id: "+ id);
            try {
                const response = await axios.get(url);
                const data = await response.data.inspections;

                const inspection = data
                    .filter(inspection => inspection.id === id)
                    .map(inspection => new Inspection(inspection))
                    .shift();
                // console.log("inspection: "+ inspection);
                inspectionsStore().inspection = inspection;
            } catch (error) {
                console.log('Looks like there was a problem: \n', error);
                inspectionsStore().inspection = {};
            }
        }
    }
});