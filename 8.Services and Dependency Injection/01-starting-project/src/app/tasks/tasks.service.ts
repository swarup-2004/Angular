import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TasksService {


  private tasks = signal<Task[]>([]);

  addTask(taksData: {title: string, description: string}) {
    const newTask: Task = {
      ...taksData,
      id: Math.random().toString(),
      status: 'OPEN'
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  get tasksList() {
    return this.tasks.asReadonly();
  }

  constructor() { }
}
