import {Optional} from "@angular/core";

export interface ITask {
    id?: number,
    taskName: string,
    dueDate: string,
    completed: boolean
}

export class Task implements ITask {
    dueDate: string;

    constructor(public taskName, public completed, @Optional() public id?) {
        this.taskName = taskName;
        this.id = id;
        this.completed = completed;
    }
}
