export class Inspection {
    constructor(inspectionObject){
        this.id = inspectionObject.id;
        this.date = inspectionObject.date;
        this.state - inspectionObject.state;
        this.damage = new InspectionDamage(inspectionObject.damage);
        this.maintenance = new InspectionMaintenance(inspectionObject.maintenance);
        this.inspection = new InspectionInspection(inspectionObject.inspection);
        this.modification = new InspectionModification(inspectionObject.modification);
    }
}

export class InspectionDamage{
    constructor(damageObject){
        this.location = damageObject.location;
        this.new_damage = damageObject.new_damage;
        this.damage_type = damageObject.damage_type;
        this.date = damageObject.date;
        this.immediate_action = damageObject.immediate_action;
        this.description = damageObject.description;
    }
}

export class InspectionMaintenance {
    constructor(maintenanceObject){
        this.location = maintenanceObject.location;
        this.maintenance_type = maintenanceObject.maintenance_type;
        this.immediate_action = maintenanceObject.immediate_action;
        this.cost_indication = maintenanceObject.cost_indication;
    }
}

export class InspectionInspection{
    constructor(inspectionObject){
        this.location = inspectionObject.location;
        this.installation_type = inspectionObject.installation_type;
        this.reported_failures = inspectionObject.reported_failures;
        this.test_procedure = inspectionObject.test_procedure;
        this.accepted = inspectionObject.accepted;
        this.description = inspectionObject.description;
    }
}

export class InspectionModification {
    constructor(modificationObject){
        this.location = modificationObject.location;
        this.current_situation = modificationObject.current_situation;
        this.executed_by = modificationObject.current_situation;
        this.description_modification = modificationObject.description_modification;
        this.action = modificationObject.action;
        this.description = modificationObject.description;
    }
}