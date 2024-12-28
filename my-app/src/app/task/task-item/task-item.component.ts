import { Component, Input } from '@angular/core';

interface TaskItem {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,
}
@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() taskItem?: TaskItem;
  
}
