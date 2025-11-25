import { Component } from '@angular/core';
import {
   AbstractControl,
   FormControl,
   FormGroup,
   ReactiveFormsModule,
   Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input';
import { DateFormControl } from '../date-form-control';

@Component({
   selector: 'app-cardform',
   imports: [ReactiveFormsModule, InputComponent],
   templateUrl: './cardform.html',
   styleUrl: './cardform.css',
})
export class Cardform {
   cardForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      cardNumber: new FormControl(null, [
         Validators.required,
         Validators.minLength(16),
         Validators.maxLength(16),
      ]),
      expiration: new DateFormControl(null, [
         Validators.required,
         Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
      ]),
      securityCode: new FormControl(null, [
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(3),
      ]),
   });

   convertToFormControl(abstractControl: AbstractControl | null): FormControl {
      debugger;
      const control = abstractControl as FormControl;
      return control;
   }

   onSubmit() {
      console.log('Arda');
   }

   resetForm() {
      this.cardForm.reset();
   }
}
