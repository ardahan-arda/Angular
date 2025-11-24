import { Component } from '@angular/core';
import { concatMap, fromEvent, interval, Observable, of, skip, switchMap, take } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? switchMap: Yeni bir kaynak değeri geldiğinde, önceki iç observable'ı iptal eder ve yenisini başlatır.
      //? Her tıklamada 0'dan başlayarak 3'e kadar sayı üreten observable başlatılır, yeni tıklama olursa önceki iptal edilir.

      const clicks = fromEvent(document, 'click');
      clicks
         .pipe(switchMap(() => interval(500).pipe(take(10))))
         .subscribe((val) => console.log(val));
   }
}
