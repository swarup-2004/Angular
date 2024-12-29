import { Component, Input } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';

import { DUMMY_TASKS } from './dummy-task';
import { NewTaskComponent } from './new-task/new-task.component';
import { type TaskItem } from './task-item/task-item.model';
import { type User } from './task.model';

import { TaskService } from './task.service';
// type User = {
//   id: string,
//   avatar: string,
//   name: string
// }

@Component({
  selector: 'app-task',
  imports: [TaskItemComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

    @Input() user? : User;

    isAddingTask: boolean = false;
  
    // Dependency Injection: You tell angular which type of values you need and angular 
    // creates it and provides it as an argument
    constructor(private taskService: TaskService) {}

    get tasks() {
      console.log(this.taskService.getUserTask(this.user!.id));
      return this.taskService.getUserTask(this.user!.id);
    }
    onStartAddTask() {
      this.isAddingTask = true;
    }

    onCancelAddTask() {
      this.isAddingTask = false;
    }

    onSubmitTask(task: TaskItem) {
      
      this.taskService.addTask(task, this.user!.id);
      this.isAddingTask = false;
    }


  

}
