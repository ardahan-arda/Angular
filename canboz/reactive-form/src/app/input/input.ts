import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
   selector: 'app-input',
   imports: [ReactiveFormsModule],
   templateUrl: './input.html',
   styleUrl: './input.css',
})
export class InputComponent {
   @Input() abstractControl: AbstractControl | null = null;
   @Input() label: string = '';

   get control(): FormControl {
      return this.abstractControl as FormControl;
   }

   showErrors() {
      const { dirty, touched, errors } = this.control;
      return dirty && touched && errors;
   }
}
