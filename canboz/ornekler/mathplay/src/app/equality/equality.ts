import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EqualityValidators } from './customValidators/equality-validators';
import { delay, filter, scan } from 'rxjs';

@Component({
   selector: 'app-equality',
   imports: [ReactiveFormsModule, DecimalPipe],
   templateUrl: './equality.html',
   styleUrl: './equality.css',
})
export class Equality implements OnInit {
   mathForm: FormGroup = new FormGroup(
      {
         firstNumber: new FormControl(this.generateNumber()),
         secondNumber: new FormControl(this.generateNumber()),
         answer: new FormControl(''),
      },
      [EqualityValidators.addition('answer', 'firstNumber', 'secondNumber')]
   );

   seconds: number = 0;
   trueAnswer: number = 0;

   get firstNumber() {
      return this.mathForm.value.firstNumber;
   }

   get secondNumber() {
      return this.mathForm.value.secondNumber;
   }

   ngOnInit(): void {
      const startTime = new Date();

      //? RxJS - scan() ile çözüm

      this.mathForm.statusChanges
         .pipe(
            filter((value) => value === 'VALID'),
            delay(500),
            scan(
               (acc) => {
                  return { trueAnswer: acc.trueAnswer + 1, startTime: acc.startTime };
               },
               { trueAnswer: 0, startTime: new Date() }
            )
         )
         .subscribe({
            next: ({ trueAnswer, startTime }) => {
               this.trueAnswer = trueAnswer;
               this.seconds = (new Date().getTime() - startTime.getTime()) / trueAnswer / 1000;

               this.mathForm.setValue({
                  firstNumber: this.generateNumber(),
                  secondNumber: this.generateNumber(),
                  answer: '',
               });
            },
         });

      //? Normal Çözüm

      // this.mathForm.statusChanges
      //    .pipe(
      //       filter((value) => value === 'VALID'),
      //       delay(500)
      //    )
      //    .subscribe({
      //       next: (val) => {
      //          this.trueAnswer++;
      //          this.seconds = (new Date().getTime() - startTime.getTime()) / this.trueAnswer / 1000;
      //          this.checkValue(val);
      //       },
      //    });
   }

   generateNumber(): number {
      return Math.floor(Math.random() * 11);
   }

   checkValue(value: FormControlStatus) {
      if (value === 'INVALID') {
         return;
      }
      //? setValue kullanılırsa tüm değerler update edilmeli.
      this.mathForm.setValue({
         firstNumber: this.generateNumber(),
         secondNumber: this.generateNumber(),
         answer: '',
      });

      //? patchValue da tüm değerler update edilmek zorunda değil.
      // this.mathForm.patchValue({
      //    secondNumber: this.generateNumber(),
      //    answer: '',
      // });
   }
}
