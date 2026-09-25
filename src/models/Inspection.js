export class Inspection {
    constructor(inspectionObject) {
        this.id = inspectionObject.id;
        this.date = inspectionObject.date;
        this.state - inspectionObject.state;
        this.location = inspectionObject.location;
        this.installation_type = inspectionObject.installation_type;
        this.reported_failures = inspectionObject.reported_failures;
        this.test_procedure = inspectionObject.test_procedure;
        this.accepted = inspectionObject.accepted;
        this.description = inspectionObject.description;
    }
}