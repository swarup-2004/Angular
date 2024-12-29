import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TaskItem } from '../task-item/task-item.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<TaskItem>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TaskService);

  onCancelTask() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      dueDate : this.enteredDate,
      id: "",
      userId: ""
    })
  }

}
