import { Component } from '@angular/core';
import { interval, of, skipWhile, take } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? İstenilen sayıda ilk değeri alır (ilk 2 değer)
      const source = of(1, 2, 3, 4, 5);

      source.pipe(take(2)).subscribe((val) => console.log(val));
   }
}
