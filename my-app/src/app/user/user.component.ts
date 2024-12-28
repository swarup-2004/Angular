import { Component, Input, input, computed, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input() name!: string;

  @Output() select = new EventEmitter<string>();

  // Gives custom events it is not a signal
  // select = output<string>();

  // Using signals -> input signals are read only and you can't modify the values using them
  // avatar = input<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `assets/users/${this.avatar}`);

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }

}








// Using Signals for state management

// import { Component, signal, computed } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {

//   selectedUser = signal(DUMMY_USERS[randomIndex]);

//   imagePath = computed(() => {
//     return `assets/users/${this.selectedUser().avatar}`
//   });

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }

// }
