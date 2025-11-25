import { Component } from '@angular/core';
import { first, from, interval, last, of, takeLast, takeWhile } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      const source = from([1, 2, 3, 4, 5]);

      //? first() ilk değeri last() son yayılan (emit edilen) değeri alır.

      const example1 = source.pipe(first());
      const example2 = source.pipe(last());

      example1.subscribe((val) => console.log(val));
      example2.subscribe((val) => console.log(val));
   }
}
