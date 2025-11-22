import { Component } from '@angular/core';
import { ValidationDirective } from './validation-directive';

@Component({
  selector: 'app-validation',
  imports: [ValidationDirective],
  templateUrl: './validation.html',
  styleUrl: './validation.css',
})
export class Validation {
  checkInput(event: any) {
    console.log(event.target.validity.valid);
    const valid = event.target.validity.valid;
    if (!valid) {
      event.target.className = 'invalid';
    } else {
      event.target.className = '';
    }
  }
}
