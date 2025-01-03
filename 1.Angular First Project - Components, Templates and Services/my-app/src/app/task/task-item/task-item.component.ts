import { Component, Input, inject} from '@angular/core';
import { type TaskItem } from './task-item.model';
import { CardComponent } from '../../shared/card/card.component';


import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-item',
  imports: [CardComponent, DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() taskItem?: TaskItem;

  private tasksService = inject(TaskService);

  onCompleteTask() {
    console.log("completed");
    this.tasksService.removeTask(this.taskItem!.id);
  }
  
}
