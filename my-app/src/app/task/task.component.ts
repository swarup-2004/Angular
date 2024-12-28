import { Component, Input } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';

import { DUMMY_TASKS } from './dummy-task';
// type User = {
//   id: string,
//   avatar: string,
//   name: string
// }

interface User {
  id: string,
  avatar: string,
  name: string
}


@Component({
  selector: 'app-task',
  imports: [TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

    @Input() user? : User;
    tasks = DUMMY_TASKS;


  

}
