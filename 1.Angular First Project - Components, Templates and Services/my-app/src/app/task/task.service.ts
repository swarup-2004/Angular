import { DUMMY_TASKS } from "./dummy-task"
import { TaskItem } from "./task-item/task-item.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    tasks: TaskItem[] = DUMMY_TASKS;

    constructor() {

        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }

    }
    

    getUserTask(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(task: TaskItem, userId: string) {
        task.userId = userId;
        task.id = "t" + String(Math.random() * 100);
        this.tasks.push(task);
        this.saveTasks();
    }

    removeTask(id: string) {
        // console.log(id);
        // console.log(this.tasks);
        this.tasks = this.tasks.filter((task) => task.id !== id);
        // console.log("after");
        // console.log(this.tasks);
        // console.log("here");
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }




}