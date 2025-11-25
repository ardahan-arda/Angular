import { Component, signal } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Subject } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? AsyncSubject, sadece tamamlandığında (complete çağrıldığında) en son yayımlanan değeri tüm abonelere iletir.
      //? İki abone eklendikten sonra subject.next ile iki farklı değer gönderiliyor.
      //? subject.complete() çağrıldığında, her iki aboneye de sadece en son gönderilen değer (789) iletilir.
      //? Konsol çıktısı: 789, 789 şeklinde olur.

      const subject = new AsyncSubject();

      subject.subscribe(console.log);

      subject.next(123);

      subject.subscribe(console.log);

      subject.next(789);
      subject.complete();
   }
}
