import { Component } from '@angular/core';
import { filter, from, interval, skip } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? Örnek 1

      // const source = interval(1000);
      // const example = source.pipe(skip(4));
      // example.subscribe((val) => console.log(val));

      //? Örnek 2
      const numArraysObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      //? skip: Belirtilen sayı kadar ilk değeri atlar, sonrakileri yaymaya başlar.
      numArraysObs.pipe(skip(5)).subscribe((val) => console.log(val));

      console.log('---');

      //? filter ile de yukarıdaki aynı işlem yapılabilir.
      numArraysObs.pipe(filter((val, index) => index > 4)).subscribe((val) => console.log(val));
   }
}
