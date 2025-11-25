import { Component, signal } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? Bu örnekte ReplaySubject(3) kullanılıyor.
      //? ReplaySubject, yeni abone olanlara son N (burada 3) yayımlanan değeri hemen iletir.
      //? İlk abone (Sub1) eklendiğinde, o ana kadar yayımlanan son 3 değer (3, 4, 5) hemen iletilir, ardından yayımlanan yeni değerleri (6, 7, 8, 9, 10, 11, 12, 13) de alır.
      //? İkinci abone (Sub2) eklendiğinde, o ana kadar yayımlanan son 3 değer (10, 11, 12) hemen iletilir, ardından yayımlanan yeni değeri (13) de alır.
      //? Konsol çıktısı: Sub1: 3, Sub1: 4, Sub1: 5, Sub1: 6, Sub1: 7, Sub1: 8, Sub1: 9, Sub1: 10, Sub1: 11, Sub1: 12, Sub1: 13, "Sub2:" 10, "Sub2:" 11, "Sub2:" 12, "Sub2:" 13 şeklinde olur.

      const subject = new ReplaySubject(3);

      subject.next(1);
      subject.next(2);
      subject.next(3);
      subject.next(4);
      subject.next(5);

      subject.subscribe((val) => console.log('Sub1:', val));

      subject.next(6);
      subject.next(7);
      subject.next(8);
      subject.next(9);
      subject.next(10);
      subject.next(11);
      subject.next(12);

      subject.subscribe((val) => console.log('"Sub2:"', val));
      subject.next(13);
   }
}
