import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';
@Injectable({
  providedIn: 'root'
})
export class TasksService {


  private tasks = signal<Task[]>([]);

  private loggingService = inject(LoggingService);

  addTask(taksData: {title: string, description: string}) {
    const newTask: Task = {
      ...taksData,
      id: Math.random().toString(),
      status: 'OPEN'
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);

    this.loggingService.log("Added Task with the title " + taksData.title);
  }

  get tasksList() {
    return this.tasks.asReadonly();
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) => oldTasks.map((task) => task.id == taskId? {...task, status: newStatus}: task));
  }

  constructor() { }
}
