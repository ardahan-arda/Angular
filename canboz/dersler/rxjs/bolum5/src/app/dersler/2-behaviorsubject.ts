import { Component, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
   selector: 'app-root',
   imports: [],
   templateUrl: '../app.html',
   styleUrl: '../app.css',
})
export class App {
   constructor() {
      //? Örnek 1

      //? Bu örnekte BehaviorSubject'in en son değeri yeni abonelere hemen ilettiği gösterilmektedir.
      //? İlk abone (Sub A) eklendiğinde mevcut değeri alır, sonraki değerleri de alır.
      //? İkinci abone (Sub B) eklendiğinde o anki değeri alır ve sonraki değerleri almaya devam eder.
      //? Konsol çıktısı: Sub A: 1, Sub A: 2, Sub B: 2, Sub A: 3, Sub B: 3 şeklinde olur.

      // const sub = new BehaviorSubject(0);

      // sub.next(1);

      // sub.subscribe((x) => {
      //    console.log('Sub A:', x);
      // });

      // sub.next(2);

      // sub.subscribe((x) => {
      //    console.log('Sub B:', x);
      // });

      // sub.next(3);

      //? Örnek 2

      //? Bu örnekte üç farklı abone BehaviorSubject'e abone oluyor.
      //? İlk iki abone eklendiğinde başlangıç değeri olan 123'ü hemen alır.
      //? subject.next(456) ile değer 456 olur ve iki aboneye iletilir.
      //? Üçüncü abone eklendiğinde mevcut değer olan 456'yı hemen alır.
      //? subject.next(789) ile tüm abonelere 789 değeri iletilir.
      //? Konsol çıktısı: 123, 123, 456, 456, 456, 789, 789, 789 şeklinde olur.

      const subject = new BehaviorSubject(123);

      subject.subscribe(console.log);
      subject.subscribe(console.log);

      subject.next(456);

      console.log('---');

      subject.subscribe(console.log);

      console.log('---');

      subject.next(789);
   }
}
