import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';

function isSamePassword(control: AbstractControl) {
  if (control.value.password === control.value.confirmPassword) {
    return null;
  }

  return {differentPassword: true};
}



@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), isSamePassword];

    }),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    streetName: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    role: new FormControl<'student' | 'teacher' | 'employee' | 'other'>('student'),
    agree: new FormControl('', Validators.required)

  });


  // ngOnInit() {

  //   const savedForm = window.localStorage.getItem('saved-signup-form');
  //   if (savedForm) {
  //     const loadedForm = JSON.parse(savedForm);
  //     this.form.patchValue({
  //       email: loadedForm.email,
  //     });
  //   }
  //   const subscription = this.form.valueChanges.subscribe({
  //     next: value => {
  //       window.localStorage.setItem('saved-signup-form', JSON.stringify({
  //         email: value.email, 
  //         password: value.password
  //       }));
  //     }
  //   });
  // }

  onSubmit() {
    if (this.form.invalid) {
      console.log("INVALID FORM");
      return;
    }
    console.log(this.form);
  }
}
