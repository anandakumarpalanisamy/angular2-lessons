export class Todo {
    
    name: string;
    status: string;
    date: string;

    constructor(obj){
        this.name = obj && obj.name;
        this.date = obj && obj.date || null;
        this.status = obj && obj.status || null;
    }
}
