import {Optional} from "@angular/core";

export interface ITask {
    id?: number,
    taskName: string,
    completed: boolean
}

export class Task implements ITask {
    constructor(public taskName, public completed, public dueDate, @Optional() public id?) {
        this.taskName = taskName;
        this.id = id;
        this.dueDate = dueDate;
        this.completed = completed;
    }
}
