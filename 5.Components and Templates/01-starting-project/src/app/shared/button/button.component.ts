import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({required: true}) buttonText!: string;
  @Input({required: true}) buttonIcon!: string;


}
