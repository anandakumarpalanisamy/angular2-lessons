export class Todo {

    id: string;
    name: string;
    status: string;
    startDate: string;
    endDate: string;
    priority: string;

    constructor(obj){
        this.id = obj && obj.id;
        this.name = obj && obj.name;
        this.startDate = obj && obj.startDate || null;
        this.endDate = obj && obj.endDate || null;
        this.priority = obj && obj.priority;
        this.status = obj && obj.status || null;
    }
}
