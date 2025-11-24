import { Component } from '@angular/core';
import { concatMap, fromEvent, interval, Observable, of, skip, take } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? concatMap: Her bir kaynak değeri için iç observable'ı sırayla başlatır.
      //? Önceki iç observable tamamlanmadan bir sonrakini başlatmaz.

      //? Örnek 1

      // const source$ = new Observable((subscriber) => {
      //    setTimeout(() => {
      //       subscriber.next('Ardahan');
      //    }, 2000);
      //    setTimeout(() => {
      //       subscriber.next('Gülhizar');
      //    }, 4000);
      // });

      // source$.pipe(concatMap((val) => of(1, 2))).subscribe((val) => console.log(val));

      //? Örnek 2

      //? Her tıklamada, 0'dan başlayarak 3'e kadar (toplam 4) sayı üreten bir observable başlatılır.
      //? Yeni bir tıklama olursa, önceki sayı dizisi bitene kadar yenisi başlamaz.

      const clicks = fromEvent(document, 'click');
      const result = clicks.pipe(concatMap((ev) => interval(50).pipe(take(4))));
      result.subscribe((val) => console.log(val));
   }
}
