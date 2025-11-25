import { Component } from '@angular/core';
import { interval, of, takeLast, takeWhile } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? Koşul doğru olduğu sürece yaymaya devam eder. değer 5 olana kadar değerleri alır ve durur
      const source = interval(1000);

      source.pipe(takeWhile((val) => val < 5)).subscribe((val) => console.log(val));
   }
}
