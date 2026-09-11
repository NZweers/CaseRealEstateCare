import {Inspection} from "../src/models/Inspection.js";

const baseUrl = "http://localhost:3000/";

const ApiService = {

    getAllDoneInspections: async () => {
        const url = baseUrl+'inspections';
        //console.log(url);
        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            const data = await response.json();
            return data
            .filter(inspection => inspection.state === 'done')
            .map(inspection => new Inspection(inspection));
        } catch (error){
            return console.log('Looks like there was a problem: \n', error);
        }
        
    }
}

export default ApiService;