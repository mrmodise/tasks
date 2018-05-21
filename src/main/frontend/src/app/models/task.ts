export interface ITask {
    id: number,
    taskName: string,
    dueDate: string,
    completed: boolean
}

export class Task implements ITask {

    id: number;

    constructor(public taskName, public dueDate, public completed) {
        this.taskName = name;
        this.dueDate = dueDate;
        this.completed = completed;
    }

}
